<?php require('../assets/head.php');?>

	
	<h1 class="module-title">Particle Magnifier with Air and Water</h1>
	<div class="module-container">
		<div class="module-wrapper flex-container">
		  
			    <div class="thermometer clearfix flex-child">
				
					<div class="thermowraper">
						<?php echo  require('../assets/img/thermometer.svg');?>
					</div>
				</div>
		    
		    
		      	<div class="matter-state flex-child">
					<h1>
						<span id="degOutpt">-273&deg;C</span></br></br>
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
						<label class="hide">
							<select id="molcolsel" onchange="chgaircol(this.value)" disabled>
								<option value="#2ade5a">green</option>
								<option value="#000000">black</option>
								<option value="#632a07">brown</option>
							</select> 
							<span style="vertical-align: middle;display: inline-block;">
								<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
									<circle id="airmol" cx="10" cy="10" r="10"  fill="#2ade5a" />
								</svg></span> = dry air particle
						</label>
						<label>
							<select id="molcol" onchange="chgwtrcol(this.value)">
								<option value="#f34e54">red</option>
								<option value="#ed9609">orange</option>
								<option value="#96238f">purple</option>
							</select>
							<span style="vertical-align: middle;display: inline-block;">
								<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
									<circle id="watermol" cx="10" cy="10" r="10"  fill="#f34e54" />
								</svg></span> = water particle
						</label>
					</div>
					<div id="loupe-view" class="hide">
						<!-- <div id="viewzone" class="hide"></div> -->
						<div id="50degcanvas" class="hide"></div>
						<div id="20degcanvas" class="hide">20 deg</div>
						<div id="2degcanvas" class="hide">2 deg</div>
						<div id="15degcanvas" class="hide">15 deg</div>
						<div id="89degcanvas" class="hide">89 deg</div>
						<div id="frozenparts" class=""></div>
					</div>
				</div> <!-- end .magnified -->
		</div><!-- end .module-wrapper -->
		<div style="max-width: 1000px; margin: 40px auto">
			<p>There is no option to view air particles at -273°C, since at this temperature there would be no gaseous form of matter. Nitrogen, oxygen, and all of the elements that usually compose our atmosphere would be solids before the temperature reached absolute zero.</p>
		</div>
	</div> <!-- end .module-container -->



<?php require('../assets/footer.php');?>

