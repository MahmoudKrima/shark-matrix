<script setup>
import HomeWho from './HomeWho.vue'
import WhoStatics from './WhoStatics.vue'
import WhoWork from './WhoWork.vue'
import { useWhoStore } from '@/stores/who.store'
import { onMounted, provide, computed } from 'vue'

const whoStore = useWhoStore()
onMounted(() => {
  whoStore.getWhoList()
})
const works = computed(() => whoStore.whoData.works)
provide('whoWorks', works)
</script>
<template>
  <div class="container">
    <HomeWho :data="whoStore.whoData" />
    <WhoStatics :data="whoStore.whoData.items" />
    <WhoWork />
  </div>
</template>

<style scoped></style>
