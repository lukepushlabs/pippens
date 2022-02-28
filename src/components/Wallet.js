import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { ChainId, useEthers, DAppProvider } from "@usedapp/core";


export default function WalletGate(props) {
  const {activateBrowserWallet, account } = useEthers();
  const [guest, setGuest] = useState(false);
  return (
    <>
      {(!account && !guest)  ? (
        <div style={{
          margin: 0,
          position: 'absolute',
          top: '40%',
          transform: 'translateY(-50%)'
        }}>
          <Grid container={true}>
            <Grid item={true}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => activateBrowserWallet()}
              >
                Connect Using Metamask
              </Button>
            </Grid> 
            <Grid item={true}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                type="submit"
                onClick={() => setGuest(true)}
              >
                Connect As Guest
              </Button>
            </Grid> 
          </Grid> 
        </div>
      ) : (
        <>
          {props.children}
        </>
      )}
    </>
  );
}


