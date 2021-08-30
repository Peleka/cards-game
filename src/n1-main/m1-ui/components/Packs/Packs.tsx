import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getPacksTC} from "../../../m2-bll/packs-reducer";
import {Pack} from "./Pack/Pack";
import {AppStoreType} from "../../../m2-bll/store";
import s from './Pack/Pack.module.css'
import st from './Packs.module.css'

export const Packs = () => {

    const dispatch = useDispatch()
    const cardPacks = useSelector((state: AppStoreType) => state.packs.cardPacks)

    useEffect(() => {dispatch(getPacksTC({}))}, [dispatch])

    const mappedPacks = cardPacks && cardPacks.map((p,i) => <Pack key={i} {...p}/>)

    return (
        <div>
            <h1>Packs</h1>

            <div className={`${s.packItem} ${st.packContents}`}>
                <div>name</div>
                <div>cards count</div>
                <div>last update</div>
                <div>add</div>
                <div>update</div>
                <div>cards</div>
            </div>

            {mappedPacks}


        </div>
    )

}