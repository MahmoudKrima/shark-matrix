<script setup>
import NewsInput from './NewsInput.vue'
</script>
<template>
  <div class="news_background py-[50px]">
    <div class="container">
      <div class="flex-center flex-col text-center w-full">
        <h4 class="news_title mx-[25px] mb-7">We’re just One mail away</h4>
        <p class="news_p max-w-[700px]">
          Get a Free 30-Minute Consultation with Our Experienced Technical Team for Your Business!
        </p>
        <news-input />
      </div>
    </div>
  </div>
</template>

<style scoped>
.news_background {
  background-image: url('../../icons/calltoaction.png');
  background-size: cover;
  background-position: center;
}
.news_title {
  font-size: 40px;
  line-height: 1.2;
  margin-top: 0px;
  color: #fff;
  font-weight: 700;
}
.news_p {
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0px;
}
@media (max-width: 639px) {
}
</style>
