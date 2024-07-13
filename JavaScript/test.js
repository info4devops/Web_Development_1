var myh1=document.querySelector('h1')

//Function to get random color

function getRandomColor(){
  letters='0123456ABCDEF'
  color='#'
  for(var i=0;i<6;i++){
    r=Math.floor(Math.random()*16)
    color=color+letters[r]
  }
  return color
}

function changeColor(){
  myh1.style.color = getRandomColor()
}
//calling function with Event listener
myh1.addEventListener('mouseout',changeColor)


