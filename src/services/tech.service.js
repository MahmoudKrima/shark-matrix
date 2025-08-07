import ApiClient from '@/helpers/api.helper'

class TechAPI extends ApiClient {
  constructor() {
    super('tech')
  }
}

export default new TechAPI()
