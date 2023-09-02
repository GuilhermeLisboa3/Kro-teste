import { type ReadCsvFile, type CpfValidator } from '@/domain/contracts/gateways'
import { type Contract } from '@/domain/models'

type Setup = (fileCsv: ReadCsvFile<Contract[]>, validator: CpfValidator) => GetDataCsv
type Output = void
export type GetDataCsv = () => Promise<Output>

export const getDataCsvUseCase: Setup = (fileCsv, validator) => async () => {
  const contracts = await fileCsv.readFile()
  contracts.map(async contract => {
    await validator.validate({ cpf: contract.nrCpfCnpj })
  })
}
