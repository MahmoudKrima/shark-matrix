import ApiClient from '@/helpers/api.helper'

class NewsAPI extends ApiClient {
  constructor() {
    super('store-newsletter')
  }
}

export default new NewsAPI()
