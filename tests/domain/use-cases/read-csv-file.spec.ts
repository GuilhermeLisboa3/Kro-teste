import { contractParams } from '@/tests/mocks'
import { type ReadCsvFile, type CpfValidator } from '@/domain/contracts/gateways'
import { type GetDataCsv, getDataCsvUseCase } from '@/domain/use-cases'

import { mock } from 'jest-mock-extended'

describe('GetDataCsv', () => {
  let sut: GetDataCsv
  const contract = contractParams
  const error = new Error('error')

  const fileCsv = mock<ReadCsvFile>()
  const validator = mock<CpfValidator>()

  beforeAll(() => {
    fileCsv.readFile.mockResolvedValue([contract])
  })

  beforeEach(() => {
    sut = getDataCsvUseCase(fileCsv, validator)
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

    expect(validator.validate).toHaveBeenCalledWith({ cpf: contract.nrCpfCnpj })
    expect(validator.validate).toHaveBeenCalledTimes(1)
  })
})
