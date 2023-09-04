import { type GetDataCsv } from '@/domain/use-cases'
import { ok, serverError } from '../helpers'
import { type Controller } from './controller'

export class GetDataCsvController implements Controller {
  constructor (private readonly getDataCsv: GetDataCsv) { }

  async handle (): Promise<any> {
    try {
      const result = await this.getDataCsv()
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
