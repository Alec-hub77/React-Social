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
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case APDATE_POST:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }

  // if(action.type === 'ADD-NEW-POST'){
  //     let newPost = {
  //       id: 3,
  //       message: state.newPostText,
  //       likesCount: 0,
  //     };
  //     state.postData.push(newPost);
  //     state.newPostText = "";

  //   } else if (action.type === 'APDATE-NEW-POST-TEXT'){
  //     state.newPostText = action.newText;
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
