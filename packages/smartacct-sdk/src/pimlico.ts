import "dotenv/config";
import { toSafeSmartAccount } from "permissionless-0.2.0-rc-5/accounts";
import { Hex, createPublicClient, http } from "viem-2.20.0";
import { privateKeyToAccount } from "viem-2.20.0/accounts";
import { sepolia } from "viem-2.20.0/chains";
import { createPimlicoClient } from "permissionless-0.2.0-rc-5/clients/pimlico";
import { createSmartAccountClient } from "permissionless-0.2.0-rc-5";
import { entryPoint07Address } from "viem-2.20.0/account-abstraction";
import { Signer } from './createSmartAccount';

export async function createPimlicoAccount(signer: Signer): Promise<string> {
  const apiKey = process.env.PIMLICO_API_KEY;
  if (!apiKey) throw new Error("Missing PIMLICO_API_KEY");

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http("https://rpc.ankr.com/eth_sepolia"),
  });

  const account = await toSafeSmartAccount({
    client: publicClient,
    owner: privateKeyToAccount(signer.privateKey as Hex),
    entryPoint: {
      address: entryPoint07Address,
      version: "0.7"
    },
    version: "1.4.1",
  });

  const accountAddress = await account.getAddress();
  console.log(`Smart account address: https://sepolia.etherscan.io/address/${accountAddress}`);

  const pimlicoUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`;

  const pimlicoClient = createPimlicoClient({
    transport: http(pimlicoUrl),
    entryPoint: {
      address: entryPoint07Address,
      version: "0.7",
    }
  });

  const smartAccountClient = createSmartAccountClient({
    account,
    chain: sepolia,
    bundlerTransport: http(pimlicoUrl),
    paymaster: pimlicoClient,
    userOperation: {
      estimateFeesPerGas: async () => {
        return (await pimlicoClient.getUserOperationGasPrice()).fast;
      },
    }
  });

  /* usage 
  const userOperation = await smartAccountClient.createUserOperation({
    to: "0x0000000000000000000000000000000000000000",
    data: "0x",
  });
  */

  return accountAddress;
}