import React from "react";
import s from './Pack.module.css'
import {PackResponseType, UpdatePacksRequestDataType} from "../../../../m2-bll/packs-reducer";
import {NavLink} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {green} from "@material-ui/core/colors";

export const Pack: React.FC<PackPropsType> = React.memo((props ) => {

    const updateTime = new Date(props.updated).toLocaleDateString(['ban', 'id'])

    const delPack = () => {
        props.delPack(props._id)
    }
    const updatePack = () => {
        props.updatePack({_id: props._id, name: "Dima's updated pack"})
    }

    // ОнКлик на кнопку Edit
    // const updatePack = () => {
    //   props.updatePacks(props.updatePacks.cardsPack)
    // }
    return (
        <div className={s.packItem}>
            <div className={s.packSpecification}>{props.user_name}</div>
            <div className={s.packSpecification}>{props.name}</div>
            <div className={s.packSpecification}>{props.cardsCount}</div>
            <div className={s.packSpecification}>{updateTime}</div>
            <div className={s.packSpecification}><NavLink to={`/cards/${props._id}`}>cards</NavLink></div>
            <div className={s.packSpecification}>
                { props.user_id === props.currentUserId ? <DeleteIcon onClick={delPack} color='secondary'/> : ''}
            </div>
            <div className={s.packSpecification}>
                { props.user_id === props.currentUserId ? <EditIcon onClick={updatePack} style={{ color: green[500] }}/> : ''}
            </div>

        </div>
    )
})

//types
type PackPropsType = PackResponseType &
    {
        updatePack: (data: UpdatePacksRequestDataType) => void
        delPack: (id: string) => void
        currentUserId: string
    }