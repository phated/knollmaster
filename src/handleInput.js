define([
  'frozen/utils/radiansFromCenter',
  'dojo/keys'
], function(radiansFromCenter, keys){

  'use strict';

  var startInside = false;

  return function(im){
    if(im.mouseAction.isPressed()){
      if(!startInside && this.state.quarter.pointInShape({
        x: im.mouseAction.startPosition.x - this.state.quarter.radius,
        y: im.mouseAction.startPosition.y - this.state.quarter.radius
      })){
        startInside = true;
      }

      if(!startInside){
        return;
      }

      if(im.keyActions[keys.SHIFT].isPressed()){
        this.state.quarter.x = im.mouseAction.position.x - this.state.quarter.radius;
        this.state.quarter.y = im.mouseAction.position.y - this.state.quarter.radius;
        return;
      }

      this.state.quarter.angle = radiansFromCenter(this.state.quarter.getCenter(), im.mouseAction.position);
      console.log(this.state.quarter.angle);
    } else {
      startInside = false;
    }
  };

});