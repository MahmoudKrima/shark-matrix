<template>
  <div class="container">
    <div
      class="flex flex-col md:flex-row items-center justify-center pt-[30px] sm:pt-[50px] md:pt-[110px] md:pb-[70px]"
    >
      <div class="px-[20px] md:w-1/3 button_wraaper">
        <div class="mb-3">
          <h2 class="idea_title mb-[30px]">From idea to launch, we’re with you every step!</h2>
        </div>
        <s-button label="Our Services" style-class="idea_btn" />
      </div>
      <div class="flex flex-wrap idea_card w-full md:w-2/3">
        <div class="w-1/2 sm:w-1/2">
          <s-idea-card />
        </div>
        <div class="w-1/2 sm:w-1/2">
          <s-idea-card />
        </div>
        <div class="w-1/2 sm:w-1/2">
          <s-idea-card />
        </div>
        <div class="w-1/2 sm:w-1/2">
          <s-idea-card />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.idea {
  max-width: 1140px;
}
.idea_title {
  font-size: 28px;
  font-weight: 700;
  max-width: 340px;
  font-family: Sora, sans-serif;
}
@media (max-width: 639px) {
  .idea_title {
    text-align: center;
  }
  .button_wraaper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
