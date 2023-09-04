import { ConvertAdapter } from '@/infra/gateways'

describe('ConvertAdapter', () => {
  let sut: ConvertAdapter

  beforeEach(() => {
    sut = new ConvertAdapter()
  })

  describe('real', () => {
    const value = 300
    it('should call NumberFormat with correct values', async () => {
      const formatMock = jest.fn()
      const formatRealSpy = jest.spyOn(Intl, 'NumberFormat').mockImplementationOnce(jest.fn().mockImplementationOnce(() => ({
        format: formatMock
      })))

      await sut.real({ value })

      expect(formatRealSpy).toHaveBeenCalledWith('pt-BR', { style: 'currency', currency: 'BRL' })
      expect(formatMock).toHaveBeenCalledWith(300)
      expect(formatMock).toHaveBeenCalledTimes(1)
      expect(formatRealSpy).toHaveBeenCalledTimes(1)
    })
  })
})
