import React, {useCallback, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {delPacksTC, getPacksTC, setCurrentPage} from "../../../m2-bll/packs-reducer";
import {Pack} from "./Pack/Pack";
import {AppStoreType} from "../../../m2-bll/store";
import s from './Pack/Pack.module.css'
import st from './Packs.module.css'
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {Login} from "../Login/Login";

export const Packs = () => {

    const dispatch = useDispatch()
    const cardPacks = useSelector((state: AppStoreType) => state.packs.cardPacks)
    const isLoggedIn = useSelector((state: AppStoreType) => state.auth.isLoggedIn)
    const totalPacks = useSelector((state: AppStoreType) => state.packs.totalPacksCount)
    const pageSize = useSelector((state: AppStoreType) => state.packs.pageSize)
    const currentPage = useSelector((state: AppStoreType) => state.packs.currentPage)
    const delPacks = useCallback(function (id: string) {
        dispatch(delPacksTC(id))
    }, [])

    //pagination
    let pages = []
    let pagesCount = Math.ceil(totalPacks / pageSize)
    for (let i = 1; i <= pagesCount; i++) pages.push(i)
    const onPageChangedHandler = (p: number) => {
        dispatch(setCurrentPage(p))
        dispatch(getPacksTC({page: currentPage}))
    }
    //

    useEffect(() => {
        dispatch(getPacksTC({}))
    }, [dispatch])

    const mappedPacks = cardPacks && cardPacks.map((p, i) => <Pack key={i} {...p} delPack={delPacks}/>)

    if (!isLoggedIn) {
        return <Login />
    }

    return (
        <div>
            <div className={st.titleParent}><h1>Packs</h1>

                <div className={st.paginator}>
                    {pages.map(p => {
                        return <span key={p} className={currentPage === p ? s.selectedPage : ''}
                                     onClick={() => onPageChangedHandler(p)}> {p} </span>
                    })}
                </div>
            </div>

            <div className={`${s.packItem} ${st.packContents}`}>
                <div>name</div>
                <div>cards count</div>
                <div>last update</div>
                <div><SuperButton>add</SuperButton></div>
                <div></div>
                <div></div>
            </div>

            {mappedPacks}


        </div>
    )
}