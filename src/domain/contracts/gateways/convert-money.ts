export interface ConvertReal {
  real: (input: ConvertReal.Input) => Promise<ConvertReal.Output>
}

export namespace ConvertReal {
  export type Input = { value: number }
  export type Output = { money: number }
}
