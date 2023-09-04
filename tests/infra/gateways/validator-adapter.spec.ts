import { ValidatorAdapter } from '@/infra/gateways'

import { cpf, cnpj } from 'cpf-cnpj-validator'

jest.mock('cpf-cnpj-validator')

describe('ValidatorAdapter', () => {
  let sut: ValidatorAdapter
  const fakeCpf = cpf as jest.Mocked<typeof cpf>
  const fakeCnpj = cnpj as jest.Mocked<typeof cnpj>

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

    it('should return false if cpf is not valid', async () => {
      fakeCpf.isValid.mockReturnValueOnce(false)

      const result = await sut.cpfValidator({ cpf })

      expect(result).toBeFalsy()
    })
  })

  describe('fakeCnpj', () => {
    const cnpj = 55093829810

    beforeAll(() => {
      fakeCnpj.isValid.mockReturnValue(true)
    })

    it('should call cnpj.isValid with correct values', async () => {
      await sut.cnpjValidator({ cnpj })

      expect(fakeCnpj.isValid).toHaveBeenCalledWith('55093829810')
      expect(fakeCnpj.isValid).toHaveBeenCalledTimes(1)
    })

    it('should return true if cnpj is valid', async () => {
      const result = await sut.cnpjValidator({ cnpj })

      expect(result).toBeTruthy()
    })
  })
})
