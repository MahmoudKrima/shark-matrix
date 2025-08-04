<script setup>
import HomeIndustriesCard from './HomeIndustriesCard.vue'
import { useIndustryStore } from '@/stores/industry.store'
import { onMounted } from 'vue'

const industryStore = useIndustryStore()
onMounted(() => {
  industryStore.getIndustryList()
})
</script>
<template>
  <div class="py-[50px]">
    <div class="container flex-center md:items-start md:flex-row gap-2 flex-col p-[20px]">
      <div class="m-0 md:w-1/3">
        <div class="mb-3">
          <h6 class="industries_title">{{ industryStore.industryData.title }}</h6>
          <h4 class="industries_sub_title mb-[30px]">
            {{ industryStore.industryData.sub_title }}
          </h4>
          <div class="mb-3">
            <p class="industries_p">
              {{ industryStore.industryData.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="m-0 md:w-2/3">
        <home-industries-card :data="industryStore.industryData.items" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.industries_title {
  font-size: 18px;
  color: #2e91cf;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 27px;
  text-transform: uppercase;
}

.industries_sub_title {
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 20px;
}

.industries_p {
  font-weight: 400;
  font-size: 16px;
  color: #3c3c3c;
}

@media (max-width: 639px) {
  .industries_title {
    text-align: center;
  }

  .industries_sub_title {
    text-align: center;
  }

  .industries_p {
    text-align: center;
  }
}
</style>
