import headerService from '@/services/headers.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useHeadersStore = defineStore('header', () => {
  const headerData = ref({})
  const uiFlags = ref({
    loading: false,
    creating: false,
    updating: false,
    deleting: false,
    showing: false,
  })

  const header = computed(() => headerData.value)
  const isLoading = computed(() => uiFlags.value.loading)

  const getHeaderList = async () => {
    try {
      uiFlags.value.loading = true
      const { data } = await headerService.get()
      headerData.value = data.data.main_section
    } catch (error) {
      return error
    } finally {
      uiFlags.value.loading = false
    }
  }

  const crateForm = async (data) => {
    try {
      uiFlags.value.creating = true
      const response = await headerService.form('store-quote', data)
      return response
    } catch (error) {
      return error
    } finally {
      uiFlags.value.creating = false
    }
  }

  return {
    headerData,
    header,
    uiFlags,
    isLoading,
    getHeaderList,
    crateForm,
  }
})
