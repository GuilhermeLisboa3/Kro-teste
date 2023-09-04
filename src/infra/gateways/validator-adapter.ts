import { type CpfValidator, type CnpjValidator } from '@/domain/contracts/gateways'

import { cpf, cnpj } from 'cpf-cnpj-validator'

export class ValidatorAdapter implements CpfValidator {
  async cpfValidator (input: CpfValidator.Input): Promise<CpfValidator.Output> {
    return cpf.isValid(input.cpf.toString())
  }

  async cnpjValidator (input: CnpjValidator.Input): Promise<any> {
    cnpj.isValid(input.cnpj.toString())
  }
}
