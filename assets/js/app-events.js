var waIcAir = document.querySelectorAll(".elements img")
var temps = document.querySelectorAll(".thermo a g")
var tempstxt = document.querySelectorAll(".thermo a")
var temprect = document.getElementById("tempgrad")
var degOutpt = document.getElementById("degOutpt")
var waterOutput = document.getElementById("waterOutput")

var loupeview = document.getElementById("loupe-view")
var loupeviewEl = document.querySelectorAll("#loupe-view div")
var icecube = document.getElementById("icecube")
var icecube = document.getElementById("icecube")
var waterflk = document.getElementById("waterflk")
var ballon = document.getElementById("ballon")
//var viewport = document.getElementById("viewzone")
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
var chkair = true

var height = temprect
var degrsmark

if (ballon) {
ballon.addEventListener("click", showAloupe)
}
icecube.addEventListener("click", showloupe)
waterflk.addEventListener("click", showloupe)

for (var i = 0; i < temps.length; i++) {
	temps[i].addEventListener("click", changeTemp)
	tempstxt[i].addEventListener("click", tempvalue)
	tempstxt[i].addEventListener("click", tempctrl)
	//tempstxt[i].addEventListener("click", particlesactn)
}

function changeTemp(){
	if (this.getAttribute("data-add")){
		temprect.setAttribute("height", this.getAttribute("data-add"))
	}
	
}
function tempvalue(){
	degrsmark = this.getAttribute("data-add")
	return degrsmark
}

function changeTemptxt(){
		console.log("temp change running")
		if(chkair == true){
			console.log(chkair)
			console.log("air colors disabled")
			if (degrsmark > 0) {
				console.log("temparature is positive")
				waterOutput.innerHTML = "Water"
			}else{
				console.log("temparature is negative")
				waterOutput.innerHTML = "Ice"
			}
		}else if(degrsmark == -273){
			console.log("you clicked on -273")
			waterOutput.innerHTML = "Ice"
		}else{
			console.log("air colors enabled")
			waterOutput.innerHTML = "Air and water"
		}
}
		
	

function molcolattset(){
	if (molcolabl) {
		ballon.className = ""
		molcolabl.className = ''
		waterflk.classList.add("mt-0")
		icecube.classList.add("mt-0")
	}	
}
function showloupe(){
	if (molcolid) {
	molcolid.setAttribute("disabled","true")
	chkair = true
	}
	loupeview.classList.remove("hide")
	tempctrl()
	refill()
}
function showAloupe(){
	console.log("you clicked on the ballon")
	molcolid.removeAttribute("disabled")
	loupeview.classList.remove("hide")
	chkair = false
	tempctrl()
	refill()
}

function tempctrl(){
	  amplitude = temprect.getAttribute("height")
	  switch (amplitude){
    case '513':
      degOutpt.innerHTML ="-273"+ " &deg;C"
      waterflk.className = 'hide'
	  icecube.className = ''
	  if (molcolabl) {
	  	molcolabl.className = 'hidden'
	    ballon.className = "hide"
	  }
      break
    case '293':
      if (chkair == false) {
      	wmolnum = 1
      	amolnum = 60
      }
      degOutpt.innerHTML ="-89"+ " &deg;C"
      waterflk.className = 'hide'
	  icecube.className = ''
	  molcolattset()
      break
    case '218':
      if (chkair == false) {
      	wmolnum = 1
      	amolnum = 60
      }
      degOutpt.innerHTML ="-15"+ " &deg;C"
      waterflk.className = 'hide'
	  icecube.className = ''
	  molcolattset()
      break
    case '143':
      if (chkair == false) {
      	wmolnum = 2
      	amolnum = 60
      }
      degOutpt.innerHTML ="2"+ " &deg;C"
      waterflk.className = ''
	  icecube.className = 'hide'
	  molcolattset()
      break
    case '107':
      if (chkair == false) {
      	wmolnum = 3
      	amolnum = 60
      }
      degOutpt.innerHTML ="20"+ " &deg;C"
      waterflk.className = ''
	  icecube.className = 'hide'
	  molcolattset()
      break
    case '54':
      if (chkair == false) {
      	wmolnum = 4
      	amolnum = 60
      }
      degOutpt.innerHTML ="50"+ " &deg;C"
      waterflk.className = ''
	  icecube.className = 'hide'
	  molcolattset()
      break
  }
  //degrs = this.getAttribute("data-add")
  changeTemptxt()
}

function particlesactn(){
	var theid = this.getAttribute("id")
	switch (theid){
		case 'n273deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			degcanvas.className = ""
			ballon.className = "hide"
			molcolabl[0].className = 'hidden'
			break
		case 'n89deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			degcanvas.className = ""
			molcolabl[0].className = ''
			icecube.classList.add("mt-0")
			ballon.className = ""
			break
		case 'n15deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			degcanvas.className = ""
			molcolabl[0].className = ''
			icecube.classList.add("mt-0")
			ballon.className = ""
			break
		case '2deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			degcanvas.className = ""
			molcolattset()
			break
		case '20deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			degcanvas.className = ""
			molcolabl[0].className = ''
			molcolattset()
			break
		case '50deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			degcanvas.className = ""
			molcolabl[0].className = ''
			molcolattset()
			break
		default:
			// for (var i = 0; i < loupeviewEl.length; i++) {
			// 	loupeviewEl[i].className = "hide"
			// }

	}
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