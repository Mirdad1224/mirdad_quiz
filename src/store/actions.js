import {
  CHANGE_NUMBER,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
  CHANGE_SCORE,
} from "./actionTypes";


export const changeNumberHandler = payload => {
    return {type: CHANGE_NUMBER, payload}
}

export const changeCategoryHandler = payload => {
    return {type: CHANGE_CATEGORY, payload}
}

export const changeDifficultyHandler = payload => {
    return {type: CHANGE_DIFFICULTY, payload}
}

export const changeTypeHandler = payload => {
    return {type: CHANGE_TYPE, payload}
}

export const changeScoreHandler = payload => {
    return {type: CHANGE_SCORE, payload}
}