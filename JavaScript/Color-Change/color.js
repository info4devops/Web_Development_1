var h1=document.querySelector('h1')
var p1=document.querySelectorAll('p')[0]
var p2=document.querySelectorAll('p')[1]
var h21=document.querySelectorAll('h2')[0]
var h22=document.querySelectorAll('h2')[1]
var ul1=document.getElementsByTagName('ul')[0]
var ul2=document.getElementsByTagName('ul')[1]

// Comment
/*h1.style.color='red'
p1.style.color='blue'
ul1.style.color='orange' */


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

  h1.style.color = getRandomColor()
  p1.style.color = getRandomColor()
  p2.style.color = getRandomColor()
  h21.style.color = getRandomColor()
  h22.style.color = getRandomColor()
  ul1.style.color = getRandomColor()
  ul2.style.color = getRandomColor()
  document.body.style.background=getRandomColor() // for background color
  }

  setInterval(changeColor,1000)