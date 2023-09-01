import { type ReadCsvFile } from '@/domain/contracts/gateways'

type Setup = (fileCsv: ReadCsvFile) => GetDataCsv
type Output = void
export type GetDataCsv = () => Promise<Output>

export const getDataCsvUseCase: Setup = (fileCsv) => async () => {
  await fileCsv.readFile()
}
