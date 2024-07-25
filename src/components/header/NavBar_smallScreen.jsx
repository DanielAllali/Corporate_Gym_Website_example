import React, { useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar_smallScreen = ({ display, setDisplay, language, setLanguage }) => {
    const navSmConRef = useRef(null);
    const ulSmallRef = useRef(null);
    const selectSmallRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (
            display &&
            navSmConRef.current &&
            ulSmallRef.current &&
            selectSmallRef.current
        ) {
            setTimeout(() => {
                navSmConRef.current.style.right = "0";
                ulSmallRef.current.style.right = "0";
                selectSmallRef.current.style.right = "0";
            }, 1);
        }
    }, []);
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };
    const handleClose = () => {
        setTimeout(() => {
            navSmConRef.current.style.right = "-90vw";
            wrapperRef.current.style.background = "none";
        }, 1);
        setTimeout(() => {
            setDisplay(false);
        }, 400);
    };
    return (
        <div className="navSmallWrapper" ref={wrapperRef}>
            <div className="navSmallContainer" ref={navSmConRef}>
                <button onClick={handleClose}>
                    {language === "en" ? "CLOSE" : "סגור"}
                </button>
                <ul ref={ulSmallRef}>
                    <a onClick={handleClose} href="#about">
                        <li>
                            {language === "en" ? "ABOUT" : "אודות"}
                            <i className="bi bi-arrow-up-right"></i>
                        </li>
                    </a>
                    <a onClick={handleClose} href="#contact">
                        <li>
                            {language === "en" ? "CONTACT" : "צור קשר"}
                            <i className="bi bi-arrow-up-right"></i>
                        </li>
                    </a>
                    <a onClick={handleClose} href="#faq">
                        <li>
                            {language === "en" ? "FAQ" : "שאלות נפוצות"}
                            <i className="bi bi-arrow-up-right"></i>
                        </li>
                    </a>
                    <a onClick={handleClose} href="#services">
                        <li>
                            {language === "en" ? "SERVICES" : "שירותים"}
                            <i className="bi bi-arrow-up-right"></i>
                        </li>
                    </a>
                </ul>
                <div className="circleLogo"></div>
                <select
                    onChange={(e) => {
                        handleLanguageChange(e);
                    }}
                    className="selectSmall"
                    ref={selectSmallRef}
                >
                    {language === "en" && (
                        <>
                            <option value="en">lang: EN</option>
                            <option value="he">lang: HE</option>
                        </>
                    )}
                    {language === "he" && (
                        <>
                            <option value="he">lang: HE</option>
                            <option value="en">lang: EN</option>
                        </>
                    )}
                </select>
            </div>
        </div>
    );
};

export default NavBar_smallScreen;
