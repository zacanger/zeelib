"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var scaleToFit = function scaleToFit(width, height, maxWidth, maxHeight) {
  var output = { width: width, height: height };

  if (maxWidth && output.width > maxWidth) {
    output.width = maxWidth;
    output.height = maxWidth / width * height;
  }
  if (maxHeight && output.height > maxHeight) {
    output.height = maxHeight;
    output.width = maxHeight / height * width;
  }

  return output;
};

exports.default = scaleToFit;