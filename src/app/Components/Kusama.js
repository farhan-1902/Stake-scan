'use client'
import React, {useEffect, useState} from "react";

export default function Kusama() {
    const [details, setDetails] = useState("");

    useEffect(() => {
        const url = 'https://api.binance.com/api/v3/ticker/price?symbol=KSMUSDT';
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json'
            }
          };

        fetch(url, options)
          .then(response => response.json())
          .then(response => setDetails(response))
          .catch(err => console.error(err));
    })

    function setKusama(e) {
        e.preventDefault();
        const addr = e.target[0].value;
        console.log(addr);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "address": addr
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://kusama.subscan.io/api/open/account", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

    return (
        <>
        <h1 className="text-2xl font-bold">Kusama</h1>
            <div className="polka-card">
              <div className="info-container">
                <p>Market Cap (circulating): $211.82m</p>
                <p>Active Users (daily): 703.67</p>
              </div>
            </div>
            <p className="price">1 KSM: {parseFloat(details.price).toString()} USD💲</p>
        </>
    )
}