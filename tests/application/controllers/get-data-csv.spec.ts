import { GetDataCsvController } from '@/application/controllers'
import { ServerError } from '@/application/errors'

describe('GetDataCsvController', () => {
  let sut: GetDataCsvController
  const getDataCsv = jest.fn()

  beforeAll(() => {
    getDataCsv.mockResolvedValue([{ any: 'any' }])
  })

  beforeEach(() => {
    sut = new GetDataCsvController(getDataCsv)
  })

  it('should call getDataCsv', async () => {
    await sut.handle()

    expect(getDataCsv).toHaveBeenCalled()
    expect(getDataCsv).toHaveBeenCalledTimes(1)
  })

  it('should return serverError if getDataCsv return error', async () => {
    getDataCsv.mockRejectedValueOnce(new Error())
    const { statusCode, data } = await sut.handle()

    expect(statusCode).toBe(500)
    expect(data).toEqual(new ServerError())
  })

  it('should return ok on success', async () => {
    const { statusCode, data } = await sut.handle()

    expect(statusCode).toBe(200)
    expect(data).toEqual([{ any: 'any' }])
  })
})
