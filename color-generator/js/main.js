$(document).ready(function () {
  $(".generate-btn").click(function () {
    var randomColor = "#";
    var characters = "0123456789abcdef";

    for (let index = 0; index < 6; index++) {
      randomColor += characters[Math.floor(Math.random() * characters.length)];
    }

    $("#inputField").val(randomColor);
    $("#inputField").css("color", randomColor);
    $("#inputField").css("border-color", randomColor);
    $(".color-preview, .copy-btn").css("background-color", randomColor);
  });

  function add() {
    $(".alert-msg").addClass("slide-effect");
  }

  function remove() {
    $(".alert-msg").removeClass("slide-effect");
  }

  $(".copy-btn").click(function () { 
    $("#inputField").select();
    document.execCommand("copy");

    $(".code").text($("#inputField").val());

    add()
    setTimeout(remove, 2000)
  })
  
});
