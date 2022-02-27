import React from "react";
import Meta from "components/Meta";

function CreatorPage({ creator, priceInUSD, priceInRLY, rallyError }) {
  return (
    <>
      <Meta />
      <h1>Creator: {creator}</h1>
      <h1>Token Price: {priceInUSD}</h1>
      <h1>Token Price in Rally: {priceInRLY}</h1>
      <h1>Error: {rallyError}</h1>
    </>
  );
}

CreatorPage.getInitialProps = async (ctx) => {
  let creator = ctx.query.creator;

  let symbol = new String(creator).toLowerCase()
  const rallyData = await fetch(`https://api.rally.io/v1/creator_coins/${symbol}/price`)
  const rallyJSON = await rallyData.json()
  let priceInUSD = parseFloat(rallyJSON.priceInUSD).toFixed(2)
  let priceInRLY = parseFloat(rallyJSON.priceInRLY).toFixed(2)
  let rallyError = rallyJSON.errorMessage
  console.log(rallyError)
  console.log(rallyJSON)

  return { creator, priceInUSD, priceInRLY, rallyError };
}

export default CreatorPage;
