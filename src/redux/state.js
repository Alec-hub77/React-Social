let rerenderEntireTree = ()=>{
  console.log('something');
}

let state = {
  profilePage: {
    postData: [
      { id: 1, message: "Hello how are you?", likesCount: 3 },
      { id: 2, message: "It's my firs post", likesCount: 7 },
    ],
    newPostText: '',
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
    newMessageText: '',
  },
};

export let addNewPost = () => {
  
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost)
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => { 
state.profilePage.newPostText = newText;
rerenderEntireTree(state);
}  
  


export let addNewMessage = () => {
  let newMessage = {
    id:7,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export let updateNewMessage = (newTextMessage) =>{
  state.dialogsPage.newMessageText = newTextMessage;
  
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
} 




export default state;
