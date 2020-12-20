import { view } from './view'

const response = () => {
  const text = view('index.html')
  return text
}

export { response }
