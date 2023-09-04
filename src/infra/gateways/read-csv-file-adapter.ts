import { createReadStream } from 'fs'

export class ReadCsvFileAdapter {
  async readFile (): Promise<any> {
    createReadStream('data.csv')
  }
}
