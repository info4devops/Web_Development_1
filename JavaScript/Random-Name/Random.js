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

// To Generate random Name from the Array
function getRandomName(){

  names = ['SUNNY LEONE','MALLIKA','KATRINA','KAREENA','DEEPIKA','PRIYANKA','SAMANTHA']
  index = Math.floor(Math.random() * names.length)
  return names[index]

  }

// To Grab Element from the Html webpage

myh1 = document.querySelector('h1')

// Adding Listener to change content and color for mouseover event

myh1.addEventListener('mouseover',function(){
  myh1.textContent = getRandomName()
  myh1.style.color = getRandomColor()
  })

// Adding Listener to change content and color for mouseout event

  myh1.addEventListener('mouseout',function(){
  myh1.textContent = getRandomName()
  myh1.style.color = getRandomColor()
  })

