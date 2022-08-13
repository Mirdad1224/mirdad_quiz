import React from 'react'
import { Button, Typography } from "@mui/material";
import ScoreImage from '../../assets/images/score.jpg'
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {
  changeCategoryHandler,
  changeDifficultyHandler,
  changeTypeHandler,
  changeNumberHandler,
  changeScoreHandler
} from "../../store/actions";

import styles from './UserScore.module.css'

const UserScore = () => {
  const {score} = useSelector(state => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const navigateHandler = () => {
    dispatch(changeScoreHandler(0))
    dispatch(changeNumberHandler(10))
    dispatch(changeCategoryHandler(''))
    dispatch(changeDifficultyHandler(''))
    dispatch(changeTypeHandler(''))
    navigate('/')
  }

  return (
    <main className={styles.score}>
      <div className={styles.scoreImage}>
        <img src={ScoreImage} alt="" />
      </div>
      <div className={styles.result}>
        <Typography variant='h5' color='secondary'>Your Final Score Is {score}</Typography>
        <Button onClick={navigateHandler} variant='contained' color='success' size='large'>Play Again</Button>
      </div>
    </main>
  )
}

export default UserScore