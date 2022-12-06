let board = document.getElementById('board')
let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'lightseagreen', 'coral', 'violet', 'lime']
const SQUARES_NUMBER = 2013

for (let i = 0; i < SQUARES_NUMBER; i++) {
  let square = document.createElement('div')
  square.classList.add('square')
  
  square.addEventListener('mouseover', () => {
    let color = colors[Math.floor(Math.random() * colors.length)]
    square.style.background = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  })
  
  square.addEventListener('mouseleave', () => {
    square.style.background = '#1d1d1d'
    square.style.boxShadow = '0 0 2px #1d1d1d'
  })
  
  board.append(square)
}