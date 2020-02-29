Physics(function(world){
  var mols = 200;
  var viewWidth  = mols;
  var viewHeight = mols;
  /**/
  var renderer = Physics.renderer('canvas', {
    el: 'viewport',
    width:  viewWidth,
    height: viewHeight,
    meta: false, // don't display meta data
    styles: {
        // set colors for the circle bodies
        'circle' : {
            strokeStyle: 'rgba(255, 255, 255, 0)',
            lineWidth: 1,
            fillStyle: 'rgba(243, 78, 84, .9)',
            angleIndicator: 'rgba(255, 255, 255, 0)',
        }
    }
  });
  var attractor = Physics.behavior("attractor", {
    pos: Physics.vector(viewWidth, viewHeight).mult(0.5),
    strength: .1,
    order: 1 
  });
  bodies=[];
  // add a circle
  for (var i = 0; i < 110; i++) {
    body = Physics.body('circle', {
        x: viewWidth/2, // x-coordinate
        y: viewHeight/2, // y-coordinate
        vx: 0.1, // velocity in x-direction
        vy: 0.1, // velocity in y-direction
        radius: 10
      })
      world.add(body);
    bodies.push(body)
  }  
  world.add([
    Physics.behavior('edge-collision-detection', {
      aabb: Physics.aabb(0, 0, viewWidth, viewHeight)
    }),
    Physics.behavior('body-collision-detection'),
    Physics.behavior('body-impulse-response'),
    Physics.behavior('sweep-prune'),
    //Physics.behavior('constant-acceleration'),
    attractor,
    renderer
  ]);
  world.on('step', function () {
        world.render();
  });
  // subscribe to ticker to advance the simulation
    Physics.util.ticker.on(function( time ) {
        world.step( time );
    });

    // start the ticker
    Physics.util.ticker.start();
});