import React, {ChangeEvent, useCallback, useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from '@material-ui/lab';
import {
    addPackTC,
    delPackTC,
    getPacksTC,
    setCurrentPageAC,
    setMaxCardsCountAC,
    setMinCardsCountAC,
    setUserIdAC,
    UpdatePacksRequestDataType,
    updatePackTC
} from "../../../m2-bll/packs-reducer";
import {Pack} from "./Pack/Pack";
import {AppStoreType} from "../../../m2-bll/store";
import s from './Pack/Pack.module.css'
import st from './Packs.module.css'
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {Login} from "../Login/Login";
import {ModalForPacks} from "../Modal/ModalPacks/ModalForPacks";
import {Slider} from "@material-ui/core";


export const Packs: React.FC = React.memo(() => {

    const dispatch = useDispatch()

    const cardPacks = useSelector((state: AppStoreType) => state.packs.cardPacks)
    const isLoggedIn = useSelector((state: AppStoreType) => state.auth.isLoggedIn)
    const totalPacks = useSelector((state: AppStoreType) => state.packs.totalPacksCount)
    const pageSize = useSelector((state: AppStoreType) => state.packs.pageSize)
    const currentPage = useSelector((state: AppStoreType) => state.packs.currentPage)
    const userId = useSelector((state: AppStoreType) => state.auth.userData._id)
    const minCardsCount = useSelector((state: AppStoreType) => state.packs.minCardsCount)
    const maxCardsCount = useSelector((state: AppStoreType) => state.packs.maxCardsCount)

    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch, minCardsCount, maxCardsCount])

    // Модалка на добавление колоды
    const [addPackModal, setAddPackModal] = useState<boolean>(false);
    const openAddPackModal = () => {
        setAddPackModal(true)
    }
    const closeAddPackModal = () => {
        setAddPackModal(false)
    }

    const addPack = (newPackName: string) => {
        dispatch(addPackTC({name: newPackName}))
    }

    const delPack = useCallback(function (id: string) {
        dispatch(delPackTC(id))
    }, [dispatch])
    const updatePack = useCallback(function (data: UpdatePacksRequestDataType) {
        dispatch(updatePackTC(data))
    }, [dispatch])

    const showMyPacks = () => {
        dispatch(setUserIdAC(userId))
        dispatch(getPacksTC())
    }
    const showAllPacks = () => {
        dispatch(setUserIdAC(''))
        dispatch(getPacksTC())
    }

    //onChangeSlider
    const onChangeSlider = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        if (newValue instanceof Array) {
            dispatch(setMinCardsCountAC(newValue[0]))
            dispatch(setMaxCardsCountAC(newValue[1]))
        }
    }

    //pagination
    let pages = []
    let pagesCount = Math.ceil(totalPacks / pageSize)
    for (let i = 1; i <= pagesCount; i++) pages.push(i)
    const onPageChangedHandler = (p: number) => {
        dispatch(setCurrentPageAC(p))
        dispatch(getPacksTC())
    }

    const mappedPacks = cardPacks && cardPacks.map((p, i) => <Pack
        key={i}
        {...p}
        delPack={delPack}
        updatePack={updatePack}
    />)

    if (!isLoggedIn) {
        return <Login/>
    }
    console.log('Packs render')
    return (
        <div>
            <div className={st.titleParent}>
                <h1>Packs</h1>
                {/*показывает окошко с выбором кол-ва отображаемых колод
                <div className={st.pageCount}>
                    <SuperSelect
                        options={['10', '5', '20', '50', '100']}
                        onChangeOption={(option: string) => dispatch(getPacksTC({pageCount: option}))}/> pages displayed
                </div>*/}
                <div className={st.filter}>
                    <Slider
                        style={{margin: '0', height: '20px'}}
                        value={[minCardsCount, maxCardsCount]}
                        onChangeCommitted={onChangeSlider}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        name='cards count'
                        min={0}
                        max={20}
                    />
                </div>

                <div className={st.paginator}>

                    <Pagination count={pagesCount}
                                boundaryCount={1}
                                defaultPage={1}
                                page={currentPage}
                                onChange={(e: ChangeEvent<any>, p: number) => onPageChangedHandler(p)}/>

                    <SuperButton onClick={showMyPacks}> my packs </SuperButton>
                    <SuperButton onClick={showAllPacks}> all packs </SuperButton>
                </div>
            </div>

            {addPackModal && <ModalForPacks
                closeAddPackModal={closeAddPackModal}
                addNewPack={addPack}
            />}

            <div className={`${s.packItem} ${st.packContents}`}>
                <div>username</div>
                <div>name</div>
                <div>cards count</div>
                <div>last update</div>
                {/*<div><SuperButton onClick={() => dispatch(addPackTC({name: 'Aleks/Dima/Elena pack'}))}>add</SuperButton>*/}
                <div><SuperButton onClick={openAddPackModal}>add</SuperButton>
                </div>
                <div></div>
                <div></div>
            </div>

            {mappedPacks}

        </div>
    )
})