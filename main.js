function animateTheBox() {
  var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
  $(".mast").css('background', randomcolor + " url(images/header_transparent.png)");
}

animateTheBox();
var timer = window.setInterval(animateTheBox, 1000);

// Link: http://codepen.io/anon/pen/zrOKXV
function animateTheBox2() {
  var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
  $(".foot").css('background', randomcolor);
}

animateTheBox2();
var timer2 = window.setInterval(animateTheBox2, 1000);
