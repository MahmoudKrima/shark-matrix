<template>
  <div class="container">
    <div class="card">
      <Tabs value="0">
        <TabList class="w-full grid grid-cols-7">
          <Tab
            v-for="tab in tabs"
            :key="tab.value"
            :value="tab.value"
            class="tach_tab_list w-full text-center"
          >
            {{ tab.title }}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel v-for="tab in tabs" :key="tab.value" :value="tab.value">
            <div class="flex flex-wrap justify-center items-center m-4 w-full gap-4">
              <div
                v-for="(section, index) in tab.contents"
                :key="index"
                :style="{ width: `${100 / Math.min(tab.contents.length, 6)}%` }"
                class="text-center min-w-[100px] max-w-[200px] flex-grow"
              >
                <img :src="section.img" alt="icon" class="w-[60px] object-fit mx-auto mb-2" />
                <p class="m-0">{{ section.text }}</p>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ref([
  {
    title: 'Tab 1',
    contents: [
      { text: 'Tab 1 - Section A', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section B', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section C', img: 'src/views/Home/icons/ios.png' },
    ],
    value: '0',
  },
  {
    title: 'Tab 2',
    contents: [
      { text: 'Tab 1 - Section A', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section B', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section C', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section A', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section B', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section C', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section B', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section C', img: 'src/views/Home/icons/ios.png' },
    ],
    value: '1',
  },
  {
    title: 'Tab 3',
    contents: [
      { text: 'Tab 1 - Section A', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section B', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section C', img: 'src/views/Home/icons/ios.png' },
    ],
    value: '2',
  },
  {
    title: 'Tab 1',
    contents: [
      { text: 'Tab 1 - Section A', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section B', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section C', img: 'src/views/Home/icons/ios.png' },
    ],
    value: '3',
  },
  {
    title: 'Tab 2',
    contents: [
      { text: 'Tab 1 - Section A', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section B', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section C', img: 'src/views/Home/icons/ios.png' },
    ],
    value: '4',
  },
  {
    title: 'Tab 3',
    contents: [
      { text: 'Tab 1 - Section A', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section B', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section C', img: 'src/views/Home/icons/ios.png' },
    ],
    value: '5',
  },
  {
    title: 'Tab 1',
    contents: [
      { text: 'Tab 1 - Section A', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section B', img: 'src/views/Home/icons/ios.png' },
      { text: 'Tab 1 - Section C', img: 'src/views/Home/icons/ios.png' },
    ],
    value: '6',
  },
])
</script>

<style scoped>
.p-tab {
  color: black;
}
.p-tab-active {
  color: black;
  border-bottom: 3px solid #2e91cf !important;
}
</style>
