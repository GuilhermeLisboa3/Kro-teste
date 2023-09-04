import { type ConvertReal, type ConvertDate } from '@/domain/contracts/gateways'
export class ConvertAdapter implements ConvertReal {
  async real ({ value }: ConvertReal.Input): Promise<ConvertReal.Output> {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  async date ({ value }: ConvertDate.Input): Promise<ConvertDate.Output> {
    const year = value.toString().slice(0, 4)
    const month = value.toString().slice(4, 6)
    const day = value.toString().slice(6, 8)
    const date = new Date(`${year}-${month}-${day}`)
    return date.toLocaleDateString('pt-br', { timeZone: 'UTC' })
  }
}
