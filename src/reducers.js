import Game from './Game';

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
    seated: false,
    playerNumber: "",
    turn: false,
    sessionID: ""
  },
  allUsers: [],
  room: "",
  isPending: false,
  error: "",
  game: (new Game()).game
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
                                          authenticated: action.payload.authenticated,
                                          turn: action.payload.turn,
                                          seated: action.payload.seated,
                                          playerNumber: action.payload.playerNumber,
                                          sessionID: action.payload.sessionID
                                        },
                                        allUsers: action.payload.allUsers,
                                        room: action.payload.room,
                                        isPending: false,
                                        game: action.payload.game
                                      })
    case "LOG_IN_ERROR":
      return Object.assign({}, state, { error: action.payload, isPending: false })
    case "UPDATE_USERS_LIST":
      return Object.assign({}, state, { allUsers: action.payload })
    case "UPDATE_USER":
      return Object.assign({}, state, { user: action.payload })
    default:
      return state
  }
}

const initialStateGame = {
  game: initialStateUser.game
}

export const gameState = (state = initialStateGame, action = {}) => {
  switch(action.type){
    case "UPDATE_GAME_STATE":
      return Object.assign({}, state, { game: action.payload.game })
    default:
      return state
  }
}
