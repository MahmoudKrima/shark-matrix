import staticsService from '@/services/statics.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useStaticsStore = defineStore('statics', () => {
  const staticsData = ref({})
  const uiFlags = ref({
    loading: false,
    creating: false,
    updating: false,
    deleting: false,
    showing: false,
  })

  const statics = computed(() => staticsData.value)
  const isLoading = computed(() => uiFlags.value.loading)

  const getStaticsList = async () => {
    try {
      uiFlags.value.loading = true
      const { data } = await staticsService.get()
      staticsData.value = data.data.insights
    } catch (error) {
      return error
    } finally {
      uiFlags.value.loading = false
    }
  }

  return {
    staticsData,
    statics,
    uiFlags,
    isLoading,
    getStaticsList,
  }
})
