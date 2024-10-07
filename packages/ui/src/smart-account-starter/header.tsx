import * as React from "react"

export function Header(props: React.PropsWithChildren) {
  return (
    <div>
      <header
        className="light pt-12 pb-12 md:py-36 text-white"
        style={{
          backgroundImage: "linear-gradient(145deg, #9013fe 0%, #101a8e 100%)",
        }}
      >
        <div className="container px-4 relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
              <h2 className="text-3xl leading-none md:text-[70px] font-bold mb-6">
                <span className="block lg:inline">Welcome to the</span>{' '}
                <span className="block">Smart Account Starter</span>
              </h2>
              <p className="text-[22px] leading-normal opacity-80 px-12 md:px-44 lg:px-64">
                Create a tool for your users to build smart accounts and wallets. Navigate the array of options in the evolving landscape of blockchain technology.
              </p>

              <div className="flex items-center justify-center mt-12">
              <a href="/#wallets" className="bg-white text-purple-800 font-bold py-3 px-6 rounded-full shadow m-2 hover:bg-purple-100 transition duration-300">
                  Wallets
                </a>
                <a href="/#accounts" className="bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow m-2 hover:bg-purple-800 transition duration-300">
                  Accounts
                </a>
              </div>
              <p className="mt-6 text-sm">* No registration required to explore options</p>
            </div>
          </div>
        </div>
      </header>

      {props.children}
    </div>
  )
}
