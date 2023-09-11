import { type ReadCsvFile, type CpfValidator, type CnpjValidator, type ConvertReal, type ConvertDate } from '@/domain/contracts/gateways'
import { type ContractInput } from '@/domain/models'

type Setup = (fileCsv: ReadCsvFile<ContractInput[]>, validator: CpfValidator & CnpjValidator, convert: ConvertReal & ConvertDate) => GetDataCsv
type Output = any
export type GetDataCsv = () => Promise<Output>

export const getDataCsvUseCase: Setup = (fileCsv, validator, convert) => async () => {
  const contracts = await fileCsv.readFile()
  const listContracts: any[] = []
  contracts.map(async (contract) => {
    let isValid = false
    if (contract.nrCpfCnpj.toString().length === 11) {
      isValid = await validator.cpfValidator({ cpf: contract.nrCpfCnpj })
    } else if (contract.nrCpfCnpj.toString().length === 14) {
      isValid = await validator.cnpjValidator({ cnpj: contract.nrCpfCnpj })
    }
    if (isValid) {
      const isValidProvision = contract.vlTotal / contract.qtPrestacoes
      if (isValidProvision !== contract.vlPresta) contract.vlPresta = isValidProvision
      Object.keys(contract)
        .map(async (key) => {
          if (key.startsWith('vl')) {
            const value = contract[key]
            contract[key] = await convert.real({ value })
          }
          if (key.startsWith('dt')) {
            const value = contract[key]
            contract[key] = await convert.date({ value })
          }
        })
      listContracts.push(contract)
    }
  })
  return listContracts
}
