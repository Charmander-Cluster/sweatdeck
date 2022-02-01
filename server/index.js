//const { db } = require('./db')
const PORT = process.env.PORT || 3001
const app = require('./app')
//const seed = require('../script/seed');

const init = () => {
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
}

init()
