import { type CnpjValidator, type CpfValidator } from '@/domain/contracts/gateways'
import { ValidatorAdapter } from '@/infra/gateways'

export const makeValidatorAdapter = (): CpfValidator & CnpjValidator =>
  new ValidatorAdapter()
