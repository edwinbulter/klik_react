import {Authenticator} from "@aws-amplify/ui-react";
import CounterComponent from "../components/CounterComponent";
import "./ClickAppScreen.css";

function ClickAppScreen() {

    return (
        <div className="ClickAppScreen">
        <Authenticator>
            {({user}) => (
                <div>
                   <h1 className="hello">Hello {user?.username}!</h1>
                    <div className="counter">
                        <CounterComponent userName={user?.username}/>
                    </div>
                </div>
            )}
        </Authenticator>
        </div>
    );
}

export default ClickAppScreen;