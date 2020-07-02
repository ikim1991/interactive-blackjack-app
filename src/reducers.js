const initialStateMessage = {
  message: ""
}

export const sendMessage = (state = initialStateMessage, action={}) => {
  switch(action.type){
    case "SEND_MESSAGE":
      return Object.assign({}, state, { message: action.payload })
    default:
      return state
  }
}
