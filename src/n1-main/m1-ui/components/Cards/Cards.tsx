import React, {ChangeEvent, useCallback, useEffect, useState} from "react"
import st from "./Cards.module.css"
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {Card} from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/store";
import {
    addCardTC,
    delCardTC,
    getCardsTC,
    setCardsCurrentPageAC,
    setSortCardsAC,
    updateCardTC
} from "../../../m2-bll/cards-reducer";
import {useParams} from "react-router-dom";
import {Login} from "../Login/Login";
import {updateCardDataType} from "../../../m3-dal/api";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import {Pagination} from "@material-ui/lab";

import {ModalForCards} from "../Modal/ModalCards/ModalForCards";


export const Cards = () => {

    const dispatch = useDispatch()

    const {cards, cardsTotalCount, pageCount, page, sortCards} = useSelector((state: AppStoreType) => state.cards)
    const {packID} = useParams<{ packID: string }>()
    const isLoggedIn = useSelector((state: AppStoreType) => state.auth.isLoggedIn)
    const _id = useSelector((state: AppStoreType) => state.auth.userData._id)


    useEffect(() => {
        dispatch(getCardsTC(packID))
    }, [dispatch, packID])


    // Модалка на добавление карточки
    const [addCardModal, setAddCardsModal] = useState<boolean>(false);
    const openAddCardModal = () => {
        setAddCardsModal(true)
    }
    const closeAddCardModal = () => {
        setAddCardsModal(false)
    }

    //add/del/update card
    const addCardHandler = (question: string, answer: string) => {
        dispatch(addCardTC({cardsPack_id: packID, question: question, answer: answer}))
    }
    const delCard = useCallback((id: string, packId: string) => {
        dispatch(delCardTC(id, packId))
    }, [dispatch])
    const updateCard = useCallback((updateCardData: updateCardDataType) => {
        dispatch(updateCardTC(packID, updateCardData))
    }, [dispatch])


    //pagination
    let pages = []
    let pagesCount = Math.ceil(cardsTotalCount / pageCount)
    for (let i = 1; i <= pagesCount; i++) pages.push(i)
    const onPageChangedHandler = (p: number) => {
        dispatch(setCardsCurrentPageAC(p))
        dispatch(getCardsTC(packID))
    }

    //sort
    const sortByGradeUp = () => {
        dispatch(setSortCardsAC('0grade'))
        dispatch(getCardsTC(packID))
    }
    const sortByGradeDown = () => {
        dispatch(setSortCardsAC('1grade'))
        dispatch(getCardsTC(packID))
    }
    const sortCardsByGrade = sortCards === '0grade'
        ? <ArrowDownwardIcon onClick={sortByGradeDown} color='primary'/>
        : <ArrowUpwardIcon onClick={sortByGradeUp} color='primary'/>

    //cards list
    const mappedCards = cards && cards.map((c, i) => <Card
        key={i}
        {...c}
        packId={packID}
        delCard={delCard}
        updateCard={updateCard}
        currentUserId={_id}
    />)

    if (!isLoggedIn) {
        return <Login/>
    }

    return (
        <div>
            <div>
                <h1>Cards</h1>
            </div>

            {addCardModal && <ModalForCards
                addNewCard={addCardHandler}
                closeAddCardModal={closeAddCardModal}
            />}

            <div className={st.cardContents}>
                <div>question</div>
                <div>answer</div>
                <div>{sortCardsByGrade}</div>
                <div>grade</div>
                <div>last update</div>
                <div><SuperButton onClick={openAddCardModal}>add</SuperButton></div>
                <div></div>
            </div>
            {mappedCards}
            <div className={st.paginator}>
                <Pagination
                    count={pagesCount}
                    boundaryCount={1}
                    defaultPage={1}
                    page={page}
                    onChange={(e: ChangeEvent<any>, p: number) => onPageChangedHandler(p)}
                />
            </div>
        </div>
    )
}