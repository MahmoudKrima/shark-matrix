import techService from '@/services/tech.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTechStore = defineStore('tech', () => {
  const techData = ref({})
  const uiFlags = ref({
    loading: false,
    creating: false,
    updating: false,
    deleting: false,
    showing: false,
  })

  const tech = computed(() => techData.value)
  const isLoading = computed(() => uiFlags.value.loading)

  const getTechList = async () => {
    try {
      uiFlags.value.loading = true
      const { data } = await techService.get()
      techData.value = data.data.tech
    } catch (error) {
      return error
    } finally {
      uiFlags.value.loading = false
    }
  }

  return {
    techData,
    tech,
    uiFlags,
    isLoading,
    getTechList,
  }
})
