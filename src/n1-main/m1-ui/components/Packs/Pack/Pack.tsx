import React from "react";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import s from './Pack.module.css'
import {PackResponseType} from "../../../../m2-bll/packs-reducer";
import { NavLink } from "react-router-dom";

export const Pack = (props: PackResponseType) => {

  const delPack = () => {
    props.delPack(props._id)
  }

  // ОнКлик на кнопку Edit
  // const updatePack = () => {
  //   props.updatePacks(props.updatePacks.cardsPack)
  // }

    return (
        <div className={s.packItem}>
            <div className={s.packSpecification}>{props.name}</div>
            <div className={s.packSpecification}>{props.cardsCount}</div>
            <div className={s.packSpecification}>{props.updated}</div>
            <div className={s.packSpecification}><SuperButton onClick={delPack}>Delete</SuperButton></div>
            <div className={s.packSpecification}><SuperButton>Edit</SuperButton></div>
            <div className={s.packSpecification}><NavLink to={`/cards/${props._id}`}>cards</NavLink></div>
        </div>
    )
}