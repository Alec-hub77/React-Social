const SEND_MESSAGE = "SEND_MESSAGE";
const APDATE_NEW_MESSAGE_BODY = "APDATE_NEW_MESSAGE_BODY";


let initialState = {
  
    messages: [
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
    
  }


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
     let body = action.newMessageBody;
     return {...state, messages: [...state.messages, {id:6, message: body}]}
    
    case APDATE_NEW_MESSAGE_BODY:
     return {...state, newMessageBody: action.body}
      
    
    default:
      return state;
  }

};

export const newMessageActionCreator = (newMessageBody) =>{
  return {
    type: SEND_MESSAGE,
    newMessageBody
  }
}

export const updateNewMessageBodyCreator = (body) =>{
  return {
    type: APDATE_NEW_MESSAGE_BODY,
    body: body
  }
}

export default dialogsReducer;
