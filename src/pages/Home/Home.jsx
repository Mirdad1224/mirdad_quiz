import { Button, Typography, Box, CircularProgress } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import SettingImage from "../../assets/images/setting.jpg";
import CustomTextField from "../../components/CustomTextField/CustomTextField";
import CustomSelectField from "../../components/CustomSelectField/CustomSelectField";
import useHttp from "../../hooks/useHttp";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.css";

const difficultyArray = [
  { id: "easy", name: "Easy" },
  { id: "medium", name: "Mid-Level" },
  { id: "hard", name: "Hard" },
];

const typeArray = [
  { id: "multiple", name: "Multiple Choice" },
  { id: "boolean", name: "True/False" },
];

const Home = () => {
  const [category, setCategory] = useState(null);

  const { isLoading, error, sendRequest } = useHttp();

  const applyData = useCallback((data) => {
    setCategory(data);
  }, []);

  useEffect(() => {
    sendRequest({ url: "https://opentdb.com/api_category.php" }, applyData);
  }, [sendRequest, applyData]);

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('quiz')
  };


  return (
    <>
      <Typography variant="h4" my={4} color="darkblue">
        Welcome To Mirdad Quiz.Let`s Start...
      </Typography>
      <main className={styles.home}>
        <div className={styles.settingImage}>
          <img src={SettingImage} alt="" />
        </div>
        {(isLoading || !category) && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
        {error && (
          <Typography variant="h5" textAlign="center" color="secondary">
            Something Went Wrong
          </Typography>
        )}
        {!isLoading && !error && !!category && (
          <form className={styles.form} onSubmit={submitHandler}>
            <Typography variant="h4" fontWeight="bold" mt={10}>
              Game Setting
            </Typography>
            <CustomTextField />
            <CustomSelectField
              label="Category"
              options={category.trivia_categories}
            />
            <CustomSelectField label="Difficulty" options={difficultyArray} />
            <CustomSelectField label="Type" options={typeArray} />
            <Button type="submit" variant="contained" fullWidth>
              Start Quiz
            </Button>
          </form>
        )}
      </main>
    </>
  );
};

export default Home;
