import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';


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
    sidebar:{},
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
   
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._rerenderEntireTree(this._state);

    
  }
  
};



export default store;
window.store = store;
