import {usersAPI} from '../api/api';

const ADD_POST = 'ADD-NEW-POST';
const APDATE_POST = 'APDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
  postData: [
    { id: 1, message: "Hello how are you?", likesCount: 3 },
    { id: 2, message: "It's my firs post", likesCount: 7 },
  ],
  newPostText: "",
  profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = {...state}
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case APDATE_POST:{
      let stateCopy = {...state}
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    default:
      return state;
    
  }

};



export const addPostActionCreator = ()=> {
  return {
    type: ADD_POST,
  }
};

export const updateNewPostTextActionCreator = (text)=> {
  return {
    type: APDATE_POST,
    newText: text,
  }
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE, profile
  }
}

export const getProfile = (userId) =>{
  
  return (dispatch) => {
    
    if (!userId){
        userId = 2;
    }

    usersAPI.getProfileAPI(userId).then((data) => {
            dispatch(setUserProfile(data))})
  }
}

export default profileReducer;
