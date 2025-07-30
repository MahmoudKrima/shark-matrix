<template>
  <div
    class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8 pt-[15px] md:pt-[50px] place-items-center pb-[20px] md:pb-[45px]"
  >
    <div v-for="item in 4" :key="item" class="who_card mb-[40px]">
      <img class="who_card_img" src="../../icons/portfoliomockup2-1.png" alt="" />
      <div class="card_description">
        <span class="who_span">Web Development </span>
        <div class="flex justify-between">
          <div>
            <h5 class="who_card_title">Asset Integrity Engineering</h5>
            <p>AIE is a leading provider of asset integrity services</p>
          </div>
          <div class="flex justify-center item-center">
            <img src="../../icons/assetintegrity-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.who_card {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.who_card_img {
  height: auto;
  max-width: 100%;
  border-radius: 35px;
}
.card_description {
  padding: 0 25px 20px;
  position: relative;
  bottom: -15px;
  width: 85%;
  height: 165px;
  background: #ffffff;
  box-shadow: 1px 2px 6px 2px #00000087;
  border-radius: 28px;
  left: 0;
  right: 0;
  margin: -104px auto 0;
}
.who_span {
  background: #2e91cf;
  position: relative;
  bottom: 18px;
  padding: 4px 25px;
  display: block;
  width: fit-content;
  margin: auto;
  color: white;
  border-radius: 50px;
  font-size: 16px;
}
.who_card_title {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 20px !important;
}
</style>
