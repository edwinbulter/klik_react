import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {ShowMenuItemContext} from "../context";
import './AppHeaderComponent.scss';
import {useAuthenticator} from '@aws-amplify/ui-react';

function AppHeaderComponent() {
    const {showMenuItem, setShowMenuItem} = useContext(ShowMenuItemContext);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const refContainer = useRef();
    const [currentWidth, setCurrentWidth] = useState(0);

    useEffect(() => {
        if (refContainer.current) {
            setCurrentWidth(refContainer.current.offsetWidth);
        }
    }, [currentWidth]);

    function showDesign() {
        setShowMenuItem("design");
    }

    function showKlikApp() {
        setShowMenuItem("klikApp");
    }

    function showUsage() {
        setShowMenuItem("usage");
    }

    function showAbout() {
        setShowMenuItem("about");
    }

    const onClickHamburger = useCallback(() => {
        setShowHamburgerMenu(!showHamburgerMenu);
    }, [showHamburgerMenu]);


    function Hamburger() {
        return (
            <>
                <div className="hamburger" onClick={onClickHamburger}>
                    <div className="burger burger1"/>
                    <div className="burger burger2"/>
                    <div className="burger burger3"/>
                </div>
                <style jsx="true">{`
                    .burger1 {
                        transform: ${showHamburgerMenu ? 'rotate(45deg)' : 'rotate(0)'};
                    }
                    .burger2 {
                        transform: ${showHamburgerMenu ? 'translateX(100%)' : 'translateX(0)'};
                        opacity: ${showHamburgerMenu ? 0 : 1};
                    }
                    .burger3 {
                        transform: ${showHamburgerMenu ? 'rotate(-45deg)' : 'rotate(0)'};
                    }
                `}</style>
            </>
        )
    }

    function HamburgerMenu() {
        return (
            <div className="hamburgerMenu">
                <button className="aboutMobile" onClick={showAbout} disabled={showMenuItem === "about"}>About</button>
                <button className="designMobile" onClick={showDesign} disabled={showMenuItem === "design"}>Design</button>
                <button className="klikAppMobile" onClick={showKlikApp} disabled={showMenuItem === "klikApp"}>KLiK App</button>
                <button className="usageMobile" onClick={showUsage} disabled={showMenuItem === "usage"}>Usage</button>
            </div>)
    }

    function Logo() {
        return (
            <div className="logo">
                <div className="logo-main">KLiK</div>
                <div className="logo-footer">by &copy;CODE-BULTER</div>
            </div>

        )
    }

    return (
        <header>
            <div className="staticBar">
                <Logo/>
                <div className="horizontalMenu">
                    <button className="about" onClick={showAbout} disabled={showMenuItem === "about"}>About</button>
                    <button className="design" onClick={showDesign} disabled={showMenuItem === "design"}>Design</button>
                    <button className="klikApp" onClick={showKlikApp} disabled={showMenuItem === "klikApp"}>KLiK App
                    </button>
                    <button className="usage" onClick={showUsage} disabled={showMenuItem === "usage"}>Usage</button>
                </div>
                <Hamburger/>
            </div>
            <div className="hamburgerMenuHider">
                {showHamburgerMenu && (<HamburgerMenu/>)}
            </div>
        </header>
    )
}

export default AppHeaderComponent;