import React, { useState } from "react";
import * as Fa from "react-icons/fa"; 
import * as Ai from "react-icons/ai"
import * as Io from "react-icons/io5"

export const SideBarComponent = [
    {
        title: 'Characters',
        path: '/',
        icon: <Io.IoPeople size={25}/>,
        cName: 'nav-text'
    },
    {
        title: 'Location',
        path: '/loc',
        icon: <Fa.FaSearchLocation size={25}/>,
        cName: 'nav-text'
    },
]