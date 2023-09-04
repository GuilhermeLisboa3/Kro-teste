import { type GetDataCsv, getDataCsvUseCase } from '@/domain/use-cases'
import { makeConvertAdapter, makeReadCsvFileAdapter, makeValidatorAdapter } from '@/main/factories/infra'

export const makeGetDataCsv = (): GetDataCsv =>
  getDataCsvUseCase(makeReadCsvFileAdapter(), makeValidatorAdapter(), makeConvertAdapter())
