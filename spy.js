// Source for To-do list: https://www.w3schools.com/howto/howto_js_todolist.asp
// Source for Modal Model: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal


$(document).ready(function(){
  $("#cameraModal").click(function(){
    $("#myCameraModal").modal();
  });
});

// 
// window.onload=function(){
// var openTheModalCamera = document.getElementById("openModalCamera");
// var openTheModalVideogame = document.getElementById("openModalVideogame");
// var openTheModalCameraPaintbrush = document.getElementById("openModalPaintbrush");
// var openTheModalDice = document.getElementById("openModalDice");
// var openTheModalKeyboard = document.getElementById("openModalKeyboard");
// var openTheModalOrange= document.getElementById("openModalOrange")
// var closeTheModal = document.getElementById("closeModal");
//
// // camera clickers
// document.getElementById("openModalCamera").addEventListener("click", displayContentCamera);
// document.getElementById("closeModalCamera").addEventListener("click", hideContentCamera);
//
// // videogame clickers
// document.getElementById("openModalVideogame").addEventListener("click", displayContentVideogame);
// document.getElementById("closeModalVideogame").addEventListener("click", hideContentVideogame);
//
// // paintbrush clickers
// document.getElementById("openModalPaintbrush").addEventListener("click", displayContentPaintbrush);
// document.getElementById("closeModalPaintbrush").addEventListener("click", hideContentPaintbrush);
//
// // dice clickers
// document.getElementById("openModalDice").addEventListener("click", displayContentDice);
// document.getElementById("closeModalDice").addEventListener("click", hideContentDice);
//
// // Keyboard clickers
// document.getElementById("openModalKeyboard").addEventListener("click", displayContentKeyboard);
// document.getElementById("closeModalKeyboard").addEventListener("click", hideContentKeyboard);
//
//
// // orange clicker
// document.getElementById("openModalOrange").addEventListener("click", displayContentOrange);
// document.getElementById("closeModalOrange").addEventListener("click", hideContentOrange);
// }
//
// // camera displays
// function displayContentCamera(){
//   var openTheModal = document.getElementById("openModalCamera");
//   var modalInteriorLayout = document.getElementById("modalInteriorCamera");
//   var closeTheModal = document.getElementById("closeModalCamera");
//   openTheModal.style.display="none";
//   modalInteriorLayout.style.display="block";
//   closeTheModal.style.display="block";
// }
//
// function hideContentCamera(){
//   var openTheModal = document.getElementById("openModalCamera");
//   var modalInteriorLayout = document.getElementById("modalInteriorCamera")
//   var closeTheModal = document.getElementById("closeModalCamera");
//   openTheModal.style.display="block";
//   modalInteriorLayout.style.display="none";
//   closeTheModal.style.display="none";
// }
//
// // videogame displays
// function displayContentVideogame(){
//   var openTheModal = document.getElementById("openModalVideogame");
//   var modalInteriorLayout = document.getElementById("modalInteriorVideogame");
//   var closeTheModal = document.getElementById("closeModalVideogame");
//   openTheModal.style.display="none";
//   modalInteriorLayout.style.display="block";
//   closeTheModal.style.display="block";
// }
//
// function hideContentVideogame(){
//   var openTheModal = document.getElementById("openModalVideogame");
//   var modalInteriorLayout = document.getElementById("modalInteriorVideogame")
//   var closeTheModal = document.getElementById("closeModalVideogame");
//   openTheModal.style.display="block";
//   modalInteriorLayout.style.display="none";
//   closeTheModal.style.display="none";
// }
//
// // paintbrush displays
// function displayContentPaintbrush(){
//   var openTheModal = document.getElementById("openModalPaintbrush");
//   var modalInteriorLayout = document.getElementById("modalInteriorPaintbrush");
//   var closeTheModal = document.getElementById("closeModalPaintbrush");
//   openTheModal.style.display="none";
//   modalInteriorLayout.style.display="block";
//   closeTheModal.style.display="block";
// }
//
// function hideContentPaintbrush(){
//   var openTheModal = document.getElementById("openModalPaintbrush");
//   var modalInteriorLayout = document.getElementById("modalInteriorPaintbrush")
//   var closeTheModal = document.getElementById("closeModalPaintbrush");
//   openTheModal.style.display="block";
//   modalInteriorLayout.style.display="none";
//   closeTheModal.style.display="none";
// }
//
// // dice displays
// function displayContentDice(){
//   var openTheModal = document.getElementById("openModalDice");
//   var modalInteriorLayout = document.getElementById("modalInteriorDice");
//   var closeTheModal = document.getElementById("closeModalDice");
//   openTheModal.style.display="none";
//   modalInteriorLayout.style.display="block";
//   closeTheModal.style.display="block";
// }
//
// function hideContentDice(){
//   var openTheModal = document.getElementById("openModalDice");
//   var modalInteriorLayout = document.getElementById("modalInteriorDice")
//   var closeTheModal = document.getElementById("closeModalDice");
//   openTheModal.style.display="block";
//   modalInteriorLayout.style.display="none";
//   closeTheModal.style.display="none";
// }
//
// // Keyboard
// function displayContentKeyboard(){
//   var openTheModal = document.getElementById("openModalKeyboard");
//   var modalInteriorLayout = document.getElementById("modalInteriorKeyboard");
//   var closeTheModal = document.getElementById("closeModalKeyboard");
//   openTheModal.style.display="none";
//   modalInteriorLayout.style.display="block";
//   closeTheModal.style.display="block";
// }
//
// function hideContentKeyboard(){
//   var openTheModal = document.getElementById("openModalKeyboard");
//   var modalInteriorLayout = document.getElementById("modalInteriorKeyboard")
//   var closeTheModal = document.getElementById("closeModalKeyboard");
//   openTheModal.style.display="block";
//   modalInteriorLayout.style.display="none";
//   closeTheModal.style.display="none";
// }
//
// // orange
// function displayContentOrange(){
//   var openTheModal = document.getElementById("openModalOrange");
//   var modalInteriorLayout = document.getElementById("modalInteriorOrange");
//   var closeTheModal = document.getElementById("closeModalOrange");
//   openTheModal.style.display="none";
//   modalInteriorLayout.style.display="block";
//   closeTheModal.style.display="block";
// }
//
// function hideContentOrange(){
//   var openTheModal = document.getElementById("openModalOrange");
//   var modalInteriorLayout = document.getElementById("modalInteriorOrange")
//   var closeTheModal = document.getElementById("closeModalOrange");
//   openTheModal.style.display="block";
//   modalInteriorLayout.style.display="none";
//   closeTheModal.style.display="none";
// }
