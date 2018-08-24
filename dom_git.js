var button = document.querySelector("button");
var body  = document.querySelector("body");
var font = document.querySelectorAll("style")
isGreen = false;


button.addEventListener("click", function () {

    if (isGreen) {
    	body.textContent = font[0].classList.add("I'm a white background");
    	body.style.background = "white";
    	isGreen = false;
    } else {
    	body.textContent = font[1].classList.add("I'm a green background");
    	body.style.background = "green";
    	 isGreen = true;
    }

	
})

