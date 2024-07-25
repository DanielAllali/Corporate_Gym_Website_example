import React, { useContext } from "react";
import "./contact.css";
import { LanguageContext } from "../../Contexts/LanguageContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Contact = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div className="contactDiv">
            <AnimatedOnScroll
                animationIn="fadeInLeft"
                style={{
                    order: language === "en" ? "1" : "2",
                    direction: language === "en" ? "ltr" : "rtl",
                }}
            >
                <h1>
                    {language === "en" ? "This is your life." : "זה החיים שלך."}
                    <br />
                    {language === "en" ? "Come alive for it." : "תחיה אותם."}
                </h1>
                <p>
                    {language === "en"
                        ? "We’re a vital fitness network: with everything you need to ignite, maintain, and enhance your fitness journey. And we're here to help. Have questions about membership or billing? Want to become an affiliate? Or are you a trainer looking for a great place to work? Reach out."
                        : "אנחנו רשת כושר חיונית: עם כל מה שאתה צריך כדי להצית, לשמור ולהעצים את מסע הכושר שלך. ואנחנו כאן לעזור. שאלות בנוגע לחברות או לתשלומים? רוצים להיות שותפים? או אולי אתם מאמנים שמחפשים מקום נהדר לעבוד בו? צרו קשר."}
                </p>
                <p>
                    {language === "en"
                        ? "Email us directly."
                        : "שלחו לנו מייל ישירות."}{" "}
                    <br />
                    proactive.test@gmail.com
                </p>
                <p>
                    {language === "en" ? "Schedule a call." : "קבעו שיחה."}{" "}
                    <br />
                    050-1234567
                </p>
            </AnimatedOnScroll>
            <AnimatedOnScroll
                animationIn="fadeInRight"
                style={{
                    order: language === "en" ? "2" : "1",
                    direction: language === "en" ? "ltr" : "rtl",
                }}
            >
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder={
                                            language === "en"
                                                ? "First Name*"
                                                : "שם פרטי*"
                                        }
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder={
                                            language === "en"
                                                ? "Last Name*"
                                                : "שם משפחה*"
                                        }
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="email"
                                        placeholder={
                                            language === "en"
                                                ? "Email*"
                                                : "אימייל*"
                                        }
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="phone"
                                        placeholder={
                                            language === "en"
                                                ? "Phone*"
                                                : "טלפון*"
                                        }
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea
                                        placeholder={
                                            language === "en"
                                                ? "Message"
                                                : "הודעה"
                                        }
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button>
                        <span className="text">
                            {language === "en"
                                ? "SEND MESSAGE  "
                                : "שלח הודעה  "}
                            <i className="bi bi-arrow-up-right"></i>
                        </span>
                        <span>
                            {language === "en" ? "SEND MESSAGE" : "שלח הודעה"}
                            <i className="bi bi-arrow-up-right"></i>
                        </span>
                    </button>
                </form>
            </AnimatedOnScroll>
        </div>
    );
};

export default Contact;
