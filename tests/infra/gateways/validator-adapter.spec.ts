import { ValidatorAdapter } from '@/infra/gateways'

import { cpf } from 'cpf-cnpj-validator'

jest.mock('cpf-cnpj-validator')

describe('ValidatorAdapter', () => {
  let sut: ValidatorAdapter
  const fakeCpf = cpf as jest.Mocked<typeof cpf>

  beforeEach(() => {
    sut = new ValidatorAdapter()
  })

  describe('cpf', () => {
    const cpf = 55093829810

    beforeAll(() => {
      fakeCpf.isValid.mockReturnValue(true)
    })

    it('should call cpf.isValid with correct values', async () => {
      await sut.cpfValidator({ cpf })

      expect(fakeCpf.isValid).toHaveBeenCalledWith('55093829810')
      expect(fakeCpf.isValid).toHaveBeenCalledTimes(1)
    })

    it('should return true if cpf is valid', async () => {
      const result = await sut.cpfValidator({ cpf })

      expect(result).toBeTruthy()
    })
  })
})
