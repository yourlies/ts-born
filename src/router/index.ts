import KoaRouter from 'koa-router'
import routes from '../config/routes'
import { pages } from '../utils/path'

const router = new KoaRouter()
const views = pages('views')
console.log(views)

const files: [string?] = []
const route = (handler: Function) => {
  files
    .filter((file) => file.endsWith('.html'))
    .forEach((file) => {
      router.get(`/${file}`, (ctx) => {
        handler(ctx)
      })
    })
  for (let [key, value] of Object.entries(routes)) {
    router.get(`/${key}`, (ctx) => {
      handler(ctx, value)
    })
  }
  return { routes: router.routes(), allowedMethods: router.allowedMethods() }
}

export { route }
