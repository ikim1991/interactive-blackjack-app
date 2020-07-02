const initialStateChatlog = {
  chatlog: []
}

export const appendChatlog = (state = initialStateChatlog, action={}) => {
  switch(action.type){
    case "APPEND_TO_LOG":
      return Object.assign({}, state, {chatlog: [...state.chatlog, action.payload]})
    default:
      return state
  }
}
