import React from "react";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import s from './Card.module.css'

export const Card = () => {
    return (
        <div className={s.cardItem}>
            <div className={s.cardSpecification}>question</div>
            <div className={s.cardSpecification}>answer</div>
            <div className={s.cardSpecification}>grade</div>
            <div className={s.cardSpecification}>last update</div>
            <div className={s.cardSpecification}>url</div>
            <div className={s.cardSpecification}><SuperButton>delete</SuperButton></div>
            <div className={s.cardSpecification}><SuperButton>edit</SuperButton></div>

        </div>
    )

}
