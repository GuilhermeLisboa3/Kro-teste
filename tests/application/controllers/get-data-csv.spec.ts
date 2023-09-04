import { GetDataCsvController } from '@/application/controllers'

describe('GetDataCsvController', () => {
  let sut: GetDataCsvController
  const getDataCsv = jest.fn()

  beforeEach(() => {
    sut = new GetDataCsvController(getDataCsv)
  })

  it('should call getDataCsv', async () => {
    await sut.handle()

    expect(getDataCsv).toHaveBeenCalled()
    expect(getDataCsv).toHaveBeenCalledTimes(1)
  })
})
