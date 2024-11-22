import {Authenticator} from "@aws-amplify/ui-react";
import CounterComponent from "../components/CounterComponent";
import "./ClickAppScreen.css";
import {getPrettyUsername} from "./utils";
import React from "react";
import {signOut} from "@aws-amplify/auth";

function ClickAppScreen() {

    return (
        <div className="ClickAppScreen">
        <Authenticator>
            {({user}) => (
                <div>
                    <h1 className="hello">Hello {getPrettyUsername(user?.username)}!</h1>
                    <div className="counter">
                        <CounterComponent userName={user?.username}/>
                    </div>
                    <button className="signoutButton" onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
        </div>
    );
}

export default ClickAppScreen;