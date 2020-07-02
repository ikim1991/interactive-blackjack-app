document.addEventListener("keydown", function(e){
  if(e.keyCode === 13){
    document.getElementsByTagName("input")[0].focus()
  }
})
