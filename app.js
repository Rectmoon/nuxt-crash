const path = require('path')

const express = require('express')
const {
  config: {
    nuxt: { port, base }
  }
} = require('./package.json')

const app = express()
app.use(base, express.static(path.join(__dirname, base)))

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Application is listening at http://localhost:${port}`)
})
