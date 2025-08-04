import whoService from '@/services/who.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useWhoStore = defineStore('who', () => {
  const whoData = ref({})
  const uiFlags = ref({
    loading: false,
    creating: false,
    updating: false,
    deleting: false,
    showing: false,
  })

  const who = computed(() => whoData.value)
  const isLoading = computed(() => uiFlags.value.loading)

  const getWhoList = async () => {
    try {
      uiFlags.value.loading = true
      const { data } = await whoService.get()
      whoData.value = data.data.who
    } catch (error) {
      return error
    } finally {
      uiFlags.value.loading = false
    }
  }

  return {
    whoData,
    who,
    uiFlags,
    isLoading,
    getWhoList,
  }
})
