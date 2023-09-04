import { type ConvertReal } from '@/domain/contracts/gateways'
export class ConvertAdapter implements ConvertReal {
  async real ({ value }: ConvertReal.Input): Promise<ConvertReal.Output> {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }
}
