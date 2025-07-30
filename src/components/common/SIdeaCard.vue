<template>
  <div class="flex items-center card">
    <div>
      <img src="../../assets/img/digital-marketing-SM.png" alt="" class="card_img" />
    </div>
    <div class="card_info">
      <h5 class="card_title my-[5px]">Digital Marketing</h5>
      <a class="mt-4 more_text">
        View in Details
        <i class="pi pi-plus"></i>
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  border: 1px solid #f89b29;
  padding: 50px 38px;
}
.card_img {
  padding-right: 20px;
  width: 100px;
  height: 100px;
  object-fit: contain;
}
.card_title {
  font-size: 21px;
  font-weight: 700 !important;
}
.more_text {
  color: #444444;
  font-size: 14px;
  text-decoration: NONE;
  letter-spacing: -0.27px;
  line-height: 21px;
}
@media (max-width: 639px) {
  .card {
    height: 240px !important;
    margin: 10px !important;
    flex-direction: column;
    padding: 27px 15px;
    justify-content: center;
    align-items: center;
  }
  .card_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card_title {
    font-size: 18px;
    text-align: center;
  }
  .more_text {
    margin: 0px;
  }
}
</style>
