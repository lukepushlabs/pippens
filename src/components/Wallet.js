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
          transform: 'translateY(-50%)',
          textAlign: 'center',
          width: '100%'
        }}>
          <div>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => activateBrowserWallet()}
              >
                Connect Using Metamask
              </Button>
            </div> 
            <div style={{marginTop: 40}}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                type="submit"
                onClick={() => setGuest(true)}
              >
                Connect As Guest
              </Button>
          </div>
        </div>
      ) : (
        <>
          {props.children}
        </>
      )}
    </>
  );
}


