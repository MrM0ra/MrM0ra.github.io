// Get the modal
var modal = document.getElementById("modal");

// Get the modal text to display
var modalText = document.getElementById("modal_text");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal(detail = "Nothing here... weird"){
  modal.style.display = "block";
  modalText.innerHTML = detail;
}

const dialogModal = document.querySelector('#modal')
const openModalBtn = document.querySelector('.open-btn')
const closeModalBtn = document.querySelector('.close-btn')

openModalBtn.addEventListener('click', () => {
    dialogModal.showModal()
})

closeModalBtn.addEventListener('click', () => {
    dialogModal.close()
})