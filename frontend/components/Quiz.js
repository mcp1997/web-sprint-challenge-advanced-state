import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators'

function Quiz(props) {
  const { 
    fetchQuiz,
    quiz, 
    selectAnswer, 
    selectedAnswer,
    postAnswer 
  } = props

  console.log(props)

  useEffect(() => {
    if(!quiz) {
      fetchQuiz()
    }
  }, [])

  const handleSelect = evt => {
    selectAnswer(evt.target.id)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    postAnswer({ quiz_id: quiz.quiz_id, answer_id: selectedAnswer })
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              {
                quiz.answers.map(answer => {
                  return (
                    <div 
                      key={answer.answer_id} 
                      className={
                        answer.answer_id === selectedAnswer
                          ? 'answer selected'
                          : 'answer'
                      }>
                      {answer.text}
                      <button id={answer.answer_id} onClick={handleSelect}>
                        {
                          answer.answer_id === selectedAnswer
                            ? 'SELECTED'
                            : 'Select'
                        }
                      </button>
                    </div>
                  )
                })
              }
            </div>

            <button id="submitAnswerBtn" onClick={handleSubmit} disabled={!selectedAnswer}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, { fetchQuiz, selectAnswer, postAnswer })(Quiz)