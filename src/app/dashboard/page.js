'use client'
import React, {useState} from "react";
import SideBar from '../Components/Sidebar.js';

export default function Dashboard() {
    return (
        <>
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
            <SideBar />
        </>
        
    )
}