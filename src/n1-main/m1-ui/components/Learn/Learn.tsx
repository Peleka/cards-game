import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/store";
import {RequestStatusType} from "../../../m2-bll/app-reducer";
import {CardDataType, getCardsTC, sendGradeTC} from "../../../m2-bll/cards-reducer";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {Loader} from "../../superComponents/Loader/Loader";

export const Learn = () => {
    const {packID} = useParams<{ packID: string }>()
    const dispatch = useDispatch()

    const cards = useSelector<AppStoreType, Array<CardDataType>>((state) => state.cards.cards)
    const status = useSelector<AppStoreType, RequestStatusType>((state) => state.app.status)

    const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

    const [currentQuestion, setQuestion] = useState(0)
    const [answer, setAnswer] = useState(false)
    const [stop, setStop] = useState(false)
    const [grade, setGrade] = useState(0)

    useEffect(() => {
        dispatch(getCardsTC(packID))
    }, [dispatch, packID])

    const nextQuestion = () => {
        if (cards.length !== currentQuestion + 1) {
            setQuestion(currentQuestion + 1)
        } else {
            setStop(true)
        }
        dispatch(sendGradeTC(cards[currentQuestion]._id, grade))
        setAnswer(false)
        setGrade(0)
    }

    const setAnswerHandler = () => {
        setAnswer(true)
    }

    const rollbackHandler = () => {
        setQuestion(0)
        setStop(false)
    }

    return (
        <div>
            {status === 'loading' && <Loader/>}
            <div>
                <NavLink
                    to={'/packs'}>
                    🔙Go to Packs
                </NavLink>
            </div>
            {
                cards.length === 0
                    ? <div>
                        <span>There are no cards in this pack...</span>
                    </div>
                    : <div>
                        {stop
                            ? <div>
                                <div>The questions are over</div>
                                <SuperButton onClick={rollbackHandler}>Start over</SuperButton>
                            </div>
                            : <>
                                <div>
                                    {cards[currentQuestion].question}
                                </div>
                                <SuperButton onClick={setAnswerHandler} disabled={answer}>CHECK</SuperButton>
                                {
                                    answer && (
                                        <div>
                                            <div>{cards[currentQuestion].answer}</div>
                                            <div>
                                                {grades.map((el, i) => {
                                                    const settingGrades = () => {
                                                        setGrade(i + 1)
                                                    }
                                                    return (
                                                        <SuperButton
                                                            key={i + 1}
                                                            onClick={settingGrades}
                                                            // disabled={i + 1 ==== grade}
                                                        >
                                                            {el}
                                                        </SuperButton>
                                                    )
                                                })}
                                            </div>
                                            <SuperButton onClick={nextQuestion}>NEXT</SuperButton>
                                        </div>
                                    )
                                }
                            </>
                        }
                    </div>
            }
        </div>
    )
}