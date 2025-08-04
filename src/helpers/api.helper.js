import axiosClient from './http.helper'

class ApiClient {
  constructor(resource, options = {}) {
    this.options = options
    this.resource = resource
  }

  get url() {
    return `${import.meta.env.VITE_BASE_API_URL}/${this.resource}`
  }
  get url_form() {
    return `${import.meta.env.VITE_BASE_API_URL}`
  }

  get(params = {}) {
    return axiosClient.get(this.url, { params })
  }

  show(id, params = {}) {
    return axiosClient.get(`${this.url}/${id}`, { params })
  }

  create(data) {
    return axiosClient.post(`${this.url}`, data)
  }

  update(id, data) {
    return axiosClient.put(`${this.url}/${id}`, data)
  }

  delete(id) {
    return axiosClient.delete(`${this.url}/${id}`)
  }

  form(param, data) {
    return axiosClient.post(`${this.url_form}/${param}`, data)
  }
}

export default ApiClient
