
'use strict'

const slack = require('slack')
const config = require('./config')

const send_message = (text, channel) => {
  slack.chat.postMessage({
    token: config('BOT_USER_TOKEN'),
    icon_emoji: config('ICON_EMOJI'),
    channel: channel,
    text: text
  }, (err) => {
    if (err) throw err

    console.log(`I sent the message "${text}" to the channel "${channel}"`)
  })
}

module.exports = {send_message: send_message}
