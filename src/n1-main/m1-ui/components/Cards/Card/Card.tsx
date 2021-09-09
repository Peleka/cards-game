import React from "react";
import s from './Card.module.css'
import {CardDataType} from "../../../../m2-bll/cards-reducer";
import {updateCardDataType} from "../../../../m3-dal/api";
import EditIcon from '@material-ui/icons/Edit';
import {green} from "@material-ui/core/colors";
import {Delete} from '@material-ui/icons'

type CardPropsType = CardDataType & {
    delCard: (id: string, packId: string) => void
    updateCard: (updateCard: updateCardDataType) => void
    packId: string
    currentUserId: string
}

export const Card = (props: CardPropsType) => {


    const deleteCardHandler = () => props._id && props.delCard(props._id, props.packId)
    const updateCardHandler = () => props._id && props.updateCard({_id: props._id})

    const update = new Date(props.updated).toLocaleDateString(['ban', 'id']);
    // const updateCardHandler = () => {
    //     props._id && props.updateCard({_id: props._id, packId: props.packId})
    // }

    return (
        <div className={s.cardItem}>
            <div className={s.cardSpecification}>{props.question}</div>
            <div className={s.cardSpecification}>{props.answer}</div>
            <div className={s.cardSpecification}>{props.grade}</div>
            <div className={s.cardSpecification}>{update}</div>
            <div className={s.cardSpecification}>
                {props.user_id === props.currentUserId ? <span style={{cursor: 'pointer'}}><EditIcon onClick={updateCardHandler} style={{ color: green[500] }}/></span> : ''}
            </div>
            <div className={s.cardSpecification}>
                { props.user_id === props.currentUserId ? <span style={{cursor: 'pointer'}}><Delete onClick={deleteCardHandler} color='secondary'/></span> : ''}
            </div>

        </div>
    )

}
