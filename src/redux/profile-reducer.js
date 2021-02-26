const ADD_POST = 'ADD-NEW-POST';
const APDATE_POST = 'APDATE-NEW-POST-TEXT';


let initialState = {
  postData: [
    { id: 1, message: "Hello how are you?", likesCount: 3 },
    { id: 2, message: "It's my firs post", likesCount: 7 },
  ],
  newPostText: "",
  
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

export default profileReducer;
