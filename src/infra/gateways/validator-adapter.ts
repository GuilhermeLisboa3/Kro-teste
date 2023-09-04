import { type CpfValidator } from '@/domain/contracts/gateways'

import { cpf } from 'cpf-cnpj-validator'

export class ValidatorAdapter {
  async cpfValidator (input: CpfValidator.Input): Promise<any> {
    cpf.isValid(input.cpf.toString())
  }
}
