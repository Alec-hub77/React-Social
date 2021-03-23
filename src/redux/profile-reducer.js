import {usersAPI, profileAPI} from '../api/api';

const ADD_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
  postData: [
    { id: 1, message: "Hello how are you?", likesCount: 3 },
    { id: 2, message: "It's my firs post", likesCount: 7 },
  ],
  
  profile: null,
  status: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPost = {
        id: 3,
        message: action.newPostText,
        likesCount: 0,
      };
      let stateCopy = {...state}
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    default:
      return state;
    
  }    
};

export const addPostActionCreator = (newPostText)=> {
  return {
    type: ADD_POST,
    newPostText
  }
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE, profile
  }
}

export const setStatus = (status) => {
  return {type: SET_STATUS, status}
}

export const getStatus = (userId) => (dispatch) =>{
  
    profileAPI.getStatus(userId).then((response) =>{dispatch(setStatus(response.data))})
  
}
export const updateStatus = (status) => (dispatch) => {
   
    profileAPI.updateStatus(status).then((response) =>{
      if(response.data.resultCode === 0){
      dispatch(setStatus(status))}})     
}

export const getProfile = (userId) =>{
  
  return (dispatch) => {
    usersAPI.getProfileAPI(userId).then((data) => {
            dispatch(setUserProfile(data))})
  }
}

export default profileReducer;
