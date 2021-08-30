import React from "react"
import s from "./Card/Card.module.css";
import st from "./Cards.module.css";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {Card} from "./Card/Card";

export const Cards = () => {
    return (
        <div>
            <h1>Cards</h1>

            <div className={`${s.cardItem} ${st.cardContents}`}>
                <div>question</div>
                <div>answer</div>
                <div>grade</div>
                <div>last update</div>
                <div>url</div>
                <div><SuperButton>add</SuperButton></div>
                <div></div>
            </div>

            <Card />
            <Card />
            <Card />

        </div>
    )
}