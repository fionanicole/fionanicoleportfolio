// Source for To-do list: https://www.w3schools.com/howto/howto_js_todolist.asp


// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

window.onload=function(){
var openTheModal = document.getElementById("openModal");
var closeTheModal = document.getElementById("closeModal");

document.getElementById("openModal").addEventListener("click", displayContent);
document.getElementById("closeModal").addEventListener("click", hideContent);
}

function displayContent(){
  var openTheModal = document.getElementById("openModal");
  var modalInteriorLayout = document.getElementById("modalInterior")
  openTheModal.style.display="block";
  modalInteriorLayout.style.display="block";
}

function hideContent(){
  var openTheModal = document.getElementById("openModal");
  var modalInteriorLayout = document.getElementById("modalInterior")
  var closeTheModal = document.getElementById("closeModal");
  openTheModal.style.display="none";
  modalInteriorLayout.style.display="none";
  closeTheModal.style.display="none";
}
