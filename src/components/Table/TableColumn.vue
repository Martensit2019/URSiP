<template>
  <div class="table-column">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.table-column {
  text-align: end;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: #5E6366;
  &:first-child {
    text-align: start;
  }
}
</style>
