<template>
  <div class="table-row">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.table-row {
  display: grid;
  grid-template-columns: 330px repeat(5, 1fr);
  gap: 30px;
  padding: 25px 0;
  border-top: 1px solid #e3e5e5;
  &:last-child{
    border-top: none;
    padding: 0;
  }
}
</style>
