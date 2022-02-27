import React from "react";
import Meta from "components/Meta";

function CreatorPage({creator}) {
  return (
    <>
      <Meta />
      <h1>Test-{creator}</h1>
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
