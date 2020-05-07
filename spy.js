// Source for To-do list: https://www.w3schools.com/howto/howto_js_todolist.asp
// Source for Modal Model: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
// MAJOR SOURCE: https://getbootstrap.com/docs/4.1/components/modal/

$(document).ready(function(){
  $("#cameraModal").click(function(){
    $("#myCameraModal").modal();
  });
});

$(document).ready(function(){
  $("#videogameModal").click(function(){
    $("#myVideogameModal").modal();
  });
});

$(document).ready(function(){
  $("#paintbrushModal").click(function(){
    $("#myPaintbrushModal").modal();
  });
});

$(document).ready(function(){
  $("#diceModal").click(function(){
    $("#myDiceModal").modal();
  });
});

$(document).ready(function(){
  $("#keyboardModal").click(function(){
    $("#myKeyboardModal").modal();
  });
});

$(document).ready(function(){
  $("#orangeModal").click(function(){
    $("#myOrangeModal").modal();
  });
});

// Tabs on both sides

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNav2() {
  document.getElementById("mySidenav2").style.width = "390px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}
