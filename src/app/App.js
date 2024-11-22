import React, {useState} from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import AppHeaderComponent from './components/AppHeaderComponent';
import AppMainComponent from './components/AppMainComponent';
import {ShowMenuItemContext} from "./context";
import { Authenticator } from '@aws-amplify/ui-react';
import {Amplify} from "aws-amplify";

Amplify.configure(awsExports);

function App() {

    const [showMenuItem, setShowMenuItem] = useState(undefined);

    return (
        <Authenticator.Provider>
        <ShowMenuItemContext.Provider value={{showMenuItem, setShowMenuItem}}>
            <div className="totalScreen">
                <AppHeaderComponent/>
                <AppMainComponent/>
            </div>
        </ShowMenuItemContext.Provider>
        </Authenticator.Provider>
    );
}

export default App;