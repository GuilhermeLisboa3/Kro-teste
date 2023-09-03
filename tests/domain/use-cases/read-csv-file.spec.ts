import { contractParams } from '@/tests/mocks'
import { type ReadCsvFile, type CpfValidator, type CnpjValidator, type ConvertReal, type ConvertDate } from '@/domain/contracts/gateways'
import { type GetDataCsv, getDataCsvUseCase } from '@/domain/use-cases'

import { mock } from 'jest-mock-extended'

describe('GetDataCsv', () => {
  let sut: GetDataCsv
  const contract = contractParams
  const error = new Error('error')

  const fileCsv = mock<ReadCsvFile>()
  const validator = mock<CpfValidator & CnpjValidator>()
  const convert = mock<ConvertReal & ConvertDate>()

  beforeAll(() => {
    fileCsv.readFile.mockResolvedValue([contract])
    convert.real.mockResolvedValue(10)
  })

  beforeEach(() => {
    sut = getDataCsvUseCase(fileCsv, validator, convert)
  })

  it('should call ReadCsvFile', async () => {
    await sut()

    expect(fileCsv.readFile).toHaveBeenCalled()
    expect(fileCsv.readFile).toHaveBeenCalledTimes(1)
  })

  it('should rethrow if ReadCsvFile throws', async () => {
    fileCsv.readFile.mockRejectedValueOnce(error)

    const promise = sut()

    await expect(promise).rejects.toThrow(error)
  })

  it('should call CpfValidator with correct value', async () => {
    await sut()

    expect(validator.cpfValidator).toHaveBeenCalledWith({ cpf: contract.nrCpfCnpj })
    expect(validator.cpfValidator).toHaveBeenCalledTimes(1)
  })

  it('should call CnpjValidator with correct value', async () => {
    fileCsv.readFile.mockResolvedValueOnce([{ ...contract, nrCpfCnpj: 418542747613 }])

    await sut()

    expect(validator.cnpjValidator).toHaveBeenCalledWith({ cnpj: 418542747613 })
    expect(validator.cnpjValidator).toHaveBeenCalledTimes(1)
  })

  it('should call ConvertReal with correct value', async () => {
    await sut()

    expect(convert.real).toHaveBeenCalledTimes(8)
  })

  it('should call ConvertDate with correct value', async () => {
    await sut()

    expect(convert.date).toHaveBeenCalledTimes(2)
  })
})
