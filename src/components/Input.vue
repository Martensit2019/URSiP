<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '100%',
  },
})

const emit = defineEmits(['update:model-value'])
</script>

<template>
  <div class="input-wrapper">
    <input
      class="input-text"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="($event) => emit('update:model-value', $event.target.value)"
    />
  </div>
</template>

<style lang="scss">
.input-wrapper {
  width: 100%;
}
.input-text {
  width: 100%;
  height: 32px;
  border: 1px solid #c6cacc;
  border-radius: 10px;
  padding: 0 12px;
  background-color: transparent;
}
</style>
