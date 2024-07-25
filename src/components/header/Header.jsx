import React, { useContext, useEffect, useRef, useState } from "react";
import "./header.css";
import { LanguageContext } from "../../Contexts/LanguageContext";
import logo from "../../media/images/ProActive_logo_png.png";
import NavBar_smallScreen from "./NavBar_smallScreen";

const Header = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const [displayNav, setDisplayNav] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevY, setPrevY] = useState(window.scrollY);
    const header = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (prevY > currentY && prevY - currentY > 10) {
                setVisible(true);
            } else if (currentY > prevY && currentY - prevY > 10) {
                setVisible(false);
            }
            setPrevY(currentY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevY]);

    useEffect(() => {
        if (header.current) {
            header.current.style.transition = "margin-top 0.3s";
            header.current.style.marginTop = visible ? "180px" : "-100px";
        }
    }, [visible]);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="headerContainer">
            <header ref={header}>
                <h1>PROACTIVE</h1>
                <div>
                    <nav className="navBig">
                        <ul className="menuBig">
                            <a href="#about">
                                <li>{language === "en" ? "ABOUT" : "אודות"}</li>
                            </a>
                            <a href="#contact">
                                <li>
                                    {language === "en" ? "CONTACT" : "צור קשר"}
                                </li>
                            </a>
                            <a href="#faq">
                                <li>
                                    {language === "en" ? "FAQ" : "שאלות נפוצות"}
                                </li>
                            </a>
                            <a href="#services">
                                <li>
                                    {language === "en" ? "SERVICES" : "שירותים"}
                                </li>
                            </a>
                        </ul>
                    </nav>
                    <select
                        onChange={handleLanguageChange}
                        className="selectBig"
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
                    <h4
                        onClick={() => {
                            setDisplayNav(!displayNav);
                        }}
                        className="menuSmallBtn"
                    >
                        MENU
                    </h4>
                </div>
            </header>
            {displayNav && (
                <NavBar_smallScreen
                    display={displayNav}
                    setDisplay={setDisplayNav}
                    language={language}
                    setLanguage={setLanguage}
                />
            )}
        </div>
    );
};

export default Header;
