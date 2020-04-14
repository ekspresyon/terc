<?php require('../assets/head.php');?>

	
	<h1 class="module-title">Particle Magnifier with Air and Water</h1>
	<div class="module-container">
		<div class="module-wrapper flex-container">
		  
			    <div class="thermometer clearfix flex-child">
				
					<div class="thermowraper">
						<?php require('../assets/img/thermometer.svg');?>
					</div>
				</div>
		    
		    
		      	<div class="matter-state flex-child">
					<h1>
						<span id="degOutpt">-273 &deg;C</span></br></br>
						<span id="waterOutput">Ice</span>
					</h1>
					<div class="elements">
						<img id="ballon" src="../assets/img/ballon.svg" class="hide" alt="Air ballon">
						<img id="icecube" src="../assets/img/ice_cube.svg" alt="Ice cube">
						<img id="waterflk" class="hide" src="../assets/img/beaker.svg" alt="Water flask">
					</div> <!-- end .elements -->
				</div> <!-- end .ice -->

				<div class="magnified flex-child">
					<div class="molcol">
						<label id="airpartcolr"class="hidden">
							<select id="molcolsel" onchange="chgaircol(this.value)" disabled>
								<option value="1">green</option>
								<option value="2">black</option>
								<option value="3">brown</option>
							</select> 
							<span style="vertical-align: middle;display: inline-block;">
								<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
									<circle id="airmol" cx="10" cy="10" r="10"  fill="#2ade5a" />
								</svg></span> = dry air particle
						</label>
						<label>
							<select id="molcol" onchange="chgwtrcol(this.value)">
								<option value="1">red</option>
								<option value="2">orange</option>
								<option value="3">purple</option>
							</select>
							<span style="vertical-align: middle;display: inline-block;">
								<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
									<circle id="watermol" cx="10" cy="10" r="10"  fill="#ff0000" />
								</svg></span> = water particle
						</label>
					</div>
					<div id="loupe-view" class="hide">
						
						<div id="degcanvas" class=""></div>
						
					</div>
				</div> <!-- end .magnified -->
		</div><!-- end .module-wrapper -->

	</div> <!-- end .module-container -->



<?php require('../assets/footer.php');?>

