let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hello how are you?", likesCount: 3 },
        { id: 2, message: "It's my firs post", likesCount: 7 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Coronavirus" },
        { id: 4, message: "Lets go chil" },
        { id: 5, message: "Sure" },
        { id: 6, message: "Be in five minutes" },
      ],
      dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Sergey" },
      ],
      newMessageText: "",
    },
  },
  _rerenderEntireTree() {
    console.log("something");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action){
   
    if(action.type === 'ADD-NEW-POST'){
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree(this._state);
    } else if (action.type === 'APDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if(action.type === 'ADD-NEW-MESSAGE'){
      let newMessage = {
        id: 7,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._rerenderEntireTree(this._state);
    } else if(action.type === 'APDATE-NEW-MESSAGE'){
      this._state.dialogsPage.newMessageText = action.newTextMessage;
      this._rerenderEntireTree(this._state);
    }
  }
  
};

const ADD_POST = 'ADD-NEW-POST';
const APDATE_POST = 'APDATE-NEW-POST-TEXT';

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

export default store;
window.store = store;
