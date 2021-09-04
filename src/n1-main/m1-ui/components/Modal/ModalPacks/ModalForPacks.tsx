import React, {ChangeEvent, useState} from 'react';
import SuperInputText from '../../../superComponents/c1-SuperInputText/SuperInputText';
import SuperButton from '../../../superComponents/c2-SuperButton/SuperButton';
import s from './ModalForPacks.module.css';

type ModalForPacksType = {
  closeAddPackModal: () => void
  addNewPack: (name: string) => void
}

export const ModalForPacks = (props: ModalForPacksType) => {
  const [newText, setNewText] = useState('')

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewText(e.currentTarget.value)
  }

  const onClickHandler = () => {
    props.addNewPack(newText)
    props.closeAddPackModal()
  }

  // ХЗ куда повесить, чтобы закрывалось пр нажатии в любое место...
  // const onBackgroundClick = () => {
  //   // debugger
  //   props.closeAddPackModal()
  // }

  return (
    <>
      {/*<div className={s.wrapperModal} onClick={onBackgroundClick}>*/}
      <div className={s.wrapperModal}>
        <div className={s.modal}>
          <h3>Enter new pack name</h3>
          <form>
            <SuperInputText
              type='text'
              placeholder='name'
              onChange={inputChangeHandler}
            />
            <SuperButton type='submit' onClick={onClickHandler}>Add</SuperButton>
          </form>
        </div>
      </div>
    </>
  )
}