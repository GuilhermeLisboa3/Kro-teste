import { type GetDataCsv } from '@/domain/use-cases'

export class GetDataCsvController {
  constructor (private readonly getDataCsv: GetDataCsv) { }

  async handle (): Promise<any> {
    await this.getDataCsv()
  }
}
