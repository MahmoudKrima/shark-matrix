import industryService from '@/services/industry.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useIndustryStore = defineStore('industry', () => {
  const industryData = ref({})
  const uiFlags = ref({
    loading: false,
    creating: false,
    updating: false,
    deleting: false,
    showing: false,
  })

  const industry = computed(() => industryData.value)
  const isLoading = computed(() => uiFlags.value.loading)

  const getIndustryList = async () => {
    try {
      uiFlags.value.loading = true
      const { data } = await industryService.get()
      industryData.value = data.data.industry
    } catch (error) {
      return error
    } finally {
      uiFlags.value.loading = false
    }
  }

  return {
    industryData,
    industry,
    uiFlags,
    isLoading,
    getIndustryList,
  }
})
