import React, {useState} from "react";
import s from './Pack.module.css'
import {PackResponseType} from "../../../../m2-bll/packs-reducer";
import {NavLink} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {green} from "@material-ui/core/colors";
import {ModalForPacks} from "../../Modal/ModalPacks/ModalForPacks";

export const Pack: React.FC<PackPropsType> = React.memo((props ) => {

    const updateTime = new Date(props.updated).toLocaleDateString(['ban', 'id'])

    const delPack = () => {
        props.delPack(props._id)
    }
    const updatePack = (newPackName: string) => {
        props.updatePack(props._id, newPackName)
    }


    // Update pack modal
    const [editPackModal, setEditPackModal] = useState<boolean>(false);
    const openAddEditPackModal = () => {
        setEditPackModal(true)
    }
    const closeAddEditPackModal = () => {
        setEditPackModal(false)
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
                { props.user_id === props.currentUserId ? <span style={{cursor: 'pointer'}}><EditIcon onClick={openAddEditPackModal} style={{ color: green[500] }}/></span> : ''}
            </div>
            <div className={s.packSpecification}>
                { props.user_id === props.currentUserId ? <span style={{cursor: 'pointer'}}><DeleteIcon onClick={delPack} color='secondary'/></span> : ''}
            </div>

            {editPackModal && <ModalForPacks
                closeAddEditPackModal={closeAddEditPackModal}
                addNewPack={updatePack}
            />}

        </div>
    )
})

//types
type PackPropsType = PackResponseType &
    {
        updatePack: (packId: string, newPackName: string) => void
        delPack: (id: string) => void
        currentUserId: string
    }