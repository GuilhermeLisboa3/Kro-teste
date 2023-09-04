import { type GetDataCsv } from '@/domain/use-cases'
import { serverError } from '../helpers'

export class GetDataCsvController {
  constructor (private readonly getDataCsv: GetDataCsv) { }

  async handle (): Promise<any> {
    try {
      await this.getDataCsv()
    } catch (error) {
      return serverError(error)
    }
  }
}
