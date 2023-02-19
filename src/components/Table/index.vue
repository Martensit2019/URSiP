<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const ptops = defineProps({
  head: {
    type: Array,
    required: false,
  },
})
const sortDrection = computed(()=>{
  return store.state.sortDrection
})
const sortedColumn = computed(()=>{
  return store.state.sortedColumn
})

</script>

<template>
  <div class="table-wrapper">
    <div class="table">
      <div class="table-head">
        <div v-for="el in head" class="table-head__name" :key="el" @click="$event=>store.dispatch('changeSort', el)">
          <div v-if="el.toLowerCase() === sortedColumn" class="sort-direction">
            <div class="sort-direction__item">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.59 2.83L7.76 6L9.17 4.59L4.59 0L0 4.59L1.42 6L4.59 2.83Z"
                  :fill="sortDrection === 'asc' ? '#C6CACC' : '#069697'" />
              </svg>
            </div>
            <div class="sort-direction__item">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.42001 0L4.59001 3.17L7.76001 0L9.18001 1.41L4.59001 6L0.0100098 1.41L1.42001 0Z"
                  :fill="sortDrection !== 'asc' ? '#C6CACC' : '#069697'" />
              </svg>
            </div>
          </div>
          <div> {{ el }}</div>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.table {
  width: 100%;

  &-wrapper {
    display: flex;
    justify-content: center;
  }

  &-head {
    display: grid;
    grid-template-columns: 330px repeat(5, 1fr);
    gap: 30px;
    align-items: center;
    border-bottom: 1px solid #e3e5e5;

    &__name {
      display: flex;
      align-items: center;
      font-family: 'Quicksand', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.44px;
      color: #919699;
      cursor: pointer;
      &:first-child {
        justify-content: start;
      }
    }
  }
}

.sort-direction {
  margin-right: 13px;
}
</style>
