const express = require('express')
const cors = require('cors')
const routes = require('../api/routes/routes.js')

module.exports = () => {
  const app = express()

  app.set('port', process.env.PORT || 3333)

  app.use(express.json())
  app.use(cors())
  app.use('/assets', express.static('./assets'))
  app.use(routes)

  return app
}
