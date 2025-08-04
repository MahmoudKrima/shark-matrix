<template>
  <div class="header-background min-h-[700px] pb-[40px]">
    <div class="container">
      <div class="flex-center md:flex-row flex-col gap-5">
        <div class="mt-[50px] md:mt-[140px] md:mb-[50px] md:order-0 order-1 w-full">
          <div>
            <home-form
              :header-title="headersStore.headerData?.title || ''"
            />
          </div>
        </div>
        <div class="mt-[80px] md:mt-[140px] md:mb-[50px] md:order-1 order-0 w-full">
          <div>
            <img v-if="currentImage" class="hero-img" :src="currentImage" alt="Slideshow image" />
            <div v-else-if="headersStore.isLoading">Loading images...</div>
            <div v-else>No images available</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeForm from './HomeForm.vue'
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useHeadersStore } from '@/stores/headers.store'

const headersStore = useHeadersStore()
const currentImage = ref(null)
const currentIndex = ref(0)
let intervalId = null

const images = computed(() => {
  return headersStore.headerData?.images || []
})

watch(
  images,
  (newImages) => {
    if (newImages.length > 0) {
      currentImage.value = newImages[0].image
      startSlideshow()
    } else {
      currentImage.value = null
      clearSlideshow()
    }
  },
  { immediate: true },
)

onMounted(() => {
  headersStore.getHeaderList()
})

function startSlideshow() {
  clearSlideshow()
  intervalId = setInterval(() => {
    if (images.value.length > 0) {
      currentIndex.value = (currentIndex.value + 1) % images.value.length
      currentImage.value = images.value[currentIndex.value].image
    }
  }, 5000)
}

function clearSlideshow() {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onBeforeUnmount(() => {
  clearSlideshow()
})

</script>

<style scoped>
.hero-img {
  transition: opacity 0.5s ease;
}
</style>
