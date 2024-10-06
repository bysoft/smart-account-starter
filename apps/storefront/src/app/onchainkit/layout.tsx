import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

// import './onchainkit.css';
// import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import dynamic from 'next/dynamic';

const OnchainProviders = dynamic(
  () => import('./components/OnchainProviders'),
  {
    ssr: false,
  },
);

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};


export default function OnchainKitLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <OnchainProviders>
      {children}
    </OnchainProviders>
  );
}
