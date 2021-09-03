import React from "react";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import s from './Card.module.css'
import {CardType} from "../../../../m2-bll/cards-reducer";
import {UpdateCardsRequestDataType} from "../../../../m3-dal/api";

type CardPropsType = CardType & {
    delCard: (id: string) => void
    updateCard: (data: UpdateCardsRequestDataType) => void
    packId: string
}

export const Card = (props: CardPropsType) => {

    const deleteCardHandler = () => props._id && props.delCard(props._id)
    const updateCardHandler = () => {
        props._id && props.updateCard({_id: props._id, packId: props.packId})
    }

    return (
        <div className={s.cardItem}>
            <div className={s.cardSpecification}>{props.question}</div>
            <div className={s.cardSpecification}>{props.answer}</div>
            <div className={s.cardSpecification}>{props.grade}</div>
            <div className={s.cardSpecification}>{props.updated}</div>
            <div className={s.cardSpecification}>{props.more_id}</div>
            <div className={s.cardSpecification}><SuperButton onClick={deleteCardHandler}>delete</SuperButton></div>
            <div className={s.cardSpecification}><SuperButton onClick={updateCardHandler}>edit</SuperButton></div>
        </div>
    )

}
