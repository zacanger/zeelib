'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Makes pretty 'n whatevers ago' string
 * @example
 * ago(new Date('2007-98-17')) // => '9.75 years ago'
 */

var ago = function ago(d) {
  var diff = (new Date().getTime() - d.getTime()) / 1000;
  var dayDiff = Math.floor(diff / 86400);
  return dayDiff === 0 && (diff < 60 && 'just now' || diff < 120 && '1 minute ago' || diff < 3600 && Math.floor(diff / 60) + ' minutes ago' || diff < 7200 && '1 hour ago' || diff < 86400 && Math.floor(diff / 3600) + ' hours ago') || dayDiff === 1 && 'Yesterday' || dayDiff < 7 && dayDiff + ' days ago' || dayDiff < 365 && Math.ceil(dayDiff / 7) + ' weeks ago' || (dayDiff / 365).toFixed(2) + ' years ago';
};

exports.default = ago;