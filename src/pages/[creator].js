import React from "react";
import Meta from "components/Meta";
import WalletGate from "components/Wallet";
import { ChainId, useEthers, DAppProvider } from "@usedapp/core";

function CreatorPage({creator}) {
  const {activateBrowserWallet, account } = useEthers();

  return (
    <>
      <Meta />
      <WalletGate>
        <h1>Test-{creator}</h1>
      </WalletGate>
    </>
  );
}

CreatorPage.getInitialProps = async (ctx) => {
  let creator = ctx.query.creator;
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count, creator};
}

export default CreatorPage;
