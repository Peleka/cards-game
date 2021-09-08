import React, {ChangeEvent, useCallback, useEffect} from "react"
import s from "./Card/Card.module.css";
import st from "./Cards.module.css"
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {Card} from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/store";
import {addCardTC, delCardTC, getCardsTC, setCardsCurrentPageAC, updateCardTC} from "../../../m2-bll/cards-reducer";
import {useParams} from "react-router-dom";
import {Login} from "../Login/Login";
import {updateCardDataType} from "../../../m3-dal/api";
import {Pagination} from "@material-ui/lab";

export const Cards = () => {

    const dispatch = useDispatch()

    const cards = useSelector((state: AppStoreType) => state.cards.cards)
    const {packID} = useParams<{ packID: string }>()
    const isLoggedIn = useSelector((state: AppStoreType) => state.auth.isLoggedIn)
    const totalCards = useSelector((state: AppStoreType) => state.cards.cardsTotalCount)
    const pageCardsSize = useSelector((state: AppStoreType) => state.cards.pageCount)
    const currentPage = useSelector((state: AppStoreType) => state.cards.page)

    const delCard = useCallback((id: string, packId: string) => {
        dispatch(delCardTC(id, packId))
    }, [dispatch])

    const updateCard = useCallback((updateCardData: updateCardDataType) => {
        dispatch(updateCardTC(packID, updateCardData))
    }, [dispatch])

    useEffect(() => {
        dispatch(getCardsTC(packID))
    }, [dispatch, packID])

    //pagination
    let pages = []
    let pagesCount = Math.ceil(totalCards / pageCardsSize)
    for (let i = 1; i <= pagesCount; i++) pages.push(i)

    const onPageChangedHandler = (p: number) => {
        dispatch(setCardsCurrentPageAC(p))
        dispatch(getCardsTC(packID))
    }

    const mappedCards = cards && cards.map((c, i) => <Card
        key={i}
        {...c}
        packId={packID}
        delCard={delCard}
        updateCard={updateCard}
    />)

    const addCardHandler = () => {
        dispatch(addCardTC({cardsPack_id: packID}))
    }

    if (!isLoggedIn) {
        return <Login/>
    }

    return (
        <div>
            <div className={st.titleParent}>
                <div>
                    <h1>Cards</h1>
                </div>
                <div className={st.paginator}>
                    <Pagination
                        count={pagesCount}
                        boundaryCount={1}
                        defaultPage={1}
                        page={currentPage}
                        onChange={(e: ChangeEvent<any>, p: number) => onPageChangedHandler(p)}
                    />
                </div>

                <div className={`${s.cardItem} ${st.cardContents}`}>
                    <div>question</div>
                    <div>answer</div>
                    <div>grade</div>
                    <div>last update</div>
                    <div><SuperButton type={"submit"} onClick={addCardHandler}>add</SuperButton></div>
                    <div></div>
                </div>
            </div>
            {mappedCards}
        </div>
    )
}