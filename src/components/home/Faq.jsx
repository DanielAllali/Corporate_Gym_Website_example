import React, { useContext, useState } from "react";
import "./faq.css";
import { LanguageContext } from "../../Contexts/LanguageContext";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const faqData = [
    {
        key: "one",
        en: "Do you offer personal training services?",
        he: "האם אתם מציעים אימונים אישיים?",
        enAnswer:
            "Yes, we offer personal training services with certified trainers. Contact us for more information.",
        heAnswer:
            "כן, אנחנו מציעים אימונים אישיים עם מאמנים מוסמכים. צרו קשר לעוד מידע.",
    },
    {
        key: "two",
        en: "How do I contact customer support?",
        he: "איך ליצור קשר עם שירות לקוחות?",
        enAnswer:
            "You can reach our customer support team via phone, email, or by visiting our front desk during operating hours. Our contact information is available on our website.",
        heAnswer:
            "אפשר ליצור קשר עם שירות לקוחות דרך מספר הטלפון שלנו, מייל או פרונטלית במכון.",
    },
    {
        key: "three",
        en: "Can I put my membership on hold?",
        he: "אני יכול להקפיא מנוי?",
        enAnswer:
            "Yes, we offer membership holds for vacations or medical reasons. Please contact our customer support.",
        heAnswer:
            "כן, אנחנו מציעים הקפאת מנוי לחופשות או סיבות רפואיות. צרו קשר עם שירות הלקוחות.",
    },
    {
        key: "four",
        en: "Are there any age restrictions for gym access?",
        he: "האם יש הגבלת גיל?",
        enAnswer:
            "Members must be at least 16 years old to use the gym independently. Members under 16 can access the gym with a guardian and must adhere to specific guidelines.",
        heAnswer:
            "חברים חייבים להיות לפחות בני 16 על מנת להשתמש בחדר הכושר באופן עצמאי. חברים מתחת לגיל 16 יכולים לגשת לחדר הכושר בליווי של אפוטרופוס ולהקפיד על הנחיות ספציפיות.",
    },
    {
        key: "five",
        en: "What equipment do you have available?",
        he: "אילו מכשירים יש לכם בחדר הכושר?",
        enAnswer:
            "Our gym is equipped with a wide range of cardio machines, free weights, resistance machines, and functional training tools. We also have designated areas for stretching and functional exercises.",
        heAnswer:
            "החדר כושר שלנו מצויד במגוון רחב של מכשירי כושר אירוביים, משקולות חופשיות, מכשירי התנגדות וכלי אימון פונקציונליים. כמו כן, יש לנו אזורים ייעודיים למתיחות ולאימונים פונקציונליים.",
    },
    {
        key: "six",
        en: "What safety measures do you have in place?",
        he: "אילו אמצעי בטיחות יש לכם בחדר הכושר?",
        enAnswer:
            "We prioritize your safety with regular equipment maintenance, sanitation procedures, and staff training. We also have first aid kits available and trained staff to handle emergencies.",
        heAnswer:
            "אנו שמים דגש על הבטיחות שלכם באמצעות תחזוקה שוטפת של הציוד, נהלי ניקוי והדרכה של הצוות. כמו כן, יש לנו ערכות עזרה ראשונה זמינות וצוות מוסמך לטיפול במצבי חירום.",
    },
];

const Faq = () => {
    const { language } = useContext(LanguageContext);
    const [openFaqs, setOpenFaqs] = useState({});

    const handleToggleFaq = (key) => {
        setOpenFaqs((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <div className="faqs">
            <AnimatedOnScroll animationIn="fadeInLeft">
                <h1 style={{ order: language === "en" ? 1 : 2 }}>
                    {language === "en"
                        ? "Your answers to"
                        : "תשובות לשאלות נפוצות"}
                    <br />
                    {language === "en" ? "popular questions" : ""}
                </h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeInRight">
                <ul style={{ order: language === "en" ? 2 : 1 }}>
                    {faqData.map(({ key, en, he, enAnswer, heAnswer }) => (
                        <li
                            key={key}
                            className={openFaqs[key] ? "expanded" : ""}
                        >
                            <div>
                                <h4
                                    style={{
                                        direction:
                                            language === "en" ? "ltr" : "rtl",
                                    }}
                                >
                                    {language === "en" ? en : he}
                                </h4>
                                <button>
                                    <label className="hamburger">
                                        <input
                                            onClick={() => handleToggleFaq(key)}
                                            type="checkbox"
                                        />
                                        <svg viewBox="0 0 32 32">
                                            <path
                                                className="line line-top-bottom"
                                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                            ></path>
                                            <path
                                                className="line"
                                                d="M7 16 27 16"
                                            ></path>
                                        </svg>
                                    </label>
                                </button>
                            </div>
                            <p
                                style={{
                                    direction:
                                        language === "en" ? "ltr" : "rtl",
                                }}
                            >
                                {language === "en" ? enAnswer : heAnswer}
                            </p>
                        </li>
                    ))}
                </ul>
            </AnimatedOnScroll>
        </div>
    );
};

export default Faq;
