export interface ConvertReal {
  real: (input: ConvertReal.Input) => Promise<ConvertReal.Output>
}

export namespace ConvertReal {
  export type Input = { value: number }
  export type Output = string
}

export interface ConvertDate {
  date: (input: ConvertDate.Input) => Promise<ConvertDate.Output>
}

export namespace ConvertDate {
  export type Input = { value: number }
  export type Output = Date
}
