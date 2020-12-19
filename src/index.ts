import Koa, { Context } from 'koa'
import koaStatic from 'koa-static'
import path from 'path'
import bodyParser from 'koa-bodyparser'
import { response } from './modules'
import { route } from './router'
const app = new Koa()

const handler = (ctx: Context) => {
  ctx.body = response()
}

const { routes, allowedMethods } = route(handler)

app.use(bodyParser())
app.use(koaStatic(path.join(__dirname, 'pages')))
app.use(routes)
app.use(allowedMethods)
app.listen(3000)
