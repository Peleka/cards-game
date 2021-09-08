import React, {ChangeEvent, useState} from 'react';
import SuperInputText from '../../../superComponents/c1-SuperInputText/SuperInputText';
import SuperButton from '../../../superComponents/c2-SuperButton/SuperButton';
import s from '../Modal.module.css';

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
  const onClosedClick = () => {
    props.closeAddPackModal()
  }

  return (
    <>
      {/*<div className={s.wrapperModal} onClick={onClosedClick}>*/}
      <div className={s.wrapperModal}>
        <div className={s.modal}>
          <h3>Enter new pack name</h3>
          <form>
            <SuperInputText
              type='text'
              placeholder='name'
              onChange={inputChangeHandler}
            />
            <div className={s.buttonBlock}>
              <SuperButton type='submit' onClick={onClickHandler}>Add new pack</SuperButton>
              <SuperButton onClick={onClosedClick}>Cancel</SuperButton>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}