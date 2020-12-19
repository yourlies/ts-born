import fs from 'fs'
import path from 'path'
import { rootPath } from '../config/path'

/**
 * @param name 文件目录
 */
const pages = (name: string) => {
  return fs.readdirSync(path.join(rootPath, '/pages/', name))
}

export { pages }
