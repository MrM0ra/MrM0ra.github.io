const mineProject = document.querySelector('#mine')
const mineModal = document.querySelector('#minesweeper-modal')
const mineClose = document.querySelector('.mineclose')

mineProject.addEventListener('click', () => {
    mineModal.showModal()
})

mineClose.addEventListener('click', () => {
  mineModal.close()
})

const ticProject = document.querySelector('#tictactoe')
const ticModal = document.querySelector('#TicTacToe-modal')
const ticClose = document.querySelector('.ticlose')

ticProject.addEventListener('click', () => {
    ticModal.showModal()
})

ticClose.addEventListener('click', () => {
  ticModal.close()
})

const connectProject = document.querySelector('#connect4')
const connectModal = document.querySelector('#connect4-modal')
const connectClose = document.querySelector('.connect4close')

connectProject.addEventListener('click', () => {
    connectModal.showModal()
})

connectClose.addEventListener('click', () => {
  connectModal.close()
})
