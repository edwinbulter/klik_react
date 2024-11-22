import React, {useContext} from 'react';
import {ShowMenuItemContext} from "../context";
import DesignDocumentScreen from "../screens/DesignDocumentScreen";
import ClickAppScreen from "../screens/ClickAppScreen";
import UsageScreen from "../screens/UsageScreen";
import AboutScreen from "../screens/AboutScreen";
import "./AppMainComponent.css"

function AppMainComponent() {
    const {showMenuItem} = useContext(ShowMenuItemContext);


    return (
        <main>
            {showMenuItem==="design" && (<DesignDocumentScreen/>) }
            {showMenuItem==="klikApp" && (<ClickAppScreen/>) }
            {showMenuItem==="usage" && (<UsageScreen/>) }
            {showMenuItem==="about" && (<AboutScreen/>) }
        </main>
    )
}

export default AppMainComponent;