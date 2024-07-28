import React, { useContext } from "react";
import "./home.css";
import Header from "../header/Header";
import { LanguageContext } from "../../Contexts/LanguageContext";
import MovingText from "../movingText/MovingText";
import SecondSection from "./SecondSection";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Faq from "./Faq";
import Contact from "./Contact";
import videoBg from "../../media/images/videoBg.mp4";

const Home = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div>
            <Header />
            <section className="firstSec">
                <video autoPlay muted loop class="background-video">
                    <source src={videoBg} type="video/mp4" />
                    Your browser does not support the video.
                </video>
                <button
                    onClick={() => {
                        document
                            .getElementById("contact")
                            .scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">
                        {" "}
                        {language === "en" ? "START TODAY" : "להתחיל היום"}
                    </span>
                </button>
                <AnimatedOnScroll animationIn="fadeInUp">
                    <p>
                        {language === "en"
                            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nonamet facere, nostrum officia tempore consectetur cumasperiores qui impedit quam."
                            : "לורם איפסום דולור סיט אמט, קונסקטטור אדיפיסינג אליט, נון אמט פאצ'רה, נוסטרום אופיציה טמפורה קונסקטטור קום אספריורס קיו ים. אפידיט קוואם."}
                    </p>
                </AnimatedOnScroll>
                <MovingText content={"Where your fitness journey begins"} />
            </section>
            <section
                id="about"
                className="secondSection"
                style={{ minHeight: "100vh" }}
            >
                <SecondSection />
            </section>
            <section
                id="services"
                className="thirdSection"
                style={{ minHeight: "100vh" }}
            >
                <h1>{language === "en" ? "Our schedule" : "שעות פעילות"}</h1>

                <AnimatedOnScroll animationIn="fadeInUp">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    {language === "en" ? "SUNDAY" : "ראשון"}
                                </th>
                                <th>{language === "en" ? "MONDAY" : "שני"}</th>
                                <th>
                                    {language === "en" ? "TUESDAY" : "שלישי"}
                                </th>
                                <th>
                                    {language === "en" ? "WEDNESDAY" : "רביעי"}
                                </th>
                                <th>
                                    {language === "en" ? "THURSDAY" : "חמישי"}
                                </th>
                                <th>{language === "en" ? "FRIDAY" : "שישי"}</th>
                                <th>
                                    {language === "en" ? "SATURDAY" : "שבת"}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {language === "en" ? "9:00 AM" : "9:00"}
                                    <br />-<br />
                                    {language === "en" ? "10:00 PM" : "22:00"}
                                </td>
                                <td>
                                    {language === "en" ? "9:00 AM" : "9:00"}
                                    <br />-<br />
                                    {language === "en" ? "10:00 PM" : "22:00"}
                                </td>
                                <td>
                                    {language === "en" ? "9:00 AM" : "9:00"}
                                    <br />-<br />
                                    {language === "en" ? "10:00 PM" : "22:00"}
                                </td>
                                <td>
                                    {language === "en" ? "9:00 AM" : "9:00"}
                                    <br />-<br />
                                    {language === "en" ? "10:00 PM" : "22:00"}
                                </td>
                                <td>
                                    {language === "en" ? "9:00 AM" : "9:00"}
                                    <br />-<br />
                                    {language === "en" ? "10:00 PM" : "22:00"}
                                </td>
                                <td>
                                    {language === "en" ? "7:00 AM" : "7:00"}
                                    <br />-<br />
                                    {language === "en" ? "5:00 PM" : "17:00"}
                                </td>
                                <td>{language === "en" ? "Closed" : "סגור"}</td>
                            </tr>
                        </tbody>
                    </table>
                </AnimatedOnScroll>
            </section>
            <section
                id="faq"
                className="forthSection"
                style={{ minHeight: "100vh" }}
            >
                <Faq />
            </section>
            <section
                id="contact"
                className="fifthSection"
                style={{ minHeight: "100vh" }}
            >
                <Contact />
            </section>
            <footer>
                <div>
                    <h1>PROACTIVE</h1>
                    <div>
                        <a href="#about">
                            <button className="btn">
                                <span className="btn-text-one">
                                    {language === "en" ? "About" : "אודות"}
                                </span>
                                <span className="btn-text-two">
                                    {language === "en" ? "About" : "אודות"}
                                </span>
                            </button>
                        </a>
                        <a href="#contact">
                            <button className="btn">
                                <span className="btn-text-one">
                                    {language === "en" ? "Contact" : "צור קשר"}
                                </span>
                                <span className="btn-text-two">
                                    {language === "en" ? "Contact" : "צור קשר"}
                                </span>
                            </button>
                        </a>
                        <a href="#faq">
                            <button className="btn">
                                <span className="btn-text-one">
                                    {language === "en" ? "Faq" : "שאלות נפוצות"}
                                </span>
                                <span className="btn-text-two">
                                    {language === "en" ? "Faq" : "שאלות נפוצות"}
                                </span>
                            </button>
                        </a>
                        <a href="#services">
                            <button className="btn">
                                <span className="btn-text-one">
                                    {language === "en" ? "Services" : "שירותים"}
                                </span>
                                <span className="btn-text-two">
                                    {language === "en" ? "Services" : "שירותים"}
                                </span>
                            </button>
                        </a>
                    </div>
                    <MovingText
                        content="Where your fitness journey begins"
                        color="#aaa"
                    />
                </div>
                <div>
                    <hr />
                    <h5>&copy; 2024 DANIEL ALLALI</h5>
                </div>
            </footer>
        </div>
    );
};

export default Home;
