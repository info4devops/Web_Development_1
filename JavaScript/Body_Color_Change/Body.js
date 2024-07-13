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

// Grab Element and changing the color by calling getRandomColor() function
var b = document.querySelector('button')
b.addEventListener('click',function(){
  document.body.style.background=getRandomColor()
})