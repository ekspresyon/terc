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
						<img id="ballon" src="../assets/img/loupe.svg" class="" alt="Air ballon">
						<div class="elcontainer" style="margin-top: 65px;">
							<img id="icecube" src="../assets/img/ice_cube.svg" alt="Ice cube">
							<div id="waterflk" class="hide">
							</div>
						</div>
					</div> <!-- end .elements -->
				</div> <!-- end .ice -->

				<div class="magnified flex-child">
					<div class="molcol">
						<label id="airpartcolr">
							<select id="molcolsel" onchange="chgaircol(this.value)">
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
						<div id="scnctxt" class="hide"><p>At -273°C, there would be no gaseous form of matter. Nitrogen, oxygen, and all of the elements that usually compose our atmosphere would be solids before the temperature reached absolute zero.</p></div>
						
						
					</div>
				</div> <!-- end .magnified -->
		</div><!-- end .module-wrapper -->
		<div style="max-width: 1000px; margin: 40px auto">
			<!-- <p>There is no option to view air particles at -273°C, since at this temperature there would be no gaseous form of matter. Nitrogen, oxygen, and all of the elements that usually compose our atmosphere would be solids before the temperature reached absolute zero.</p> -->
		
			</br>
			</br>
			<a href="https://davidjd.com/dev/TERC/Particle_Magnifer_Water">Particle Magnifier with Water</a>
			</br>
			</br>
			<a class="github-button" href="https://github.com/ekspresyon/terc" data-size="large" aria-label="Download ekspresyon/terc on GitHub">GitHub</a>
			<!-- Place this tag where you want the button to render. -->
			<a class="github-button" href="https://github.com/ekspresyon/terc/archive/master.zip" data-icon="octicon-cloud-download" data-size="large" aria-label="Download ekspresyon/terc on GitHub">Download</a>
		</div>
	</div> <!-- end .module-container -->



<?php require('../assets/footer.php');?>

