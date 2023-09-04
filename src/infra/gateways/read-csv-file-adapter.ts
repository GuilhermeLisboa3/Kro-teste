import { type ReadCsvFile } from '@/domain/contracts/gateways'

import { createReadStream } from 'fs'
import csv from 'csv-parser'

export class ReadCsvFileAdapter implements ReadCsvFile {
  async readFile (): Promise<any> {
    const results: any[] = []
    createReadStream('./data/data.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {})
    return results
  }
}
