import { expressRouterAdapter as adapt } from '@/main/adapters'
import { makeGetDataCsvController } from '@/main/factories/application'

import { type Router } from 'express'

export default (router: Router): void => {
  router.get('/filecsv', adapt(makeGetDataCsvController()))
}
