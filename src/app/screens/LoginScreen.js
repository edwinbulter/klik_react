import {Authenticator} from "@aws-amplify/ui-react";
import "./LoginScreen.css";

function LoginScreen() {

    return (
        <div className="LoginScreen">
            <Authenticator>
                {({signOut, user}) => (
                    <div className="center">
                        <button className="signoutButton" onClick={signOut}>Logout '{user?.username}'</button>
                    </div>
                )}
            </Authenticator>
        </div>
    );
}

export default LoginScreen;