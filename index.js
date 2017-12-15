const serverless = require('serverless-http')
    , app = require('express')()
    , handler = serverless(app)

app.get('/', (req, res) => {
  res.send('wazaaa bruthas')
})

module.exports = {
  handler
}