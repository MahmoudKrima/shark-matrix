<script setup>
import { useIdeaStore } from '@/stores/idea.store'
import { onMounted } from 'vue'

const ideaStore = useIdeaStore()
onMounted(() => {
  ideaStore.getIdeaList()
})
</script>

<template>
  <div class="container">
    <div class="flex-center flex-col md:flex-row pt-[30px] sm:pt-[50px] md:pt-[80px] md:pb-[70px]">
      <div class="px-[20px] md:w-1/3 button_wraaper">
        <div class="mb-3">
          <h2 class="idea_title mb-[30px]">{{ ideaStore.ideaData.title }}</h2>
        </div>
        <s-button label="Our Services" style-class="idea_btn" />
      </div>
      <div class="flex flex-wrap idea_card w-full md:w-2/3">
        <div v-for="item in ideaStore.ideaData.items" :key="item.id" class="w-1/2 sm:w-1/2">
          <s-idea-card
            :sub_title="item.sub_title"
            :image="item.image"
            :description="item.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.idea {
  max-width: 1140px;
}
.idea_title {
  font-size: 28px;
  font-weight: 700;
  max-width: 340px;
  font-family: Sora, sans-serif;
}
@media (max-width: 639px) {
  .idea_title {
    text-align: center;
  }
  .button_wraaper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
