import ideaService from '@/services/idea.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useIdeaStore = defineStore('idea', () => {
  const ideaData = ref({})
  const uiFlags = ref({
    loading: false,
    creating: false,
    updating: false,
    deleting: false,
    showing: false,
  })

  const idea = computed(() => ideaData.value)
  const isLoading = computed(() => uiFlags.value.loading)

  const getIdeaList = async () => {
    try {
      uiFlags.value.loading = true
      const { data } = await ideaService.get()
      ideaData.value = data.data.service
    } catch (error) {
      return error
    } finally {
      uiFlags.value.loading = false
    }
  }

  return {
    ideaData,
    idea,
    uiFlags,
    isLoading,
    getIdeaList,
  }
})
