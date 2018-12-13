// JavaScript Document

//Delay på alert boxen i bunden. (Koden fundet w3schools.com)
function myFunction (x) {
	if (x.matches){
		document.getElementsByClassName('alert2').style.visibility = "hidden";
	}
	else 
		$(document).ready(function() {
			$('.alert2').delay(800).fadeIn(400);
		});
}

var x = window.matchMedia("(min-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes