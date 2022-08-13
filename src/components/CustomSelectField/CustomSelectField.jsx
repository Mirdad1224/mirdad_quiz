import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeCategoryHandler,
  changeDifficultyHandler,
  changeTypeHandler,
} from "../../store/actions";

const CustomSelectField = ({ label, options }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const selectHandler = (e) => {
    const userInput = e.target.value;
    setValue(userInput);
    if (label === "Category") {
      dispatch(changeCategoryHandler(userInput));
    } else if (label === "Difficulty") {
      dispatch(changeDifficultyHandler(userInput));
    } else if (label === "Type") {
      dispatch(changeTypeHandler(userInput));
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={label} size="small">
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={selectHandler}
        labelId={label}
        label={label}
        size="small"
        placeholder={label}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelectField;
