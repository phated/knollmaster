define([
  'dcl',
  'frozen/utils/distance',
  'frozen/plugins/loadImage!images/knollablegoods.png'
], function(dcl, distance, sprite){

  'use strict';

  return dcl(null, {
    img: sprite,
    radius: 63.5,
    sx: 0,
    sy: 0,
    sWidth: 0,
    sHeight: 0,
    x: 0,
    y: 0,
    draw: function(ctx){
      ctx.save();
      ctx.translate((this.x + this.radius), (this.y + this.radius));
      ctx.rotate(this.angle);
      ctx.translate(-(this.x + this.radius), -(this.y + this.radius));
      ctx.drawImage(
        this.img,
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