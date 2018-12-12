// JavaScript Document


//Script omkring navigationen
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


//Delay på alert boxen i bunden. (Koden fundet w3schools.com)
function myFunction (x) {
	if (x.matches){
		document.getElementsByClassName('alert').style.visibility = "hidden";
	}
	else 
		$(document).ready(function() {
			$('.alert').delay(800).fadeIn(400);
		});
}

var x = window.matchMedia("(max-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
