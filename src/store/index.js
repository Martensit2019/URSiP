import { createStore } from 'vuex'

const store = createStore({
  state: () => ({
    searchData: '',
    sortedColumn: 'data',
    sortDrection: 'asc',
    filterSelected: 'all',
    data: [
      {
        data: 'Data1',
        summary1: 186,
        summary2: 186,
        summary3: 92,
        summary4: 8,
        summary5: 1,
      },
      {
        data: 'Data2',
        summary1: 95,
        summary2: 95,
        summary3: 31,
        summary4: 11,
        summary5: 0,
      },
      {
        data: 'Data3',
        summary1: 329,
        summary2: 329,
        summary3: 256,
        summary4: 32,
        summary5: 4,
      },
      {
        data: 'Data4',
        summary1: 804,
        summary2: 804,
        summary3: 697,
        summary4: 40,
        summary5: 22,
      },
    ],
  }),
  getters: {
    filteredList(state) {
      if (state.filterSelected === 'even') {
        return state.data.filter((item, idx) => idx % 2 !== 0)
      }
      if (state.filterSelected === 'odd') {
        return state.data.filter((item, idx) => idx % 2 === 0)
      }
      return state.data
    },
    searchList(state, getters) {
      return getters.filteredList.filter((item) => item.data.toLowerCase().indexOf(state.searchData.toLowerCase()) !== -1)
    },
    sortedList(state, getters) {
      if (state.sortDrection === 'asc') {
        return getters.searchList.sort((x, y) => (x[state.sortedColumn] < y[state.sortedColumn] ? -1 : 1))
      } else {
        return getters.searchList.sort((x, y) => (x[state.sortedColumn] > y[state.sortedColumn] ? -1 : 1))
      }
    },
  },
  mutations: {
    SET_SEARCH_DATA(state, payload) {
      state.searchData = payload
    },
    SET_SORTED_COLUMN(state, payload) {
      state.sortedColumn = payload
    },
    SET_SORT_DIRECTION(state, payload) {
      state.sortDrection = payload
    },
    SET_FILTER_SELECTED(state, payload) {
      state.filterSelected = payload
    },
  },
  actions: {
    changeSort({ state, commit }, data) {
      const currentColumn = data.toLowerCase()
      if (state.sortedColumn === currentColumn) {
        commit('SET_SORT_DIRECTION', state.sortDrection === 'asc' ? 'desc' : 'asc')
      } else {
        commit('SET_SORTED_COLUMN', currentColumn)
        commit('SET_SORT_DIRECTION', 'asc')
      }
    },
  },
})

export default store
