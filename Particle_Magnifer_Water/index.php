<?php require('../assets/head.php');?>

	
	<h1 class="module-title">Particle Magnifier with Water</h1>
	<div class="module-container">
		<div class="module-wrapper flex-container">
		  
			    <div class="thermometer clearfix flex-child">
				
					<div class="thermowraper">
						<?php echo  require ('../assets/img/thermometer.svg'); ?>
					</div>
				</div>
		      	<div class="matter-state flex-child">
					<h1>
						<span id="degOutpt">-273&deg;C</span></br></br>
						<span id="waterOutput">Ice</span>
					</h1>
					<div class="elements">
						<img id="icecube" src="../assets/img/ice_cube.svg" alt="Ice cube">
						<img id="waterflk" class="hide" src="../assets/img/beaker.svg" alt="Water flask">
					</div> <!-- end .elements -->
				</div> <!-- end .ice -->

				<div class="magnified flex-child">
					<div class="molcol">
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

	</div> <!-- end .module-container -->



<?php require('../assets/footer.php');?>

