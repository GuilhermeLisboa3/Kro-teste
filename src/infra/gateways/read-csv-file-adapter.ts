import { createReadStream } from 'fs'
import csv from 'csv-parser'

export class ReadCsvFileAdapter {
  async readFile (): Promise<any> {
    const results: any[] = []
    createReadStream('data.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {})
    return results
  }
}
