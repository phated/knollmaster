define([
  'dcl',
  'frozen/box2d/entities/Circle',
  'frozen/plugins/loadImage!images/knollablegoods.png'
], function(dcl, Circle, sprite){

  'use strict';

  return dcl(Circle, {
    id: 'quarter',
    radius: 63.5,
    sx: 396,
    sy: 291,
    sWidth: 127,
    sHeight: 127,
    x: 200,
    y: 200,
    draw: function(ctx){
      ctx.save();
      ctx.translate((this.x + this.radius) * this.scale, (this.y + this.radius) * this.scale);
      ctx.rotate(this.angle);
      ctx.translate(-(this.x + this.radius) * this.scale, -(this.y + this.radius) * this.scale);
      ctx.drawImage(
        sprite,
        this.sx, this.sy, //clip start
        this.sWidth, this.sHeight,
        this.x * this.scale, this.y * this.scale,
        this.radius * this.scale * 2, this.radius * this.scale * 2
      );
      ctx.restore();
    }
  });

});