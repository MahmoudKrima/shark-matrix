<template>
  <div class="container">
    <div class="card">
      <Tabs value="0">
        <TabList class="w-full grid grid-cols-7">
          <Tab
            v-for="item in techStore.techData"
            :key="item.id"
            :value="item.id"
            class="tach_tab_list w-full text-center"
          >
            {{ item.title }}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel v-for="item in techStore.techData" :key="item.id" :value="item.id">
            <div class="flex-center flex-wrap m-4 w-full gap-4">
              <div
                v-for="tab in item.items"
                :key="tab.id"
                :style="{ width: `${100 / Math.min(item.items.length, 6)}%` }"
                class="text-center min-w-[100px] max-w-[200px] flex-grow"
              >
                <img :src="tab.image" alt="icon" class="w-[60px] object-fit mx-auto mb-2" />
                <p class="m-0 nav_p">{{ tab.title }}</p>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import { useTechStore } from '@/stores/tech.store'
import { onMounted } from 'vue'

const techStore = useTechStore()
onMounted(() => {
  techStore.getTechList()
})
</script>

<style scoped>
.p-tab,
.nav_p {
  color: black;
  background-color: white !important;
}
.p-tab-active {
  background-color: white !important;
  border-bottom: 3px solid #2e91cf !important;
}
.p-tabpanels {
  background-color: white;
}
</style>
