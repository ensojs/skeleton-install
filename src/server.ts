import 'reflect-metadata'

import { App } from './App'
import { env } from './config/env'
import { container } from './config/container'

const debug = require('debug')('server')

const server = async () => {
  try {
    debug('============================================')
    debug('> Starting server...')
    debug('============================================')

    const app = new App(env)
    await app.build(container)
    await app.start()

    debug('')
    debug('✔ [nodejs] %s', process.version)
    debug('')
    debug(
      '✔ API server listening on port %d in [%s] mode',
      env.PORT,
      env.ENVIRONMENT
    )
  } catch (e) {
    debug(e)
    process.exit(1)
  }
}

// start
server()

