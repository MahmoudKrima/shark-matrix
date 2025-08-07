<template>
  <div class="container w-full md:w-[45%] flex flex-start flex-col header-background p-[40px]">
    <span class="contact_span">Contact Us</span>
    <h2 class="contact_title">{{ data.title }}</h2>
    <p class="contact_p mb-[40px]">{{ data.sub_title }}</p>
    <img :src="data.image" class="w-full" alt="" />
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
  required: true,
})
</script>

<style scoped>
.contact_span,
.contact_p {
  font-size: 16px;
  color: white;
  font-weight: 400;
}

.contact_title {
  margin: 10px 0px;
  font-size: 32px;
  color: white;
  font-weight: 700;
}
</style>
