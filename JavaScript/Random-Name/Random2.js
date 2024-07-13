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

// Adding Listener to get specific color for a specific name on mouseover event

myh1.addEventListener('mouseover',function(){
  Name = getRandomName()
  if (Name == 'SUNNY LEONE') {
    color='pink'
  } else if (Name == 'MALLIKA') {
    color='orange'
  }
  else if (Name == 'KATRINA') {
    color='red'
  }
  else if (Name == 'KAREENA') {
    color='blue'
  }
  else if (Name == 'DEEPIKA') {
    color='cyan'
  }
  else if (Name == 'PRIYANKA') {
    color='magenta'
  }
  else if (Name == 'SAMANTHA') {
    color='green'
  }
  myh1.textContent = Name
  myh1.style.color = color
})


// Adding Listener to get specific color for a specific name on mouseout event

myh1.addEventListener('mouseout',function(){
  Name = getRandomName()
  if (Name == 'SUNNY LEONE') {
    color='pink'
  } else if (Name == 'MALLIKA') {
    color='orange'
  }
  else if (Name == 'KATRINA') {
    color='red'
  }
  else if (Name == 'KAREENA') {
    color='blue'
  }
  else if (Name == 'DEEPIKA') {
    color='cyan'
  }
  else if (Name == 'PRIYANKA') {
    color='magenta'
  }
  else if (Name == 'SAMANTHA') {
    color='green'
  }
  myh1.textContent = Name
  myh1.style.color = color
})

  

