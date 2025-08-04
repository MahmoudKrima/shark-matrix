import ApiClient from '@/helpers/api.helper'

class StaticsAPI extends ApiClient {
  constructor() {
    super('insights')
  }
}

export default new StaticsAPI()
