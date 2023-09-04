import { ReadCsvFileAdapter } from '@/infra/gateways'

import fs from 'fs'

jest.mock('fs')

describe('ReadCsvFileAdapter', () => {
  let sut: ReadCsvFileAdapter
  const fakeFs = fs as jest.Mocked<typeof fs>

  beforeEach(() => {
    sut = new ReadCsvFileAdapter()
  })

  it('should call createReadStream with correct values', async () => {
    await sut.readFile()

    expect(fakeFs.createReadStream).toHaveBeenCalledWith('data.csv')
    expect(fakeFs.createReadStream).toHaveBeenCalledTimes(1)
  })
})
