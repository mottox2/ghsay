const googlehome = require('google-home-notifier')
const language = 'ja'

exports.say = message => {
  googlehome.device('Google-Home', language)
  googlehome.notify(message, function(res) {
    console.log(res)
  })
}

say('Hello world')
