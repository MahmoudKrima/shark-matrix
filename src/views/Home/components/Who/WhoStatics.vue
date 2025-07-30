<template>
  <div class="flex justify-evenly item-center">
    <div class="static_card md:w-1/3">
      <h5 class="static_title">5+</h5>
      <p class="static_paragraph">Years in Business</p>
    </div>
    <div class="static_card md:w-1/3">
      <h5 class="static_title">250+</h5>
      <p class="static_paragraph">Projects Completed</p>
    </div>
    <div class="static_card md:w-1/3">
      <h5 class="static_title">20+</h5>
      <p class="static_paragraph">Industries Partner</p>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.static_card {
  border: 1px solid #2e91cf !important;
  padding: 50px;
  text-align: center;
  margin: 0 15px;
}
.static_title {
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  color: #2e91cf;
}
.static_paragraph {
  margin-bottom: 0;
  color: #3c3c3c;
  font-weight: 600;
  font-size: 20px;
}

@media (max-width: 639px) {
  .static_card {
    padding: 5px;
    text-align: center;
    margin: 5px;
  }
  .static_paragraph {
    padding-bottom: 10px;
    font-size: 15px;
  }
}
</style>
