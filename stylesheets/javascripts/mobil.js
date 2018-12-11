// JavaScript Document

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

$(function(){
    $('.navbar_toggle, .nav_hide').click(function(){
        $('.navbar_toggle').toggleClass('change');
        $('.nav_hide').fadeToggle();
        $('nav_hide').removeClass('nav_hide');
    });
});
