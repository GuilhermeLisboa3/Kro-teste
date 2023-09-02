import { type ReadCsvFile, type CpfValidator, type CnpjValidator, type ConvertReal } from '@/domain/contracts/gateways'
import { type Contract } from '@/domain/models'

type Setup = (fileCsv: ReadCsvFile<Contract[]>, validator: CpfValidator & CnpjValidator, convert: ConvertReal) => GetDataCsv
type Output = void
export type GetDataCsv = () => Promise<Output>

export const getDataCsvUseCase: Setup = (fileCsv, validator, convert) => async () => {
  const contracts = await fileCsv.readFile()
  contracts.map(async (contract: Contract) => {
    Object.keys(contract)
      .map(async (key) => {
        if (key.startsWith('vl')) {
          const value = contract[key as keyof typeof contract] as number
          await convert.real({ value })
        }
      })
    if (contract.nrCpfCnpj.toString().length === 11) {
      await validator.cpfValidator({ cpf: contract.nrCpfCnpj })
    } else {
      await validator.cnpjValidator({ cnpj: contract.nrCpfCnpj })
    }
  })
}
