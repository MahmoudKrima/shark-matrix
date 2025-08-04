import ApiClient from '@/helpers/api.helper'

class IndustryAPI extends ApiClient {
  constructor() {
    super('industry')
  }
}

export default new IndustryAPI()
