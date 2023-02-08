import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { askQuestion } from '../../actions/question'
import './AskQuestion.css'

const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state)=>(state.currentUserReducer))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({questionTitle, questionBody, questionTags})
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id},navigate))
    }

    const handleEnter = (e)=>{
        if(e.key ==='Enter'){
            setQuestionBody(questionBody  +"\n")
        }
    }

    return (
        <div className='ask-question'>
            <div className="ask-ques-container">
                <h1>Ask a public question</h1>
                <form onSubmit={handleSubmit}>
                    <div className='ask-form-container'>
                        <label htmlFor='ask-ques-title'>
                            <h4>Title</h4>
                            <input type='text' id="ask-ques-title" onChange={(e) => { setQuestionTitle(e.target.value) }} placeholder='e.g. Is there any R function' />
                        </label>
                        <label htmlFor='ask-ques-body'>
                            <h4>Body</h4>
                            <textarea id='ask-ques-body' onChange={(e) => { setQuestionBody(e.target.value) }} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
                        </label>
                        <label htmlFor='ask-ques-tags'>
                            <h4>Tags</h4>
                            <input type='text' id="ask-ques-tags" onChange={(e) => { setQuestionTags(e.target.value.split(' ')) }} placeholder='e.g. (html react.js wordpress)' />
                        </label>
                    </div>
                    <input type='submit' className='review-btn' value="Ask" />
                </form>
            </div>
        </div>
    )
}

export default AskQuestion