import { type ReadCsvFile } from '@/domain/contracts/gateways'
import { ReadCsvFileAdapter } from '@/infra/gateways'

export const makeReadCsvFileAdapter = (): ReadCsvFile & ReadCsvFile =>
  new ReadCsvFileAdapter()
