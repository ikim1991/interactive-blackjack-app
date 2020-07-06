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

const initialStateUser = {
  user: {
    username: "",
    chips: 0,
    server: "",
    authenticated: false,
  },
  allUsers: [],
  room: "",
  isPending: false,
  error: ""
}

export const userLogIn = (state = initialStateUser, action={}) => {
  switch(action.type){
    case "LOG_IN_PENDING":
      return Object.assign({}, state, {isPending: true})
    case "LOG_IN_SUCCESS":
      return Object.assign({}, state, { user:{
                                          username: action.payload.username,
                                          chips: action.payload.chips,
                                          server: action.payload.server,
                                          authenticated: action.payload.authenticated
                                        },
                                        allUsers: action.payload.allUsers,
                                        room: action.payload.room,
                                        isPending: false
                                      })
    case "LOG_IN_ERROR":
      return Object.assign({}, state, {error: action.payload, isPending: false})
    case "UPDATE_USERS_LIST":
      return Object.assign({}, state, { allUsers: action.payload })
    default:
      return state
  }
}
