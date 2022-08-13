import React, { useCallback, useEffect, useState } from "react";
import { Button, Typography, CircularProgress, Box } from "@mui/material";
import QuizImage from "../../assets/images/quiz.jpg";
import useHttp from "../../hooks/useHttp";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeScoreHandler, changeNumberHandler } from "../../store/actions";
import { decode } from "html-entities";

import styles from "./Quiz.module.css";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Quiz = () => {
  const dispatch = useDispatch();
  const { numberOfQuestion, category, difficulty, type, score } = useSelector(
    (state) => state
  );
  let quizURL = `https://opentdb.com/api.php?`;
  if (numberOfQuestion) {
    quizURL = quizURL.concat(`&amount=${numberOfQuestion}`);
  } else {
    quizURL = quizURL.concat(`&amount=10`);
    dispatch(changeNumberHandler(10));
    dispatch(changeScoreHandler(0));
  }
  if (category) {
    quizURL = quizURL.concat(`&category=${category}`);
  }
  if (difficulty) {
    quizURL = quizURL.concat(`&difficulty=${difficulty}`);
  }
  if (type) {
    quizURL = quizURL.concat(`&type=${type}`);
  }
  

  const [answers, setAnswers] = useState(null);
  const [questionsData, setQuestionsData] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const { isLoading, error, sendRequest } = useHttp();

  const applyData = useCallback(
    (data) => {
      if (data.results.length) {
        const question = data.results[questionIndex];
        let answers = [...question.incorrect_answers];
        answers.splice(
          getRandomInt(question.incorrect_answers.length),
          0,
          question.correct_answer
        );
        setAnswers(answers);
        setQuestionsData(data);
      }
    },
    [questionIndex]
  );

  useEffect(() => {
    sendRequest({ url: quizURL }, applyData);
  }, [sendRequest, quizURL, applyData]);

  const navigate = useNavigate();

  const clickAnswerHandler = (e) => {
    const question = questionsData.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(changeScoreHandler(score + 1));
    }

    if (questionIndex + 1 < questionsData.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score", { replace: true });
    }
  };

  return (
    <main className={styles.quiz}>
      <div className={styles.quizImage}>
        <img src={QuizImage} alt="" />
      </div>
      {(isLoading) && (
        <Box width="100%">
          <CircularProgress />
        </Box>
      )}
      {(!isLoading && !error && !answers) && (
        <div className={styles.nothingFound}>
          <Typography variant="h5" textAlign="center" color="secondary">
            Nothing Found. Please Cheange The Setting
          </Typography>
         <Link to='/'>
            <Button variant="contained">Go To Setting</Button>
          </Link>
        </div>
      )}
      {error && (
        <Typography variant="h5" textAlign="center" color="secondary">
          Something Went Wrong.Plaese check your connection and refresh the page
        </Typography>
      )}
      {!isLoading && !error && !!answers && (
        <div className={styles.question}>
          <Typography p={1} variant="h6">
            {decode(questionsData.results[questionIndex].question)}
          </Typography>
          <div className={styles.answers}>
            {answers.map((answer, index) => (
              <Button
                key={index}
                onClick={clickAnswerHandler}
                variant="contained"
              >
                {decode(answer)}
              </Button>
            ))}
          </div>
          <Typography m={1} variant="h6">
            Your Score : {score}/{numberOfQuestion}
          </Typography>
        </div>
      )}
    </main>
  );
};

export default Quiz;
