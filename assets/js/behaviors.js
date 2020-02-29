Physics(function(world){
  var molsbox = 300;
  var viewWidth  = molsbox;
  var viewHeight = molsbox;
  /**/
  var renderer = Physics.renderer('canvas', {
    el: 'viewzone',
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
    pos: Physics.vector(viewWidth, viewHeight).mult(.9),
    strength: .3,
    order: 10,
    min: 1,
    max: 20 
  });
  var attractor2 = Physics.behavior("attractor", {
    pos: Physics.vector(viewWidth, viewHeight).mult(0.05),
    strength: .3,
    order: 10,
    min: 1,
    max: 20 
  });

  bodies=[];
  // add a circle
  for (var i = 0; i < 100; i++) {
    body = Physics.body('circle', {
        x: viewWidth/1, // x-coordinate
        y: viewHeight/1, // y-coordinate
        vx: 1, // velocity in x-direction
        vy: 1, // velocity in y-direction
        radius: 10
      })
      world.add(body);
    bodies.push(body)
  }  

  world.add([
    Physics.behavior('edge-collision-detection', {
      aabb: Physics.aabb(5, 5, viewWidth, viewHeight)
    }),
    Physics.behavior('body-collision-detection'),
    Physics.behavior('body-impulse-response'),
    Physics.behavior('sweep-prune'),
    //Physics.behavior('constant-acceleration'),
    attractor,
    attractor2,
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