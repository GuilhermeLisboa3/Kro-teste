import { type ReadCsvFile, type CpfValidator, type CnpjValidator, type ConvertReal, type ConvertDate } from '@/domain/contracts/gateways'
import { type Contract } from '@/domain/models'

type Setup = (fileCsv: ReadCsvFile<Contract[]>, validator: CpfValidator & CnpjValidator, convert: ConvertReal & ConvertDate) => GetDataCsv
type Output = void
export type GetDataCsv = () => Promise<Output>

export const getDataCsvUseCase: Setup = (fileCsv, validator, convert) => async () => {
  const contracts = await fileCsv.readFile()
  contracts.forEach(async (contract) => {
    Object.keys(contract)
      .forEach(async (key) => {
        if (key.startsWith('vl')) {
          const value = contract[key]
          contract[key] = await convert.real({ value })
        }
        if (key.startsWith('dt')) {
          const value = contract[key]
          await convert.date({ value })
        }
      })
    if (contract.nrCpfCnpj.toString().length === 11) {
      await validator.cpfValidator({ cpf: contract.nrCpfCnpj })
    } else {
      await validator.cnpjValidator({ cnpj: contract.nrCpfCnpj })
    }
  })
}
