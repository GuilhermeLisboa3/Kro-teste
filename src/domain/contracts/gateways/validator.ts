export interface CpfValidator {
  cpfValidator: (input: CpfValidator.Input) => Promise<CpfValidator.Output>
}

export namespace CpfValidator {
  export type Input = { cpf: number }
  export type Output = boolean
}

export interface CnpjValidator {
  cnpjValidator: (input: CnpjValidator.Input) => Promise<CnpjValidator.Output>
}

export namespace CnpjValidator {
  export type Input = { cnpj: number }
  export type Output = boolean
}
