<template>
  <div class="grid grid-col-1 md:grid-cols-3 gap-4 items-center">
    <div v-for="item in data" :key="item.id" class="p-[25px] flex flex-col industries_card">
      <div class="item-start">
        <img class="industries_img mb-3" :src="item.image" alt="" />
      </div>
      <h5 class="industries_card_title mb-1">{{ item.title }}</h5>
      <p class="industries_card_p">
        {{ item.sub_title }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
  required: true,
})
</script>

<style scoped>
.industries_card {
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.29);
  height: 310px;
  margin: 0 0 25px;
}
.industries_img {
  max-width: 50%;
}
.industries_card_title {
  font-size: 18px;
}
.industries_card_p {
  font-size: 16px;
  font-weight: 400;
  color: rgb(60 60 60 / 92%);
  line-height: 1.5;
}

@media (max-width: 639px) {
  .industries_img {
    display: block;
    margin: 0 auto;
  }

  .industries_card_title {
    text-align: center;
  }

  .industries_card_p {
    text-align: center;
  }
}
</style>
