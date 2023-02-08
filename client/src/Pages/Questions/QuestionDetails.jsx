import React, { useState } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upVoteLogo from '../../assets/sort-up-solid.svg'
import downVoteLogo from '../../assets/sort-down-solid.svg'
import Avatar from '../../comonents/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'
import './Question.css'

const QuestionDetails = () => {
    const { id } = useParams()
    const questionList = useSelector(state => state.questionsReducer)
    // console.log(Id);

    // var questionList = [
    //     {
    //         id: '1',
    //         upVotes: 3,
    //         downVotes: 1,
    //         noOfAnswers: 2,
    //         questionTitle: 'what is function',
    //         questionBody: 'It meant to be',
    //         questionTags: ['java', 'node.js', 'react.js'],
    //         userPosted: 'mano',
    //         askedOn: 'jan 1',
    //         answer: [{
    //             answerBody: 'Answer',
    //             userAnswered: 'Rihan',
    //             answeredOn: 'march 7',
    //             userId: '1'
    //         }]
    //     }
    // ]
    const [Answer, setAnswer] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const url = 'http://localhost:3000'

    const User = useSelector((state)=> (state.currentUserReducer))

    const handlePostAns = (e, answerLength) => {
        e.preventDefault()
        if(User === null){
            alert('Login or signup to answer a question')
            navigate('/Auth')
        }else{
            if(Answer === ''){
                alert('Enter an answer before submitting')
            }else{
                dispatch(postAnswer({id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id}))
            }
        }
    }

    const handleShare =()=>{
        copy(url+location.pathname)
        alert('Copied url:'+url+location.pathname)
    }

    const handleDelete =()=>{
        dispatch(deleteQuestion(id,navigate))
    }

    const handleUpVote =()=>{
        dispatch(voteQuestion(id,'upVote', User.result._id))
    }

    const handleDownVote =()=>{
        dispatch(voteQuestion(id,'downVote', User.result._id))
    }

    return (
        <div className='question-details-page'>
            {
                questionList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        {
                            questionList.data.filter(question => question._id === id).map(question => (
                                <div key={question._id}>
                                    <section className="question-details-container">
                                        <h1>{question.questionTitle}</h1>
                                        <div className="question-details-container-2">
                                            <div className="question-votes">
                                                <img src={upVoteLogo} width='18' className='votes-icon' onClick={handleUpVote}/>
                                                <p>{question.upVote.length - question.downVote.length}</p>
                                                <img src={downVoteLogo} width='18' className='votes-icon' onClick={handleDownVote}/>
                                            </div>
                                            <div style={{ width: "100%" }}>
                                                <p className='question-body'>{question.questionBody}</p>
                                                <div className="question-details-tags">
                                                    {
                                                        question.questionTags.map(tags => (
                                                            <p key={tags}>{tags}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question-actions-user">
                                                    <div>
                                                        <button className='edit-question-btn' type='button' onClick={handleShare}>Share</button>
                                                        {
                                                            User?.result?._id === question.userId && (
                                                                <button className='edit-question-btn' type='button' onClick={handleDelete}>Delete</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div>
                                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                                        <Link to={`/User/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                                            <Avatar backgroundColor='orange' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                            <div>
                                                                {question.userPosted}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><hr />
                                    </section>
                                    <section>
                                        {
                                            question.noOfAnswers !== 0 && (
                                                <section>
                                                    <h3>{question.noOfAnswers} Answers</h3>
                                                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                                                </section>
                                            )
                                        }
                                    </section>
                                    <section className='post-ans-container'>
                                        <h3>Your Answer</h3>
                                        <form onSubmit={(e) => { handlePostAns(e, question.answer.length) }}>
                                            <textarea cols="60" rows="10"  onChange={e => setAnswer(e.target.value)}></textarea><br />
                                            <input type='submit' className='post-ans-btn' value='Post your answer' />
                                        </form>
                                        <p>
                                            Browse other questions tagged
                                            {
                                                question.questionTags.map(tag => (
                                                    <Link to="/Tags" key={tag} className='ans-tags'> {tag} </Link>
                                                ))
                                            } or
                                            <Link to="/AskQuestion" state={{ textDecoration: "none", color: "#009dff" }}> ask your own question</Link>
                                        </p>
                                    </section>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default QuestionDetails