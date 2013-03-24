define([
  './Quarter',
  './update',
  './draw',
  'frozen/box2d/BoxGame',
  'frozen/box2d/Box',
  'frozen/utils',
  'dojo/keys'
], function(Quarter, update, draw, BoxGame, Box, utils, keys){

  'use strict';

  var startInside = false;

  //setup a BoxGame instance
  var game = new BoxGame({
    canvasId: 'canvas',
    box: new Box({
      gravityY: 0
    }),
    // gameAreaId: 'gameArea',
    // canvasPercentage: 0.95,
    initInput: function(im){
      im.addKeyAction(keys.CTRL);
    },
    handleInput: function(im){
      if(im.mouseAction.isPressed()){
        if(!startInside && this.entities.quarter.pointInShape({
          x: (im.mouseAction.startPosition.x - (this.entities.quarter.radius * this.entities.quarter.scale)) / this.entities.quarter.scale,
          y: (im.mouseAction.startPosition.y - (this.entities.quarter.radius * this.entities.quarter.scale)) / this.entities.quarter.scale
        })){
          startInside = true;
        }

        if(!startInside){
          return;
        }

        if(im.keyActions[keys.CTRL].isPressed()){
          this.box.setPosition(
            'quarter',
            (im.mouseAction.position.x - (this.entities.quarter.radius * this.entities.quarter.scale)) / this.entities.quarter.scale,
            (im.mouseAction.position.y - (this.entities.quarter.radius * this.entities.quarter.scale)) / this.entities.quarter.scale
          );
          return;
        }

        var radians = utils.radiansFromCenter({
          x: (this.entities.quarter.x + this.entities.quarter.radius) * this.entities.quarter.scale,
          y: (this.entities.quarter.y + this.entities.quarter.radius) * this.entities.quarter.scale
        }, im.mouseAction.position);
        console.log(radians);

        this.box.setAngle('quarter', radians);
      } else {
        startInside = false;
      }
    },
    update: update,
    draw: draw
  });

  //if you want to take a look at the game object in dev tools
  console.log(game);

  game.addBody(new Quarter());

  //launch the game!
  game.run();

});