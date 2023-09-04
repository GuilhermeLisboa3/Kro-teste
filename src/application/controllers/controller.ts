import { type HttpResponse } from '../helpers'

export interface Controller {
  handle: () => Promise<HttpResponse>
}
