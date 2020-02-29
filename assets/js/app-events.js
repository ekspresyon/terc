var waIcAir = document.querySelectorAll(".elements")
var temps = document.querySelectorAll(".thermo a g")
var tempstxt = document.querySelectorAll(".thermo a")
var temprect = document.getElementById("tempgrad")
var degOutpt = document.getElementById("degOutpt")
var waterOutput = document.getElementById("waterOutput")
var waterflk = document.getElementById("waterflk")
var loupeview = document.getElementById("loupe-view")
var loupeviewEl = document.querySelectorAll("#loupe-view div")
var icecube = document.getElementById("icecube")
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
var degcanvas50 = document.getElementById("50degcanvas")

var height = temprect


waIcAir[0].addEventListener("click", showloupe)

for (var i = 0; i < temps.length; i++) {
	temps[i].addEventListener("click", changeTemp)
	tempstxt[i].addEventListener("click", changeTemptxt)
	tempstxt[i].addEventListener("click", particlesactn)
	tempstxt[i].addEventListener("click", boldtemp)
}

function changeTemp(){
	if (this.getAttribute("data-add")){
		temprect.setAttribute("height", this.getAttribute("data-add"))
	}
}

function changeTemptxt(){
	if (this.getAttribute("data-add")){	
		degOutpt.innerHTML = this.getAttribute("data-add") + "&deg;C"
		if(this.getAttribute("data-add") > 0){
			waterOutput.innerHTML = "Water"
			waterflk.className = ''
			icecube.className = 'hide'
		}
		else{
			waterOutput.innerHTML = "Ice"
			waterflk.className = 'hide'
			icecube.className = ''
		}
	}
}

function particlesactn(){
	var theid = this.getAttribute("id")
	console.log(theid)
	switch (theid){
		case 'n273deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			frozen.className = ""	
			break
		case 'n89deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			frozen.className = ""	
			break
		case 'n15deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			frozen.className = ""	
			break
		case '2deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			degcanvas50.className = ""
			console.log("2 degrees")	
			xyrand = 0.5
			break
		case '20deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			degcanvas50.className = ""
			xyrand = 2
			break
		case '50deg':
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}
			degcanvas50.className = ""
			xyrand = 6	
			break
		default:
			for (var i = 0; i < loupeviewEl.length; i++) {
				loupeviewEl[i].className = "hide"
			}

	}
}
function showloupe(){
	console.log("loupe")
	loupeview.classList.remove("hide")
}
function boldtemp(){
	this.className = "degselct"
	console.log(this)
}