<template>
  <div class="who_card flex justify-center item-center flex-col pb-[50px] pt-[30px] md:pt-[50px]">
    <h6 class="text-center who_title">Who We Are</h6>
    <h2 class="who_sub_title">
      We will help your brand reach the right people with creative content on the most suitable
      platform at the perfect time.
    </h2>
    <p class="who_paragraph">
      Shark Matrix is digital marketing agency & web development company in Dubai who can convert
      your idea into reality. We’re based in Dubai and help businesses to connect with a global
      audience. With our unique web design, web development, app development & digital marketing
      services, we help our clients achieve new heights by accumulating powerful leads and sales.
      We’re also spreading our wings through the Internet of Things (IoT) and cloud-based services.
      Call +971 4 507 2057 to have a coffee and discuss your idea.
    </p>
    <div class="flex justify-center item-center flex-row gap-2 md:gap-8 mt-3">
      <s-button label="Get A Free Quote" style-class="idea_btn" />
      <s-button label="About Us" style-class="who_btn" />
    </div>
  </div>
</template>
<script setup></script>
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
