import newsService from '@/services/news.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useNewsStore = defineStore('news', () => {
  const uiFlags = ref({
    loading: false,
    creating: false,
    updating: false,
    deleting: false,
    showing: false,
  })

  const isLoading = computed(() => uiFlags.value.loading)

  const newsForm = async (data) => {
    try {
      uiFlags.value.creating = true
      const response = await newsService.create(data)
      return response
    } catch (error) {
      return error
    } finally {
      uiFlags.value.creating = false
    }
  }

  return {
    uiFlags,
    isLoading,
    newsForm,
  }
})
