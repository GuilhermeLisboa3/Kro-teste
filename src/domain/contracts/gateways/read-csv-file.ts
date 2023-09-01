export interface ReadCsvFile<T = any> {
  readFile: () => Promise<T>
}
