import { injectable } from 'inversify'
import { interfaces, controller, httpGet } from 'inversify-koa'
import Router from 'koa-router'

import pkg from '../package.json'

@injectable()
@controller('/')
export class IndexController implements interfaces.Controller {
  /**
   * GET /
   */
  @httpGet('')
  async getIndex (ctx: Router.IRouterContext) {
    ctx.status = 200
    ctx.body = {
      name: pkg.name,
      version: pkg.version,
      env: process.env.NODE_ENV,
      up: process.uptime(),
      message: 'ok'
    }
  }
}
