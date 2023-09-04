import { type CpfValidator } from '@/domain/contracts/gateways'

import { cpf } from 'cpf-cnpj-validator'

export class ValidatorAdapter implements CpfValidator {
  async cpfValidator (input: CpfValidator.Input): Promise<CpfValidator.Output> {
    return cpf.isValid(input.cpf.toString())
  }
}
