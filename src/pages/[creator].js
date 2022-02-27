import React from "react";
import Meta from "components/Meta";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

function CreatorPage({ priceInUSD, priceInRLY, rallyJSON, rallyError }) {
  const classes = useStyles();

  const items = [
    {
      title: "Coin Price",
      description: "$" + priceInUSD,
      image: rallyJSON.imageUrl,
    },
  ];

  return (
    <>
      <Meta />
      <Section
        bgColor={"white"}
      >
        <Container>
          <SectionHeader
            title={rallyJSON.name}
            subtitle={"$" + rallyJSON.symbol}
            size={4}
            textAlign="center"
          />
          <Container
            maxWidth="md"
            disableGutters={true}
            className={classes.itemsContainer}
          >
            {items.map((item, index) => (
            <Grid
              className={classes.row}
              container={true}
              item={true}
              alignItems="center"
              spacing={4}
              key={index}
            >
              <Grid item={true} xs={12} md={6}>
                <Box
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                >
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <figure className={classes.figure}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.image}
                  />
                </figure>
              </Grid>
            </Grid>
          ))}
          </Container>
        </Container>
      </Section>




      {/* <img src={rallyJSON.imageUrl} width={200} height={200} alt="Logo" />
      <h1>Creator: {rallyJSON.name}, Token: {rallyJSON.symbol}</h1>
      <h1>Token Price: {priceInUSD}</h1>
      <h1>Token Price in Rally: {priceInRLY}</h1>
      <h1>Rally since {rallyJSON.launchTimestamp}</h1> */}
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
