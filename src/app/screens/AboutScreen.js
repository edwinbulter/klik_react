import './AboutScreen.css'

function AboutScreen() {

    return (
        <div className="About">
            <h2>About KLiK</h2>
            <p>
                This simple app is build with a React front-end and AWS Serverless back-end.
            </p>
            <p>
                Resize the width of your browser to switch between between the default menu and the hamburger menu.
            </p>
            <p>
                For the 'KLiK App' screen you will have to create an account. By doing so, your user will also show up in the Usage screen and show the number of times you clicked on the KLiK button.
            </p>
        </div>
    )
}

export default AboutScreen;