<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import AnalyzeLeft from '@/components/Analyze/AnalyzeLeft.vue'
import Table from '@/components/Table/index.vue'
import TableRow from '@/components/Table/TableRow.vue'
import TableColumn from '@/components/Table/TableColumn.vue'
import Input from '@/components/Input.vue'

const store = useStore()
const tableHeads = ['Data', 'Summary1', 'Summary2', 'Summary3', 'Summary4', 'Summary5']

const analyzeData = computed(() => {
  return store.getters.sortedList
})

const setSearchData = (str) => {
  store.commit('SET_SEARCH_DATA', str)
}
</script>

<template>
  <div class="analyze">
    <AnalyzeLeft />
    <div class="analyze-right">
      <div class="analyze-right-header">
        <h1 class="analyze-right-header__title">Dashboard</h1>
        <div class="analyze-right-header__end">
          <div class="select">
            <select name="" id="">
              <option value="">Aug 21, 2021 · Sep 21 2021</option>
            </select>
            <div class="select__img">
              <img src="@/assets/images/select-arrow.svg" alt="">
            </div>
          </div>
          <div class="analyze-right-header__btn">
            <img src="@/assets/images/printer.svg" alt="">
          </div>
          <div class="analyze-right-header__btn">
            <img src="@/assets/images/download.svg" alt="">
          </div>
        </div>
      </div>
      <Table :head="tableHeads">
        <TableRow v-for="data in analyzeData" :key="data.data">
          <TableColumn>{{ data.data }}</TableColumn>
          <TableColumn>{{ data.summary1 }}</TableColumn>
          <TableColumn>{{ data.summary2 }}</TableColumn>
          <TableColumn>{{ data.summary3 }}</TableColumn>
          <TableColumn>{{ data.summary4 }}</TableColumn>
          <TableColumn>{{ data.summary5 }}</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn><Input :model-value="store.state.searchData" placeholder="Search..."
              @update:model-value="setSearchData" /></TableColumn>
          <TableColumn><Input /></TableColumn>
          <TableColumn><Input /></TableColumn>
          <TableColumn><Input /></TableColumn>
          <TableColumn><Input /></TableColumn>
          <TableColumn><Input /></TableColumn>
        </TableRow>
      </Table>
    </div>
  </div>
</template>

<style lang="scss">
.analyze {
  display: flex;
  align-items: center;
  justify-content: center;
}

.analyze-right {
  width: 100%;
  padding: 20px 120px 25px 25px;
}

.analyze-right-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  &__title {
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 42px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.87);
  }
  &__end {
    display: flex;
    height: 32px;
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-left: 8px;
    background: #F7F9FA;
    border-radius: 4px;
    cursor: pointer;
  }
}

.select {
  width: 225px;
  height: 32px;
  position: relative;
  &__img {
    position: absolute;
    top: 4px;
    right: 20px;
    width: 10px;
    height: 10px;
  }
}

select {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid #C6CACC;
  border-radius: 10px;
  padding: 0 32px 0 12px;
  -moz-appearance: none;
  -webkit-appearance: none;
}
</style>






