var restartbutton = document.getElementById('b')
var cells = document.querySelectorAll('td')

function clearAllCells(){
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent=''
  }
}

restartbutton.addEventListener('click',clearAllCells)

function changeContent(){

  content=this.textContent

  if (content == '') {
    this.textContent='X'
  }
  else if (content=='X') {
    this.textContent='O'
  }
  else if (content == 'O') {
    this.textContent=''
  }
}

for (cell of cells) {
  cell.addEventListener('click',changeContent)
}
