define([
  './knollables/Quarter',
  './update',
  './draw',
  './handleInput',
  'frozen/GameCore',
  'dojo/keys'
], function(Quarter, update, draw, handleInput, GameCore, keys){

  'use strict';

  //setup a GameCore instance
  var game = new GameCore({
    canvasId: 'canvas',
    // gameAreaId: 'gameArea',
    // canvasPercentage: 0.95,
    state: {
      quarter: new Quarter()
    },
    initInput: function(im){
      im.addKeyAction(keys.SHIFT);
    },
    handleInput: handleInput,
    update: update,
    draw: draw
  });

  //if you want to take a look at the game object in dev tools
  console.log(game);

  //launch the game!
  game.run();

});