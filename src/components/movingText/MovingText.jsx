import React from "react";
import "./movingText.css";

const MovingText = ({ content, color = "#fff" }) => {
    return (
        <div className="movingTextCont">
            <div className="movingText">
                <h1 style={{ color: color }}>{content}</h1>
            </div>
        </div>
    );
};

export default MovingText;
