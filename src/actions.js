export const setChatlog = (userMessage) => ({ type: "APPEND_TO_LOG", payload: userMessage })

export const loggingIn = (username, password, server) => (dispatch) => {
  dispatch({ type: "LOG_IN_PENDING"})
  fetch("http://localhost:3001/signin", {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password, server})
  })
  .then(response => response.json())
  .then(data => dispatch({ type: "LOG_IN_SUCCESS", payload: data}))
  .then(user => {
    if(user.payload.authenticated){
      document.location.href = `${user.payload.server}`
    } else{
      alert("INVALID CREDENTIALS...")
    }
  })
  .catch(error => dispatch({ type: "LOG_IN_ERROR", payload: error}))
}
