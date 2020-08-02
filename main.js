document.addEventListener("keydown", function(e){
  if(e.keyCode === 13 && document.getElementsByClassName("chat-bar")[0]){
    document.getElementsByClassName("chat-bar")[0].focus()
  } else if(e.keyCode === 13 && document.getElementsByClassName("button")[0]){
    document.getElementsByClassName("button")[0].focus()
  }

  if(e.keyCode === 27){
    document.getElementById("modal").style.visibility = "hidden"
  }
})
