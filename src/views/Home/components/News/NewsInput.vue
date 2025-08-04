<template>
  <div class="flex-center max-w-[800px] w-full mt-5">
    <div class="w-[320px] md:w-[500px]">
      <InputText
        type="text"
        placeholder="Enter your Mail address over here"
        class="news_input w-full"
        v-model="value"
      />
    </div>
    <div class="">
      <Button label="Enter" class="news_btn w-full" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.news_input {
  background: #fff;
  border-radius: 0;
  border-style: solid;
  border-width: 1.5px;
  box-shadow: none;
  font-size: 20px;
  letter-spacing: -0.015em;
  padding: 11.5px 25px;
}
.news_input:focus {
  border: 1.5px solid black;
}
.news_btn {
  background: #2e91cf;
  padding: 17px 22px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  border-radius: 0;
  border: none;
}

@media (max-width: 639px) {
  .news_input {
    font-size: 16px;
    padding: 11.5px 25px;
  }

  .news_btn {
    padding: 14px 22px;
  }
}
</style>
