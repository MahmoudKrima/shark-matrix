import ApiClient from '@/helpers/api.helper'

class IdeaAPI extends ApiClient {
  constructor() {
    super('service')
  }
}

export default new IdeaAPI()
