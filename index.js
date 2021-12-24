const fastify = require('fastify')()
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'web'),
  prefix: '/', // optional: default '/'
})

fastify.listen(3000, (err, address) => {
  if (err) throw err
  console.log('listen in ',3000)
})