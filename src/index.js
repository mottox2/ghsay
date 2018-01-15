const googlehome = require('google-home-notifier')
const language = 'ja'

export default function say(message) {
  googlehome.device('Google-Home', language)
  googlehome.notify(message, res => {
    console.log(res)
  })
}
