import React from "react";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import s from './Card.module.css'
import {CardResponseType} from "../../../../m2-bll/cards-reducer";

export const Card = (props: CardResponseType) => {
    return (
        <div className={s.cardItem}>
            <div className={s.cardSpecification}>{props.question}</div>
            <div className={s.cardSpecification}>{props.answer}</div>
            <div className={s.cardSpecification}>{props.grade}</div>
            <div className={s.cardSpecification}>{props.updated}</div>
            <div className={s.cardSpecification}>{props.more_id}</div>
            <div className={s.cardSpecification}><SuperButton>delete</SuperButton></div>
            <div className={s.cardSpecification}><SuperButton>edit</SuperButton></div>

        </div>
    )

}
