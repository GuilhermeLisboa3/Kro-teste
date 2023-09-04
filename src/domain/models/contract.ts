export type ContractInput = {
  [key: string]: any
  nrInst: number
  nrAgencia: number
  cdClient: number
  nmClient: string
  nrCpfCnpj: number
  nrContrato: number
  dtContrato: number
  qtPrestacoes: number
  vlTotal: number
  cdProduto: number
  dsProduto: string
  cdCarteira: number
  dsCarteira: string
  nrProposta: number
  nrPresta: number
  tpPresta: string
  nrSeqPre: number
  dtVctPre: number
  vlPresta: number
  vlMora: number
  vlMulta: number
  vlOutAcr: number
  vlIof: number
  vlDescon: number
  vlAtual: number
  idSituac: string
  idSitVen: string
}

export type ContractOutput = {
  [key: string]: any
  nrInst: number
  nrAgencia: number
  cdClient: number
  nmClient: string
  nrCpfCnpj: number
  nrContrato: number
  dtContrato: number
  qtPrestacoes: number
  vlTotal: string | number
  cdProduto: number
  dsProduto: string
  cdCarteira: number
  dsCarteira: string
  nrProposta: number
  nrPresta: number
  tpPresta: string
  nrSeqPre: number
  dtVctPre: number
  vlPresta: string | number
  vlMora: string | number
  vlMulta: string | number
  vlOutAcr: string | number
  vlIof: string | number
  vlDescon: string | number
  vlAtual: string | number
  idSituac: string
  idSitVen: string
}
