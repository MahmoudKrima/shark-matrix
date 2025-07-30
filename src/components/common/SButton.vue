<template>
  <Button :label="label" :class="styleClass">
    <slot />
  </Button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  styleClass: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<style scoped>
.home_btn {
  background: #fff;
  color: #2e91cf;
  border-radius: 5px;
  text-align: center;
  border: none !important;
  font-size: 1.1rem !important;
  font-weight: 700;
}
.home_btn:hover {
  background: #2e91cf;
  color: #fff;
  border: none !important;
}

.idea_btn {
  background: #2e91cf;
  color: #fff;
  border: 1px solid #2e91cf !important;
  text-align: center;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px !important;
  font-weight: 400 !important;
}
.idea_btn:hover {
  background: #fff;
  color: #2e91cf;
}

.statics_btn {
  background: #ffffff;
  border-radius: 8px;
  padding: 12px 24px;
  color: #2e91cf;
  text-decoration: none;
  margin-right: 20px;
  border: 2px solid #fff;
  font-size: 14px;
}

.statics_btn:hover {
  background: #2e91cf;
  color: #fff;
  border: 2px solid #2e91cf;
}

.who_btn {
  background: white;
  color: #2e91cf;
  border: 2px solid #2e91cf !important;
  text-align: center;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px !important;
  font-weight: 400 !important;
}

.who_btn:hover {
  background: #2e91cf;
  color: white;
}

@media (max-width: 639px) {
  .idea_btn {
    margin-bottom: 20px;
  }
  .statics_btn {
    width: 50%;
    border: 2px solid #2e91cf;
    background: white;
  }
  .who_btn {
    margin-bottom: 20px;
  }
}
</style>
