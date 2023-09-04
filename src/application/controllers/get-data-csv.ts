import { type GetDataCsv } from '@/domain/use-cases'
import { ok, serverError } from '../helpers'

export class GetDataCsvController {
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
