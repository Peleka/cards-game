import React, {ChangeEvent, useCallback, useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from '@material-ui/lab';
import {
    addPackTC,
    delPackTC,
    getPacksTC,
    setCurrentPageAC,
    setMaxCardsCountAC,
    setMinCardsCountAC, setNameAC,
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
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";

export const Packs: React.FC = React.memo(() => {

    const dispatch = useDispatch()

    const {cardPacks, totalPacksCount, pageSize, currentPage, minCardsCount, maxCardsCount}
        = useSelector((state: AppStoreType) => state.packs)
    const isLoggedIn = useSelector((state: AppStoreType) => state.auth.isLoggedIn)
    const _id = useSelector((state: AppStoreType) => state.auth.userData._id)
    const status = useSelector((state: AppStoreType) => state.app.status)

    const [myPacks, setMyPacks] = useState(false)
    const [searchText, setSearchText] = useState('')

    const activeMyPacksButton = myPacks ? `${st.activeButton}` : ''
    const activeAllPacksButton = !myPacks ? `${st.activeButton}` : ''

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

    //add/del/update packs
    const addPack = (newPackName: string) => {
        dispatch(addPackTC({name: newPackName}))
    }
    const delPack = useCallback(function (id: string) {
        dispatch(delPackTC(id))
    }, [dispatch])
    const updatePack = useCallback(function (data: UpdatePacksRequestDataType) {
        dispatch(updatePackTC(data))
    }, [dispatch])

    //my/all packs
    const showMyPacks = () => {
        dispatch(setUserIdAC(_id))
        dispatch(getPacksTC())
        setMyPacks(true)
    }
    const showAllPacks = () => {
        dispatch(setUserIdAC(''))
        dispatch(getPacksTC())
        setMyPacks(false)
    }

    //onChangeSlider
    const onChangeSlider = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        if (newValue instanceof Array) {
            dispatch(setMinCardsCountAC(newValue[0]))
            dispatch(setMaxCardsCountAC(newValue[1]))
        }
    }

    //search
    const onSearchChangeHandler = (value: string) => setSearchText(value)
    const search = () => {
        dispatch(setNameAC(searchText))
        dispatch(getPacksTC())
        setSearchText('')
    }

    //pagination
    let pages = []
    let pagesCount = Math.ceil(totalPacksCount / pageSize)
    for (let i = 1; i <= pagesCount; i++) pages.push(i)
    const onPageChangedHandler = (p: number) => {
        dispatch(setCurrentPageAC(p))
        dispatch(getPacksTC())
    }

    //list of packs
    const mappedPacks = cardPacks && cardPacks.map((p, i) => <Pack
        key={i}
        {...p}
        delPack={delPack}
        updatePack={updatePack}
        currentUserId={_id}
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

                    <span className={st.search}>
                        <SuperInputText
                            onChangeText={onSearchChangeHandler}
                            onEnter={search}
                            placeholder='search packs'
                            value={searchText}/>
                        <SuperButton
                            onClick={search}
                            disabled={status === 'loading'}>search
                        </SuperButton>
                    </span>
                </div>

                <div className={st.paginator}>

                    <Pagination count={pagesCount}
                                boundaryCount={1}
                                defaultPage={1}
                                page={currentPage}
                                onChange={(e: ChangeEvent<any>, p: number) => onPageChangedHandler(p)}/>

                    <span className={activeMyPacksButton}>
                        <SuperButton onClick={showMyPacks}> my packs </SuperButton>
                    </span>
                    <span className={activeAllPacksButton}>
                        <SuperButton onClick={showAllPacks}> all packs </SuperButton>
                    </span>
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
                <div><SuperButton onClick={openAddPackModal}>add</SuperButton>
                </div>
                <div></div>
                <div></div>
            </div>

            {mappedPacks}

        </div>
    )
})