myh1=document.querySelector('h1')

myh1.addEventListener('mouseover', function(){
  myh1.textContent='HYDERABAD'
  myh1.style.color='blue'
})

myh1.addEventListener('mouseout', function(){
  myh1.textContent='BANGALORE'
  myh1.style.color='Red'
})