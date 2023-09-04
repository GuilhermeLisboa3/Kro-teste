import { ReadCsvFileAdapter } from '@/infra/gateways'

import fs from 'fs'
import csv from 'csv-parser'

jest.mock('fs')
jest.mock('csv-parser')

describe('ReadCsvFileAdapter', () => {
  let sut: ReadCsvFileAdapter
  const fakeFs = fs as jest.Mocked<typeof fs>
  const mReadStream = {
    pipe: jest.fn().mockReturnThis(),
    on: jest.fn().mockReturnThis()
  }

  beforeAll(() => {
    fakeFs.createReadStream.mockImplementation(jest.fn().mockImplementation(() => (mReadStream)))
  })

  beforeEach(() => {
    sut = new ReadCsvFileAdapter()
  })

  it('should call createReadStream with correct values', async () => {
    await sut.readFile()

    expect(fakeFs.createReadStream).toHaveBeenCalledWith('data.csv')
    expect(fakeFs.createReadStream).toHaveBeenCalledTimes(1)
  })

  it('should call csv-parse', async () => {
    await sut.readFile()

    expect(mReadStream.pipe).toHaveBeenCalledTimes(1)
    expect(csv).toHaveBeenCalledTimes(1)
  })

  it('should call on', async () => {
    await sut.readFile()

    expect(mReadStream.on).toBeCalledWith('data', expect.any(Function))
    expect(mReadStream.on).toBeCalledWith('end', expect.any(Function))
  })
})
