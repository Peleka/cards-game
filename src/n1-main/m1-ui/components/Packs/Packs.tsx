import React, {ChangeEvent, useCallback, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import { Pagination } from '@material-ui/lab';
import {
    addPackTC,
    delPackTC,
    getPacksTC,
    setCurrentPage,
    UpdatePacksRequestDataType,
    updatePackTC
} from "../../../m2-bll/packs-reducer";
import {Pack} from "./Pack/Pack";
import {AppStoreType} from "../../../m2-bll/store";
import s from './Pack/Pack.module.css'
import st from './Packs.module.css'
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {Login} from "../Login/Login";
import SuperDoubleRange from "../../superComponents/c8-SuperDoubleRange/SuperDoubleRange";

export const Packs = () => {

    const dispatch = useDispatch()
    const cardPacks = useSelector((state: AppStoreType) => state.packs.cardPacks)
    const isLoggedIn = useSelector((state: AppStoreType) => state.auth.isLoggedIn)
    const totalPacks = useSelector((state: AppStoreType) => state.packs.totalPacksCount)
    const pageSize = useSelector((state: AppStoreType) => state.packs.pageSize)
    const currentPage = useSelector((state: AppStoreType) => state.packs.currentPage)
    const userID = useSelector((state: AppStoreType) => state.auth.userData?._id)
    const delPack = useCallback(function (id: string) {
        dispatch(delPackTC(id))
    }, [dispatch])
    const updatePack = useCallback(function (data: UpdatePacksRequestDataType) {
        dispatch(updatePackTC(data))
    }, [dispatch])
    const showMyPacks = () => {
        dispatch(getPacksTC({user_id: userID}))
    }

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
        dispatch(getPacksTC({
            pageCount: '10',
            page: 1,
        }))
    }, [dispatch])

    const mappedPacks = cardPacks && cardPacks.map((p, i) => <Pack
        key={i}
        {...p}
        delPack={delPack}
        updatePack={updatePack}
    />)

    if (!isLoggedIn) {
        return <Login />
    }

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
                    <SuperDoubleRange
                        value={[0, 20]}
                        onChangeRange={(e:ChangeEvent<{}>, value: number | number[]) => {
                            let min = typeof value === 'object' ? value[0] : 3
                            let max = typeof value === 'object' ? value[1] : 6
                            dispatch(getPacksTC({min: min, max: max}))
                        }}/>
                </div>

                <div className={st.paginator}>

                    <Pagination count={pagesCount}
                                boundaryCount={1}
                                defaultPage={1}
                                page={currentPage}
                                onChange={(e: ChangeEvent<any>, p: number) => onPageChangedHandler(p)}/>

                    <SuperButton onClick={showMyPacks}> show my packs </SuperButton>
                </div>
            </div>

            <div className={`${s.packItem} ${st.packContents}`}>
                <div>username</div>
                <div>name</div>
                <div>cards count</div>
                <div>last update</div>
                <div><SuperButton onClick={() => dispatch(addPackTC({name: 'Aleks/Dima/Elena pack'}))}>add</SuperButton>
                </div>
                <div></div>
                <div></div>
            </div>

            {mappedPacks}


        </div>
    )
}