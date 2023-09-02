export interface CpfValidator {
  validate: (input: CpfValidator.Input) => Promise<CpfValidator.Output>
}

export namespace CpfValidator {
  export type Input = { cpf: number }
  export type Output = boolean
}
