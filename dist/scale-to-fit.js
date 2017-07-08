"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Takes a width, height, maxWidth, and maxHeight
 * Returns an object that tells you the largest you can
 * scale to.
 * @example
 * scaleToFit(1400, 1200, 2000, 200) // => { width: 233.33333333333331, height: 200 }
 */

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