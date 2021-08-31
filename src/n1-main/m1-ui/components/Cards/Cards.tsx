import React, {useEffect} from "react"
import s from "./Card/Card.module.css";
import st from "./Cards.module.css";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {Card} from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/store";
import {getCardsTC} from "../../../m2-bll/cards-reducer";
import {useParams} from "react-router-dom";
import {Login} from "../Login/Login";

export const Cards = () => {
    const dispatch = useDispatch()
    const cards = useSelector((state: AppStoreType) => state.cards.cards)
    const {packID} = useParams<{packID: string}>()
    const isLoggedIn = useSelector((state: AppStoreType) => state.auth.isLoggedIn)

    useEffect(() => {
        dispatch(getCardsTC({cardsPack_id: packID}))
    }, [dispatch])

    const mappedCards = cards && cards.map((c, i) => <Card key={i} {...c}/>)

    if (!isLoggedIn) {
        return <Login />
    }

    return (
        <div>
            <div>
                <h1>Cards</h1>
            </div>

            <div className={`${s.cardItem} ${st.cardContents}`}>
                <div>question</div>
                <div>answer</div>
                <div>grade</div>
                <div>last update</div>
                <div>url</div>
                <div><SuperButton>add</SuperButton></div>
                <div></div>
            </div>

            {mappedCards}
        </div>
    )
}