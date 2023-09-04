import { GetDataCsvController } from '@/application/controllers'
import { makeGetDataCsv } from '@/main/factories/domain/use-cases'

export const makeGetDataCsvController = (): GetDataCsvController =>
  new GetDataCsvController(makeGetDataCsv())
