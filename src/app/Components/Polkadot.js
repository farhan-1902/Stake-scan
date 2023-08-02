'use client'
import React, {useEffect, useState} from "react";

export default function Polkadot() {
    const [state, setState] = useState("");
    const [details, setDetails] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const url = 'https://api.binance.com/api/v3/ticker/price?symbol=DOTUSDT';
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

    useEffect(() => {
        setError(false); // Reset error state whenever state changes
    }, [state]);

    function setPolkadot(e) {
        setLoading(true);
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
            .then(response => setState(response))
            .catch(err => setError(true));
    }

    return (
        <>
        <h1 className="text-2xl font-bold">Polkadot</h1>
            <div className="polka-card">
                <form onSubmit={setPolkadot}>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="search block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter an address" required />
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Search
                        </button>
                    </div>
                </form>
                <br />
                {state !== "" && (
                    <div className="info-container">
                    <p className="Info text-xl">Stake: {state[0].startingBalance} DOT</p>
                    <p className="Info text-xl">Validator Reward: {state[0].metadata.validatorRewards} DOT</p>
                    <p className="Info text-xl">Commission Reward: {state[0].metadata.commissionRewards} DOT</p>
                    <p className="Info text-xl">Era: {state[0].metadata.era}</p>
                    </div>
                )}

                {error && (
                    <p className="Info text-xl">Oops! Looks like the address entered is either invalid or is not a network validator</p>
                )}

            </div>

            <p className="price">1 DOT: {parseFloat(details.price).toString()} USD💲</p>
        </>
    )
}