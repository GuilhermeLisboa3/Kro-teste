import { type CpfValidator, type CnpjValidator } from '@/domain/contracts/gateways'

import { cpf, cnpj } from 'cpf-cnpj-validator'

export class ValidatorAdapter implements CpfValidator, CnpjValidator {
  async cpfValidator (input: CpfValidator.Input): Promise<CpfValidator.Output> {
    return cpf.isValid(input.cpf.toString())
  }

  async cnpjValidator (input: CnpjValidator.Input): Promise<CnpjValidator.Output> {
    return cnpj.isValid(input.cnpj.toString())
  }
}
