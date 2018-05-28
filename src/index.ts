import dotenv = require('dotenv')
dotenv.config()

import makeDebug = require('debug')
const debug = makeDebug('an-old-man-at-a-cafe-in-the-50s')

import WebSocket = require('ws')

debug('opening: %s', process.env.WS_ENDPOINT)
const ws = new WebSocket(process.env.WS_ENDPOINT)

ws.on('open', () => {
  debug('websocket opened')
  const initial = process.argv[2]
  if (initial) {
    debug('sending: %j', initial)
    ws.send(initial)
  }
})

ws.on('message', (data) => {
  debug('recieved: %j', JSON.parse(data))
})
