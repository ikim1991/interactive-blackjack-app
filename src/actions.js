import { socket } from './ClientSocket';

export const setChatlog = (userMessage) => ({ type: "APPEND_TO_LOG", payload: userMessage })

export const loggingIn = (username, password, server, history) => (dispatch) => {
  dispatch({ type: "LOG_IN_PENDING"})
  fetch("http://localhost:3001/signin", {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password, server})
  })
  .then(response => response.json())
  .then(data => dispatch({ type: "LOG_IN_SUCCESS", payload: data}))
  .then(data => {
    if(data.payload.authenticated){
      socket.emit('login', data.payload)
      history.push(`${data.payload.server}`)
    }
  })
  .catch(error => dispatch({ type: "LOG_IN_ERROR", payload: error}))
}

export const updateUsersList = (allUsers) => ({ type: "UPDATE_USERS_LIST", payload: allUsers })

export const updateGameState = (game) => ({ type: "UPDATE_GAME_STATE", payload: game})
