'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = say;
var googlehome = require('google-home-notifier');
var language = 'ja';

function say(message) {
  googlehome.device('Google-Home', language);
  googlehome.notify(message, function (res) {
    console.log(res);
  });
}