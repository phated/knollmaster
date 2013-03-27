define([
  './RoundKnollable',
  'dcl'
], function(RoundKnollable, dcl, sprite){

  'use strict';

  return dcl(RoundKnollable, {
    radius: 63.5,
    sx: 396,
    sy: 291,
    sWidth: 127,
    sHeight: 127,
    x: 200,
    y: 200
  });

});