<template>
  <label for="name2">{{ label }}</label>
  <InputText
    :placeholder="placeholder"
    class="contact_input"
    id="name2"
    type="text"
    v-model="value"
  />
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
})
</script>
<style scoped>
.contact_input {
  padding: 10px 0px;
  background: #fff;
  border-width: 0;
  box-shadow: none;
  border-bottom: 1px solid #dbdbdb;
  font-size: 25px;
  letter-spacing: -0.015em;
  margin: 0;
}

.contact_input::placeholder {
  color: #757575;
  font-size: 16px;
}
</style>
