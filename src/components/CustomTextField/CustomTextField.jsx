import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeNumberHandler,changeScoreHandler } from "../../store/actions";

const CustomTextField = () => {
  const [value, setValue] = useState(10);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    dispatch(changeScoreHandler(0))
    dispatch(changeNumberHandler(e.target.value));
    setValue(e.target.value);
    
  };

  return (
    <TextField
      value={value}
      onChange={inputHandler}
      size="small"
      label="Number Of Questions"
      type="number"
      fullWidth
    ></TextField>
  );
};

export default CustomTextField;
