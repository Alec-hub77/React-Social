
let initialState = {
  
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
  }


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-NEW-MESSAGE":
      let newMessage = {
        id: 7,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case "APDATE-NEW-MESSAGE":
      state.newMessageText = action.newTextMessage;
      return state;
    default:
      return state;
  }

  // if(action.type === 'ADD-NEW-MESSAGE'){
  //     let newMessage = {
  //       id: 7,
  //       message: state.newMessageText,
  //     };
  //     state.messagesData.push(newMessage);
  //     state.newMessageText = "";

  //   } else if(action.type === 'APDATE-NEW-MESSAGE'){
  //     state.newMessageText = action.newTextMessage;

  //   }

  // return state;
};

export default dialogsReducer;
