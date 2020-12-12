
var waIcAir = document.querySelectorAll(".elements img")
var temps = document.querySelectorAll(".thermo a g")
var tempstxt = document.querySelectorAll(".thermo a")
var temprect = document.getElementById("tempgrad")
var degOutpt = document.getElementById("degOutpt")
var waterOutput = document.getElementById("waterOutput")

var scnctxt = document.getElementById("scnctxt")
var loupeview = document.getElementById("loupe-view")
var loupeviewEl = document.querySelectorAll("#loupe-view div")
var icecube = document.getElementById("icecube")
var magwatrice = document.getElementById("ballon2")
var waterflk = document.getElementById("waterflk")
var ballon = document.getElementById("ballon")

var frozen = document.getElementById("frozenparts")
var p50deg = document.getElementById("50deg")
var p20deg = document.getElementById("20deg")
var p2deg = document.getElementById("2deg")
var n15deg = document.getElementById("n15deg")
var n89deg = document.getElementById("n89deg")
var n273deg = document.getElementById("n273deg")
var degcanvas89 = document.getElementById("89degcanvas")
var degcanvas15 = document.getElementById("15degcanvas")
var degcanvas2 = document.getElementById("2degcanvas")
var degcanvas20 = document.getElementById("20degcanvas")
var degcanvas = document.getElementById("degcanvas")
var molcolid = document.getElementById("molcolsel")
var molcolabl = document.getElementById("airpartcolr")
var airmol = document.getElementById("airmol")
var watermol = document.getElementById("watermol")

var colred = "#ff0000"
var colorange = "#F5790A"
var colpurple = "#CD0074"
var colgreen = "#00EE00"
var colblack = "#000000"
var colbrown = "#AA7838"

/* Determines if air is frozen or not starts as true
 will change to false if temp is higher than -273 degrees */
var chkair = true

var height = temprect
var degrsmark
var ballonactv = false


// start listenning to clicks
icecube.addEventListener("click", showloupe)
waterflk.addEventListener("click", showloupe)
magwatrice.addEventListener("click", showloupe)

// Only when looking at air and water module, start listenning to clicks on air
if (ballon) {
	ballon.addEventListener("click", showAloupe)
}

// Start listenning to clicks on thermometer temp values
for (var i = 0; i < temps.length; i++) {
	temps[i].addEventListener("click", changeTemp)
	tempstxt[i].addEventListener("click", tempvalue)
	tempstxt[i].addEventListener("click", tempctrl)
}

// Change displayed temperature on click of thermometer temp value
function changeTemp(){
	if (this.getAttribute("data-add")){
		temprect.setAttribute("height", this.getAttribute("data-add"))
	}	
}

// Fetch temperature value on click of thermometer temp.
function tempvalue(){
	degrsmark = this.getAttribute("data-add")
	return degrsmark
}

// Empelement state label change on click based on temp
function changeTemptxt(){
			if (degrsmark > 0) {
				waterOutput.innerHTML = "Water"
			}else{		
				waterOutput.innerHTML = "Ice"
			}
}
		
function showloupe(){

	if (molcolid) {
		chkair = true
	}

	loupeview.classList.remove("hide")
	degcanvas.classList.remove("hide")
	tempctrl()
	refill()
	if(ballon){
		scnctxt.classList.add("hide")
	}
}

function showAloupe(){
	frozensnctxtctl()
	chkair = false
	tempctrl()
	refill()
	loupeview.classList.remove("hide")
}


function snctxtctl(){
	if (ballon){
	  	scnctxt.classList.add("hide")
	  	degcanvas.classList.remove("hide")
	 }
	  	
}

function frozensnctxtctl(){
	airfrozen = temprect.getAttribute("height")
	if (airfrozen == 513 ){
		degcanvas.classList.add("hide")
		scnctxt.classList.remove("hide")
	}
}


function tempctrl(){
	  amplitude = temprect.getAttribute("height")
	  switch (amplitude){

	// at -293 degrees
    case '513':
      degOutpt.innerHTML ="-273"+ " &deg;C"
      waterflk.classList.add("hide")
	  icecube.classList.remove("hide")
	  console.log(chkair)
	  if (chkair == false) {
	  	frozensnctxtctl()
	  }
      break

    // at -89 degrees
    case '293':
      if (chkair == false) {
      	wmolnum = 1
      	amolnum = 60
      }
      degOutpt.innerHTML ="-89"+ " &deg;C"
      waterflk.classList.add("hide")
	  icecube.classList.remove("hide")
	  // molcolattset()
	  snctxtctl()
      break

    // at -15 degrees
    case '218':
      if (chkair == false) {
      	wmolnum = 1
      	amolnum = 60
      }
      degOutpt.innerHTML ="-15"+ " &deg;C"
      waterflk.classList.add("hide")
	  icecube.classList.remove("hide")
	  // molcolattset()
	  snctxtctl()
      break
    
    // at 2 degrees
    case '143':
      if (chkair == false) {
      	wmolnum = 2
      	amolnum = 60
      }
      degOutpt.innerHTML ="2"+ " &deg;C"
      waterflk.classList.remove("hide")
	  icecube.classList.add("hide")
	  // molcolattset()
	  snctxtctl()
      break
    
    // at 20 degrees
    case '107':
      if (chkair == false) {
      	wmolnum = 3
      	amolnum = 60
      }
      degOutpt.innerHTML ="20"+ " &deg;C"
      waterflk.classList.remove("hide")
	  icecube.classList.add("hide")
	  // molcolattset()
	  snctxtctl()
      break
    
    // at 50 degrees
    case '54':
      if (chkair == false) {
      	wmolnum = 4
      	amolnum = 60
      }
      degOutpt.innerHTML ="50"+ " &deg;C"
      waterflk.classList.remove("hide")
	  icecube.classList.add("hide")
	  // molcolattset()
	  snctxtctl()
      break
  }
  changeTemptxt()
}

// Change color of air molecules
function chgaircol(value){
	switch(value){
		case '1':
			airmol.setAttribute("fill", colgreen)
			break
		case '2':
			airmol.setAttribute("fill", colblack)
			break
		case '3':
			airmol.setAttribute("fill", colbrown)
			break
		default:
			airmol.setAttribute("fill", colgreen)
	}


}
// Change color of water molecules
function chgwtrcol(value){

	switch(value){
		case '1':
			watermol.setAttribute("fill", colred)
			break
		case '2':
			watermol.setAttribute("fill", colorange)
			break
		case '3':
			watermol.setAttribute("fill", colpurple)
			break
		default:
			watermol.setAttribute("fill", colred)
	}
	updatecolors(this.value)
}