import ApiClient from '@/helpers/api.helper'

class WhoAPI extends ApiClient {
  constructor() {
    super('who')
  }
}

export default new WhoAPI()
