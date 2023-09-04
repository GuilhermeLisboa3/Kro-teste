import { type ConvertReal } from '@/domain/contracts/gateways'
export class ConvertAdapter {
  async real ({ value }: ConvertReal.Input): Promise<any> {
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }
}
