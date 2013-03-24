define([
  'frozen/plugins/loadImage!images/bg1.png'
], function(bg1){

  'use strict';

  return function(ctx){
    ctx.drawImage(bg1, 0, 0, this.width, this.height);
    for(var key in this.entities){
      var entity = this.entities[key];
      entity.draw(ctx);
    }
  };

});