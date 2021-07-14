import React, {useEffect, useState} from 'react'
const {ipcRenderer} = window.require("electron");

export default function MenuColumn({children}) {

    return (
        <div>
            {children}            
        </div>
    )
}
