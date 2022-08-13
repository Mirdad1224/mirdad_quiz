import {
    CHANGE_NUMBER,
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_TYPE,
    CHANGE_SCORE,
  } from "./actionTypes";

const initialState = {
    numberOfQuestion: 10,
    category: '',
    difficulty: '',
    type: '',
    score: 0
}



const reducer = (state={initialState}, action) => {

    if(action.type === CHANGE_NUMBER){
        return {...state, numberOfQuestion: action.payload}
    }else if(action.type === CHANGE_CATEGORY){
        return {...state, category: action.payload}
    }else if(action.type === CHANGE_DIFFICULTY){
        return {...state, difficulty: action.payload}
    }else if(action.type === CHANGE_TYPE){
        return {...state, type: action.payload}
    }else if(action.type === CHANGE_SCORE){
        return {...state, score: action.payload}
    }else{
        return state
    }

}

export default reducer