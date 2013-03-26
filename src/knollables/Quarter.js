define([
  'dcl',
  'frozen/utils/distance',
  'frozen/plugins/loadImage!images/knollablegoods.png'
], function(dcl, distance, sprite){

  'use strict';

  return dcl(null, {
    radius: 63.5,
    sx: 396,
    sy: 291,
    sWidth: 127,
    sHeight: 127,
    x: 200,
    y: 200,
    draw: function(ctx){
      ctx.save();
      ctx.translate((this.x + this.radius), (this.y + this.radius));
      ctx.rotate(this.angle);
      ctx.translate(-(this.x + this.radius), -(this.y + this.radius));
      ctx.drawImage(
        sprite,
        this.sx, this.sy, //clip start
        this.sWidth, this.sHeight,
        this.x, this.y,
        this.radius * 2, this.radius * 2
      );
      ctx.restore();
    },
    pointInShape: function(point){
      return (distance(point, this) <= this.radius);
    },
    getCenter: function(){
      return {
        x: this.x + this.radius,
        y: this.y + this.radius
      };
    }
  });

});