<template>
  <div class="flex flex-col items-center md:flex-row md:justify-between pt-[35px] md:pt-[50px]">
    <div class="mb-2 md:mb-0">
      <h2 class="work_title">Our Recent Work</h2>
    </div>
    <div>
      <s-button style-class="who_btn">
        <span class="flex items-center">
          <span>View Portfolio</span>
          <i class="pi pi-angle-right ml-2"></i>
        </span>
      </s-button>
    </div>
  </div>
  <div style="border-bottom: 2px solid #cccccc7a">
    <who-work-card />
  </div>
</template>
<script setup>
import WhoWorkCard from './WhoWorkCard.vue'
</script>
<style scoped>
.work_title {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-size: 40px;
  line-height: 1.2;
}

@media (max-width: 639px) {
  .work_title {
    font-size: 27px;
    text-align: center;
  }
}
</style>
