import { ConvertAdapter } from '@/infra/gateways'

describe('ConvertAdapter', () => {
  let sut: ConvertAdapter

  beforeEach(() => {
    sut = new ConvertAdapter()
  })

  describe('real', () => {
    const formatMock: jest.Mock = jest.fn()
    const value = 300

    beforeAll(() => {
      jest.spyOn(Intl, 'NumberFormat').mockImplementation(jest.fn().mockImplementation(() => ({
        format: formatMock.mockReturnValue('R$ 300,00')
      })))
    })
    it('should call NumberFormat with correct values', async () => {
      const formatRealSpy = jest.spyOn(Intl, 'NumberFormat').mockImplementationOnce(jest.fn().mockImplementationOnce(() => ({
        format: formatMock
      })))

      await sut.real({ value })

      expect(formatRealSpy).toHaveBeenCalledWith('pt-BR', { style: 'currency', currency: 'BRL' })
      expect(formatMock).toHaveBeenCalledWith(300)
      expect(formatMock).toHaveBeenCalledTimes(1)
      expect(formatRealSpy).toHaveBeenCalledTimes(1)
    })

    it('should call return numberf format correct', async () => {
      const result = await sut.real({ value })

      expect(result).toEqual('R$ 300,00')
    })
  })

  describe('date', () => {
    const value = 20240320
    it('should return data formart pt-br', async () => {
      const result = await sut.date({ value })
      expect(result).toEqual('20/03/2024')
    })
  })
})
