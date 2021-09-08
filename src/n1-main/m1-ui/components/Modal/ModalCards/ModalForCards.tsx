import React, {ChangeEvent, useState} from 'react';
import SuperInputText from '../../../superComponents/c1-SuperInputText/SuperInputText';
import s from '../Modal.module.css';
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";

type ModalForCardsType = {
  closeAddCardModal: () => void
  addNewCard: (question: string, answer: string) => void
}

export const ModalForCards = (props: ModalForCardsType) => {
  const [question, setQuestion] = useState('')
  const [answer, addQuestion] = useState('')

  const inputChangeHandlerQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value)
  }

  const inputChangeHandlerAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    addQuestion(e.currentTarget.value)
  }

  const onClickHandler = () => {
    props.addNewCard(question, answer)
    props.closeAddCardModal()
  }

  // ХЗ куда повесить, чтобы закрывалось пр нажатии в любое место...
  const onClosedClick = () => {
    props.closeAddCardModal()
  }

  return (
    <>
      <div className={s.wrapperModal}>
        <div className={s.modal}>
          <h3>Add new card</h3>
          <form>
            <SuperInputText
              type='text'
              placeholder='question'
              onChange={inputChangeHandlerQuestion}
            />
            <SuperInputText
              type='text'
              placeholder='answer'
              onChange={inputChangeHandlerAnswer}
            />
            <div className={s.buttonBlock}>
              <SuperButton type='submit' onClick={onClickHandler}>Add new card</SuperButton>
              <SuperButton onClick={onClosedClick}>Cancel</SuperButton>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}