import ApiClient from '@/helpers/api.helper'

class HeaderAPI extends ApiClient {
  constructor() {
    super('main-section')
  }
}

export default new HeaderAPI()
