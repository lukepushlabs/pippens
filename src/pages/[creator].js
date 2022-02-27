import React from "react";
import Meta from "components/Meta";

function CreatorPage({ priceInUSD, priceInRLY, rallyJSON, rallyError }) {
  return (
    <>
      <Meta />
      <img src={rallyJSON.imageUrl} alt="Logo" />
      <h1>Creator: {rallyJSON.name}, Token: {rallyJSON.symbol}</h1>
      <h1>Token Price: {priceInUSD}</h1>
      <h1>Token Price in Rally: {priceInRLY}</h1>
      <h1>Rally since {rallyJSON.launchTimestamp}</h1>
    </>
  );
}

CreatorPage.getInitialProps = async (ctx) => {
  let creator = ctx.query.creator;

  let symbol = new String(creator).toLowerCase()
  const priceData = await fetch(`https://api.rally.io/v1/creator_coins/${symbol}/price`)
  const rallyData = await fetch(`https://api.rally.io/api/creator-coins/${symbol}`)
  const priceJSON = await priceData.json()
  const rallyJSON = await rallyData.json()
  let priceInUSD = parseFloat(priceJSON.priceInUSD).toFixed(2)
  let priceInRLY = parseFloat(priceJSON.priceInRLY).toFixed(2)

  let rallyError = rallyJSON.errorMessage
  console.log(rallyError)
  console.log(rallyJSON)
  console.log(priceJSON)

  return { priceInUSD, priceInRLY, rallyJSON, rallyError };
}

export default CreatorPage;
