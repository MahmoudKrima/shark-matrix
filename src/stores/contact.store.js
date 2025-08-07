import contactService from '@/services/contact.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useContactStore = defineStore('contact', () => {
  const contactData = ref({})
  const uiFlags = ref({
    loading: false,
    creating: false,
    updating: false,
    deleting: false,
    showing: false,
  })

  const contact = computed(() => contactData.value)
  const isLoading = computed(() => uiFlags.value.loading)

  const getContactList = async () => {
    try {
      uiFlags.value.loading = true
      const { data } = await contactService.get()
      contactData.value = data.data.contact
    } catch (error) {
      return error
    } finally {
      uiFlags.value.loading = false
    }
  }

  const contactForm = async (data) => {
    try {
      uiFlags.value.creating = true
      const response = await contactService.form('contact/form', data)
      return response
    } catch (error) {
      return error
    } finally {
      uiFlags.value.creating = false
    }
  }

  return {
    contactData,
    contact,
    uiFlags,
    isLoading,
    getContactList,
    contactForm,
  }
})
