import React, { useContext, useEffect, useRef } from "react";
import "./secondSection.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { LanguageContext } from "../../Contexts/LanguageContext";

const SecondSection = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div className="secondSectionContainer">
            <AnimatedOnScroll className="imageAnimation1" animationIn="zoomIn">
                <div className="img1"></div>
            </AnimatedOnScroll>
            <div className="secondSectionPH1">
                <AnimatedOnScroll animationIn="fadeInUp">
                    <h1>
                        {language === "en"
                            ? "Achieve Your Best Self"
                            : "השג את הגרסה הטובה ביותר של עצמך"}
                    </h1>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInUp">
                    <p
                        style={{
                            direction: language === "en" ? "ltr" : "rtl",
                        }}
                    >
                        {language === "en"
                            ? "No more generic workouts."
                            : "לא עוד אימונים גנריים."}
                        <br />
                        {language === "en"
                            ? "No more cookie-cutterplans."
                            : "לא עוד תוכניות סטנדרטיות."}
                        <br />
                        {language === "en"
                            ? "Every body is unique, and at PROACTIVE Gym, we tailor your fitness journey just for you."
                            : "כל גוף הוא ייחודי, ובמכון הכושר- פרו אקטיב, אנו מתאימים את מסע הכושר שלך במיוחד עבורך."}
                        <br />
                        <br />
                        {language === "en"
                            ? "Your individual fitness levels and goals help us createprecise workout regimens. Our trainers turn yourpersonal data into effective, actionable fitnessplans."
                            : "רמות הכושר והמטרות האישיות שלך עוזרים לנו ליצור תוכניות אימון מדויקות. המאמנים שלנו הופכים את הנתונים האישיים שלך לתוכניות כושר אפקטיביות וישימות."}
                    </p>
                </AnimatedOnScroll>
            </div>
            <AnimatedOnScroll className="imageAnimation2" animationIn="zoomIn">
                <div className="img2"></div>
            </AnimatedOnScroll>
            <AnimatedOnScroll className="imageAnimation3" animationIn="zoomIn">
                <div className="img3"></div>
            </AnimatedOnScroll>

            <div className="imagesForSmallScreen">
                <AnimatedOnScroll
                    className="imageAnimation1"
                    animationIn="zoomIn"
                >
                    <div className="img1"></div>
                </AnimatedOnScroll>
                <AnimatedOnScroll
                    className="imageAnimation3"
                    animationIn="zoomIn"
                >
                    <div className="img3"></div>
                </AnimatedOnScroll>
                <AnimatedOnScroll
                    className="imageAnimation2"
                    animationIn="zoomIn"
                >
                    <div className="img2"></div>
                </AnimatedOnScroll>
            </div>
        </div>
    );
};

export default SecondSection;
