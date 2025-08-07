import ApiClient from '@/helpers/api.helper'

class ContactAPI extends ApiClient {
  constructor() {
    super('contact')
  }
}

export default new ContactAPI()
