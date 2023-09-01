import { type ReadCsvFile } from '@/domain/contracts/gateways'
import { type GetDataCsv, getDataCsvUseCase } from '@/domain/use-cases'

import { mock } from 'jest-mock-extended'

describe('GetDataCsv', () => {
  let sut: GetDataCsv
  const error = new Error('error')

  const fileCsv = mock<ReadCsvFile>()

  beforeEach(() => {
    sut = getDataCsvUseCase(fileCsv)
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
})
