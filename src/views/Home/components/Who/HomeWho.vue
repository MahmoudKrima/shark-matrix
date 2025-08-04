<template>
  <div class="who_card flex-center flex-col pb-[50px] pt-[30px] md:pt-[50px]">
    <h6 class="text-center who_title">{{ data.title }}</h6>
    <h2 class="who_sub_title">
      {{ data.sub_title }}
    </h2>
    <p class="who_paragraph">
      {{ data.description }}
    </p>
    <div class="flex-center flex-row gap-2 md:gap-8 mt-3">
      <s-button label="Get A Free Quote" style-class="idea_btn" />
      <s-button label="About Us" style-class="who_btn" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: Object,
  required: true,
})
</script>
<style scoped>
.who_card {
  max-width: 75%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.who_title {
  text-transform: uppercase;
  font-size: 50px;
  color: rgb(46, 145, 207);
}
.who_sub_title {
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 700;
  letter-spacing: -0.27px;
  line-height: 45px;
  text-align: center;
}
.who_paragraph {
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #3c3c3c;
  letter-spacing: -0.27px;
  line-height: 25px;
  margin-bottom: 16px;
}
@media (max-width: 639px) {
  .who_card {
    max-width: 100%;
  }
  .who_title {
    font-size: 30px;
  }
  .who_sub_title {
    font-size: 22px;
    line-height: 30px;
  }
}
</style>
