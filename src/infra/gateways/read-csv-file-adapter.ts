import { type ReadCsvFile } from '@/domain/contracts/gateways'

import { createReadStream } from 'fs'
import path from 'path'
import csv from 'csv-parser'

export class ReadCsvFileAdapter implements ReadCsvFile {
  async readFile (): Promise<any> {
    const results: any[] = []
    const file = path.resolve(__dirname, './data/data.csv')
    const parser = createReadStream(file)
      .pipe(csv())
    for await (const record of parser) {
      results.push(record)
    }
    return results
  }
}
