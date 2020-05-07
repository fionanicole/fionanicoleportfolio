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

var $el = $("#allObjectButtons");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $("#scaleable-wrapper");

$wrapper.resizable({
  resize: doResize
});

function doResize(event, ui) {

  var scale, origin;

  scale = Math.min(
    ui.size.width / elWidth,
    ui.size.height / elHeight
  );

  $el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
  });

}

var starterData = {
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}
doResize(null, starterData);
