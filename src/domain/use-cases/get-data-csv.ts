import { type ReadCsvFile, type CpfValidator, type CnpjValidator } from '@/domain/contracts/gateways'
import { type Contract } from '@/domain/models'

type Setup = (fileCsv: ReadCsvFile<Contract[]>, validator: CpfValidator & CnpjValidator) => GetDataCsv
type Output = void
export type GetDataCsv = () => Promise<Output>

export const getDataCsvUseCase: Setup = (fileCsv, validator) => async () => {
  const contracts = await fileCsv.readFile()
  contracts.map(async contract => {
    if (contract.nrCpfCnpj.toString().length === 11) {
      await validator.cpfValidator({ cpf: contract.nrCpfCnpj })
    } else {
      await validator.cnpjValidator({ cnpj: contract.nrCpfCnpj })
    }
  })
}
