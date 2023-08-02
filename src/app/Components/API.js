'use client'
import React, {useState} from "react";
import Polkadot from "./Polkadot.js";
import Cardano from "./Cardano.js";
import Kusama from "./Kusama.js";

export default function Dashboard(props) {
    const [state, setState] = useState("");
    const [cardano, setCardanoState] = useState("");

    function setCardano(e) {
        e.preventDefault();
        const url = 'https://svc.blockdaemon.com/reporting/staking/v1/cardano/mainnet/delegator/rewards/' + e.target[0].value;
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'X-API-Key': 'zpka_c88ac110209e41a492d37ce4b481e887_0303c2c7'
            }
          };

          fetch(url, options)
            .then(response => response.json())
            .then(response => setCardanoState(response.rewards[0].startingBalance))
            .catch(err => console.error(err));
    }

    function setPolkadot(e) {
        e.preventDefault();
        const addr = e.target[0].value;
        console.log(addr);
        const url = 'https://svc.blockdaemon.com/reporting/staking/v1/polkadot/mainnet/validator/rewards/' + addr;
        console.log(url);
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'X-API-Key': 'zpka_c88ac110209e41a492d37ce4b481e887_0303c2c7'
            }
          };

          fetch(url, options)
            .then(response => response.json())
            .then(response => setState(response[0].startingBalance))
            .catch(err => console.error(err));
    }

    return (
        <>
        {/* <h1>Please select a network</h1> */}
            {props.network === "polkadot" ? <Polkadot /> : <p></p>}
            {props.network === "cardano" ? <Cardano /> : <p></p>}
            {props.network === "kusama" ? <Kusama /> : <p></p>}
        </>
    )
}