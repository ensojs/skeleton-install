import { Container } from 'inversify'
import { interfaces } from 'inversify-koa'
import { TYPE } from '@ensojs/framework'
import { IndexController } from '../IndexController'

export const container = new Container()

// controllers
container.bind<interfaces.Controller>(TYPE.Controller).to(IndexController).whenTargetNamed('IndexController')
