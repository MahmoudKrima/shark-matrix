<template>
  <div>
    <h3 class="item">
      Your Growth, Our Mission – Digital Marketing to Mobile Apps, We Build Your Success Online
    </h3>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
      <s-input class="md:col-span-2" placeholder="Enter Your Website*" v-model="website" />
      <s-input placeholder="Enter Your Name*" v-model="name" />
      <s-input placeholder="Enter Your Email*" v-model="email" />
      <s-input placeholder="Enter Your Phone*" v-model="phone" />
      <s-button style-class="home_btn" label="Get A Quote" />
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.item {
  font-size: 28px !important;
  line-height: 40px;
  max-width: 540px;
  font-weight: 700;
  font-size: 44px;
  color: #fff;
  letter-spacing: 0.8px;
  font-family: Sora, sans-serif;
}
.card {
  box-sizing: border-box;
}

@media (max-width: 639px) {
  .item {
    text-align: center;
    font-size: 25px !important;
  }
}
</style>
