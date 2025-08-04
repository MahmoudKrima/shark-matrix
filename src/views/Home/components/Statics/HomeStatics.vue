<script setup>
import HomeAvatar from './HomeAvatar.vue'
import { useStaticsStore } from '@/stores/statics.store'
import { onMounted } from 'vue'

const staticStore = useStaticsStore()
onMounted(() => {
  staticStore.getStaticsList()
})
</script>
<template>
  <div class="header-background py-[50px]">
    <div class="container flex-center md:flex-row flex-col statics">
      <div class="m-0 md:w-1/3 button_wraaper">
        <div class="mb-3">
          <h2 class="statics_title mb-[30px]">{{ staticStore.staticsData.title }}</h2>
          <h4 class="statics_sub_title mb-[30px]">{{ staticStore.staticsData.sub_title }}</h4>
          <div class="mb-3">
            <p class="statics_p">
              {{ staticStore.staticsData.description }}
            </p>
          </div>
        </div>
        <s-button label="Get In Touch" style-class="statics_btn" />
      </div>
      <home-avatar :items="staticStore.staticsData.items" />
    </div>
  </div>
</template>

<style scoped>
.statics_title {
  color: #fff;
  margin-bottom: 10px;
  letter-spacing: 0.8px;
  font-size: 40px;
  text-transform: capitalize;
}
.statics_sub_title {
  font-size: 25px;
  color: #16223a;
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: bold !important;
}
.statics_p {
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}
@media (max-width: 639px) {
  .statics_title {
    text-align: center;
  }
  .button_wraaper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .statics_sub_title {
    text-align: center;
  }
  .statics_p {
    text-align: center;
  }
}
</style>
