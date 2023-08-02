'use client'
import React, { useState, useEffect } from "react";
import Dashboard from "./API.js";

export default function SideBar() {
    const [network, setNetwork] = useState("");
    const [isPolkaDisabled, setPolkaDisabled] = useState(false);
    const [isAdaDisabled, setAdaDisabled] = useState(false);
    const [isKusamaDisabled, setKusamaDisabled] = useState(false);

    function set() {
        setNetwork("polkadot");
    }

    function setCardano() {
        setNetwork("cardano");
    }

    function setKSM() {
        setNetwork("kusama");
    }

    function disablePolka() {
        setPolkaDisabled(true);
        // window.location.reload();
    }

    function enablePolka() {
        setPolkaDisabled(false);
    }

    function disableAda() {
        setAdaDisabled(true);
        // window.location.reload();
    }

    function enableAda() {
        setAdaDisabled(false);
    }

    function disableKusama() {
        setKusamaDisabled(true);
        // window.location.reload();
    }

    function enableKusama() {
        setKusamaDisabled(false);
    }

    function handleChange(e) {
        if(e.target.checked) {
            alert("checked");
        } else {
            alert("unchecked");
        }
    }

    useEffect(() => {
        if(network === "polkadot") {

        }
    }) 

    // Load initial state from local storage
    useEffect(() => {
        const storedPolkaState = localStorage.getItem('polkaButtonState');
        const storedAdaState = localStorage.getItem('adaButtonState');
        const storedKusamaState = localStorage.getItem('kusamaButtonState');

        if (storedPolkaState !== null) {
        setPolkaDisabled(JSON.parse(storedPolkaState));
        }

        if (storedAdaState !== null) {
        setAdaDisabled(JSON.parse(storedAdaState));
        }

        if (storedKusamaState !== null) {
        setKusamaDisabled(JSON.parse(storedKusamaState));
        }
    }, []);

    // Save the current state to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('polkaButtonState', JSON.stringify(isPolkaDisabled));
        localStorage.setItem('adaButtonState', JSON.stringify(isAdaDisabled));
        localStorage.setItem('kusamaButtonState', JSON.stringify(isKusamaDisabled));
    }, [isPolkaDisabled, isKusamaDisabled, isAdaDisabled]);

    return (
        <>
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                    <li>
                        <p href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                        <img className="main-image" src="https://cdn-icons-png.flaticon.com/128/6928/6928365.png"/>
                        <span class="ml-3 text-2xl">Stake Scan</span>
                        </p>
                    </li>
                    <li className={`group ${network === "polkadot" ? "bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700 group"}`} id="polka-button">
                        <button onClick={set} disabled={isPolkaDisabled} class="polka flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <img className="polka-image" src="data:image/png;base64,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"/>
                        <span class="flex-1 ml-3 whitespace-nowrap">Polkadot (DOT)</span>
                        {!isPolkaDisabled ? <span class="toggle-polka"><label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" id="toggle-polka" checked onChange={disablePolka}/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label></span> : <span class="toggle-polka"><label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" id="toggle-polka" onChange={enablePolka}/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label></span>}
                        </button>
                    </li>
                    <li className={`group ${network === "cardano" ? "bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700 group"}`}>
                        <button onClick={setCardano} disabled={isAdaDisabled} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <img className="polka-image" src="https://cdn-icons-png.flaticon.com/128/7016/7016514.png"/>
                        <span class="flex-1 ml-3 whitespace-nowrap">Cardano (ADA)</span>
                        {!isAdaDisabled ? <span class="toggle-ada"><label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" id="toggle-polka" checked onChange={disableAda}/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label></span> : <span class="toggle-ada"><label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" id="toggle-polka" onChange={enableAda}/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label></span>}
                        </button>
                    </li>
                    <li className={`group ${network === "kusama" ? "bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700 group"}`}>
                        <button onClick={setKSM} disabled={isKusamaDisabled} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <img className="polka-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjyU8vJBqNh_It0ozFuQio5gSFnykVwCckw&usqp=CAU"/>
                        <span class="flex-1 ml-3 whitespace-nowrap">Kusama (KSM)</span>
                        {!isKusamaDisabled ? <span class="toggle-kusama"><label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" id="toggle-polka" checked onChange={disableKusama}/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label></span> : <span class="toggle-kusama"><label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" id="toggle-polka" onChange={enableKusama}/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label></span>}
                        </button>
                    </li>

                </ul>
            </div>
            </aside>

            <div className="p-4 sm:ml-64">
                {network === "" ? <h1 className="dashboard text-3xl font-bold">Please select a network</h1> : <p></p>}
                <Dashboard network={network}/>
            </div>
        </>
    )
}