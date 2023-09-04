import { type ConvertDate, type ConvertReal } from '@/domain/contracts/gateways'
import { ConvertAdapter } from '@/infra/gateways'

export const makeConvertAdapter = (): ConvertDate & ConvertReal =>
  new ConvertAdapter()
