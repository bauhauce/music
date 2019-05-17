import * as types from './mutation-types'

const mutations = {
  [types.SET_PLAYING] (state, flag) {
    state.playing = flag
  },
  [types.SET_FULLSCREEN] (state, flag) {
    state.fullscreen = flag
  },
  [types.SET_PLAYLIST] (state, list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST] (state, list) {
    state.sequenceList = list
  },
  [types.SET_MODE] (state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_SEARCH_HISTORY] (state, item) {
    if (state.searchHistory.indexOf(item) === -1) {
      state.searchHistory.push(item)
    }
  },
  [types.DELETE_SEARCH_HISTORY] (state, index) {
    state.searchHistory.splice(index, 1)
  },
  [types.CLEAR_SEARCH_HISTORY] (state) {
    state.searchHistory = []
  }
}

export default mutations
