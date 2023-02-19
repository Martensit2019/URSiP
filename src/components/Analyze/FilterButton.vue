<script setup>
const props = defineProps({
  button: {
    type: Object,
    default: () => { }
  },
  filterSelected: {
    type: String,
    default: 'all'
  }
})
const emit = defineEmits(['changeFilter'])
</script>

<template>
  <div :class="['filter-btn', { 'selected': button.filterName === filterSelected }]" @click="emit('changeFilter', button.filterName)">
    <svg :width="button.width" :height="button.height" :viewBox="button.viewBox" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path :d=button.d />
    </svg>
    <div class="filter-btn__texts">
      <div class="filter-btn__top">{{ button.label }}</div>
      <div class="filter-btn__bottom">{{ button.description }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.filter-btn {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    fill: #78909C;
  }

  &.selected {
    background-color: #e5efff;

    svg {
      fill: var(--blue);
    }
  }

  &:hover {
    background-color: #e5efff;

    svg {
      fill: var(--blue);
    }
  }

  &__texts {
    margin-left: 16px;
  }

  &__top {
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 0.44px;

    color: rgba(0, 0, 0, 0.87);
  }

  &__bottom {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #5E6366;
  }
}
</style>


