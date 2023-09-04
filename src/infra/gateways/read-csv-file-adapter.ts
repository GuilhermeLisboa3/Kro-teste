import { createReadStream } from 'fs'
import csv from 'csv-parser'

export class ReadCsvFileAdapter {
  async readFile (): Promise<any> {
    createReadStream('data.csv')
      .pipe(csv())
  }
}
