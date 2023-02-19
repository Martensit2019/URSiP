<script setup>
const props = defineProps({
  names: {
    type: Array,
    required: true,
  },
  activeTab: {
    type: String,
    required: false,
  },
})
const emit = defineEmits(['changeTab'])

const clickOnTab = (tabName) => {
  emit('changeTab', tabName)
}
</script>

<template>
  <div class="tab-nav">
    <div v-for="tab in names" :class="['tab-nav__item', { active: tab.name === activeTab }]" :key="tab.name"
      @click="clickOnTab(tab.name)">
      {{ tab.label }}
    </div>
  </div>
  <div class="tab-content">
    <slot />
  </div>
</template>

<style lang="scss">
.tab-nav {
  height: 56px;
  display: flex;
  padding-left: 375px;
  border-bottom: 2px dashed #e3e4e5;

  &__item {
    padding: 20px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.44px;
    color: #5e6366;

    &.active {
      border: 1px solid #c6cacc;
      border-radius: 4px 4px 0px 0px;
      border-bottom: 1px solid #fff;
      color: rgba(0, 0, 0, 0.87);
      position: relative;
      &::before {
        position: absolute;
        content: '';
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
      }
    }
  }
}

.tab-content {
  min-height: 450px;
  background-color: #e2f0f0;
}
</style>
