import React, {useContext} from 'react';
import {ShowMenuItemContext} from "../context";
import DesignDocumentScreen from "../screens/DesignDocumentScreen";
import ClickAppScreen from "../screens/ClickAppScreen";
import ClicksPerUserScreen from "../screens/ClicksPerUserScreen";
import LoginScreen from "../screens/LoginScreen";
import AboutScreen from "../screens/AboutScreen";
import "./AppMainComponent.css"

function AppMainComponent() {
    const {showMenuItem} = useContext(ShowMenuItemContext);


    return (
        <main>
            {showMenuItem==="design" && (<DesignDocumentScreen/>) }
            {showMenuItem==="klikApp" && (<ClickAppScreen/>) }
            {showMenuItem==="usage" && (<ClicksPerUserScreen/>) }
            {showMenuItem==="about" && (<AboutScreen/>) }
            {showMenuItem==="login" && (<LoginScreen/>) }
        </main>
    )
}

export default AppMainComponent;