<template>
  <div
    class="flex items-center md:flex-row flex-col justify-evenly mt-[20px] md:mt-[30px] md:mb-[20px] px-[10px] md:w-2/3 md:ml-[80px]"
  >
    <div class="flex flex-col items-center md:items-start w-full md:w-1/3">
      <Avatar label="200%" class="avatar mb-2" size="xlarge" shape="circle" />
      <p class="avatar_paragraph">Increase in Traffic</p>
    </div>
    <div class="flex flex-col items-center md:items-start w-full md:w-1/3">
      <Avatar label="120%" class="avatar mb-2" size="xlarge" shape="circle" />
      <p class="avatar_paragraph">Increase in Inquiry</p>
    </div>
    <div class="flex flex-col items-center md:items-start w-full md:w-1/3">
      <Avatar label="25+" class="special_avatar mb-2" size="xlarge" shape="circle" />
      <p class="avatar_paragraph">Page # 1 Result on Google UAE</p>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.avatar {
  position: relative;
  width: 130px !important;
  height: 130px !important;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.27);
  left: -21px;
  bottom: -38px;
  text-align: center;
  color: white;
  font-weight: 700;
}

.special_avatar {
  position: relative;
  width: 130px !important;
  height: 130px !important;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.27);
  left: -21px;
  bottom: -38px;
  text-align: center;
  color: white;
  font-weight: 700;
}

.avatar::before {
  content: '';
  position: absolute;
  right: -24px;
  height: 70%;
  width: 6px;
  top: 20%;
  background: #cecece;
  border-radius: 30px;
}

.avatar_paragraph {
  font-size: 20px !important;
  font-weight: 600;
  margin: 40px 0 25px -5px !important;
  color: rgba(255, 255, 255, 0.7);
  text-align: left;
  width: 70%;
  word-wrap: break-word !important;
  line-height: 1.4;
}

.avatar_paragraph:hover {
  color: white;
}

@media (max-width: 639px) {
  .avatar {
    position: relative;
    width: 130px !important;
    height: 130px !important;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.27);
    bottom: -38px;
    text-align: center;
    color: white;
    font-weight: 700;
  }
  .avatar::before {
    content: none !important;
    display: none !important;
  }
}
</style>
