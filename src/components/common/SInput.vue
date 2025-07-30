<template>
  <InputText class="input-text" type="text" v-model="value" />
</template>

<script setup></script>
<style scoped>
.input-text {
  background: transparent !important;
  padding: 19px 12px;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: -0.015em;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  border: 1px solid #ced4da;
  height: 40px;
}
.input-text::placeholder {
  color: white;
  opacity: 1;
  font-size: 14px;
}
.input-text:hover,
.input-text:focus {
  border: 1.5px solid white;
}
</style>
