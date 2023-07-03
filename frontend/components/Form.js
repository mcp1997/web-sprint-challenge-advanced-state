import React from 'react'
import { connect } from 'react-redux'
import { inputChange } from '../state/action-creators'

export function Form(props) {
  const { inputChange } = props

  const onChange = evt => {
    console.log(evt)
    const inputPayload = {
      inputId: evt.target.id,
      newValue: evt.target.value
    }
    inputChange(inputPayload)
  }

  const onSubmit = evt => {

  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

// const mapStateToProps = state => {
//   return {
//     newQuestion: state.form.newQuestion,
//     newTrueAnswer: state.form.newTrueAnswer,
//     newFalseAnswer: state.form.newFalseAnswer
//   }
// }

export default connect(st => st, { inputChange })(Form)
