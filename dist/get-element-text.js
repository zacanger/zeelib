'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getElementText = function getElementText(el) {
  var tg = el.tagName.toLowerCase();
  if (tg === 'select') {
    return el.textContent;
  }
  if (tg === 'textarea' || tg === 'input') {
    return el.value;
  }
  return '';
};

exports.default = getElementText;