import React from "react";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import s from './Pack.module.css'
import {PackResponseType} from "../../../../m2-bll/packs-reducer";

export const Pack = (props: PackResponseType) => {
    return (
        <div className={s.packItem}>
            <div className={s.packSpecification}>{props.name}</div>
            <div className={s.packSpecification}>{props.cardsCount}</div>
            <div className={s.packSpecification}>{props.updated}</div>
            <div className={s.packSpecification}><SuperButton>Delete</SuperButton></div>
            <div className={s.packSpecification}><SuperButton>Edit</SuperButton></div>
            <div className={s.packSpecification}>cards(link)</div>
        </div>
    )

}