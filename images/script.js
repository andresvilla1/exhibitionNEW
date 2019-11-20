function nextImage(el){
		if (el.src.match("images/kersh.png")){
		el.src = "images/kershgif.gif"; 
	} else if (el.src.match("images/kershgif.gif")){
		el.src = "images/kersh2gif.gif";
	} else if (el.src.match("images/kersh2gif.GIF")){
		el.src = "images/kersh3gif.GIF";
	} else if (el.src.match("images/kersh3gif.GIF")){
		el.src = "images/kersh4gif.GIF";
	} else if (el.src.match("images/kersh4gif.GIF")){
		el.src = "images/kersh4gif.GIF";
	} else {
	}
}

function nextImagetwo(el){
		if (el.src.match("images/belli.png")){
		el.src = "images/belligif.GIF"; 
	} else if (el.src.match("images/belligif.GIF")){
		el.src = "images/belli2gif.GIF";
	} else if (el.src.match("images/belli2gif.GIF")){
		el.src = "images/belli3gif.GIF";
	} else if (el.src.match("images/belli3gif.GIF")){
		el.src = "images/belli4gif.GIF";
	} else if (el.src.match("images/belli4gif.GIF")){
		el.src = "images/belli4gif.GIF";
	} else {
	}
}

function nextImagethree(el){
		if (el.src.match("images/CK22.png")){
		el.src = "images/CK.png"; 
	} else if (el.src.match("images/CK.png")){
		el.src = "images/CK.png";
	}
}	

function nextImagefour(el){
		if (el.src.match("images/bellijersey.png")){
		el.src = "images/CB.png"; 
	} else if (el.src.match("images/CK.png")){
		el.src = "images/CK.png";
	}
}	

function nextImagefive(el){
		if (el.src.match("images/muncyjersey.png")){
		el.src = "images/MM.png"; 
	} else if (el.src.match("images/MM.png")){
		el.src = "images/MM.png";
	}
}	

function nextImagesix(el){
		if (el.src.match("images/verdugojersey.png")){
		el.src = "images/AV.png"; 
	} else if (el.src.match("images/AV.png")){
		el.src = "images/AV.png";
	}
}	

function refresh() {
	window.location.reload();
}

var x = document.getElementById("scully-sound"); 

function playAudio() { 
  x.play(); 
}

var a = document.getElementById("picone");
var b = document.getElementById("pictwo");
var c = document.getElementById("picthree");
var d = document.getElementById("picfour");
// these are all variables that is used in the checkConfiguration function. 

function  checkConfigurationtwo(el){
	if(a.src.match("images/CK.png") && b.src.match("images/CB.png") && c.src.match("images/MM.png") && d.src.match("images/AV.png")){
		a.classList.add("opaque"); // this code adds the opaque class to the picture/id. 
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		
		alert("Wow, you found the secret java function!");
		
	} else {
		alert("Ah! Can't complete this just yet!"); // an alert is like a notification that pops up on the screen saying something. 
	}
	// when the images match up to the src's then it will add opaque to each a,b,c, and d class. then the class "display" will be removed and will add the class display on the src. Then an alert will pop up saying whatever is in the quotations. Finally, if the srcs dont match up, then a alert will pop up saying whatever is in the quotations.
}
