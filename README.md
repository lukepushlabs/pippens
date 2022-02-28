# 🐨 FWBxRally Hackathon Submission For Team Pippins 🐨

Pulse is the social layer for Rally communities.

Hosted at https://pippens.vercel.app/, test it out! 

This proof-of-concept demonstrates:
- Usage and querying of the Rally endpoints
- Automatic card creation for every existing Rally creator
- Flow for both a web3 native user and a public card

In the future, this project will be extended to include:
- Customizable cards using blocks to tailer the space to each unique creator
  - Different blocks for different creator types
- Social features to build community between fans
- Approachable education for non-web3, non-Rally fans who want to dive into the community

## 👉 Use the code
Install dependencies
```
npm install
```
Update your `.env` file with values for each environment variable
```
API_KEY=AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas
etc ...
```

Run the development server
```
npm run dev
```
When the above command completes you'll be able to view your website at `http://localhost:3000`

## 🥞 Stack
This project uses the following libraries and services:
- Framework - [Next.js](https://nextjs.org)
- UI Kit - [Material UI](https://material-ui.com)
- Database - [Cloud Firestore](https://firebase.google.com/products/firestore)
- Hosting - [Vercel](https://vercel.com)
  