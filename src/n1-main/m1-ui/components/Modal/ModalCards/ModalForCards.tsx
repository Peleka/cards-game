import React, {ChangeEvent, useState} from 'react';
import SuperInputText from '../../../superComponents/c1-SuperInputText/SuperInputText';
import s from '../Modal.module.css';
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";

type ModalForCardsType = {
  closeAddEditCardModal: () => void
  addNewCard: (question: string, answer: string) => void
  title: string
  questionPlaceholder: string
  answerPlaceholder: string
}

export const ModalForCards = (props: ModalForCardsType) => {
  const [question, setQuestion] = useState(props.questionPlaceholder)
  const [answer, addQuestion] = useState(props.answerPlaceholder)

  const inputChangeHandlerQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value)
  }

  const inputChangeHandlerAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    addQuestion(e.currentTarget.value)
  }

  const onClickHandler = () => {
    props.addNewCard(question, answer)
    props.closeAddEditCardModal()
  }

  const onClosedClick = () => {
    props.closeAddEditCardModal()
  }

  return (
    <>
      <div className={s.wrapperModal}>
        <div className={s.modal}>
          <h3>{props.title}</h3>
          <form>
            <SuperInputText
              type='text'
              value={question}
              onChange={inputChangeHandlerQuestion}
            />
            <SuperInputText
              type='text'
              value={answer}
              onChange={inputChangeHandlerAnswer}
            />
            <div className={s.buttonBlock}>
              <SuperButton type='submit' onClick={onClickHandler}>Ok</SuperButton>
              <SuperButton onClick={onClosedClick}>Cancel</SuperButton>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}