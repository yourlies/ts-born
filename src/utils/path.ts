import fs from 'fs'
import path from 'path'
import { rootPath } from '../config/path'

/**
 * @param name 文件目录
 */
const pages = (name: string) => {
  return fs.readdirSync(path.join(rootPath, '/pages/', name))
}
const page = (name: string, dir = 'views') => {
  return fs.readFileSync(path.join(rootPath, '/pages/', dir, '/', name), 'utf-8')
}

export { pages, page }
