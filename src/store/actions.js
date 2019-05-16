import * as types from './mutation-types'
import { playMode } from './../common/js/config'
import { shuffle } from './../common/js/util'

export const selectPlay = function ({ commit, state }, { list, index }) {
  commit(types.SET_SEQUENCE_LIST, list)
  if (state.mode === playMode.random) {
    let randomList = list.slice()
    randomList = shuffle(randomList)
    index = randomList.findIndex(function (item) {
      return item.id === list[index].id
    })
    commit(types.SET_PLAYLIST, randomList)
  } else {
    commit(types.SET_PLAYLIST, list)
  }
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULLSCREEN, true)
  commit(types.SET_PLAYING, true)
}

export const operatePlay = function ({ commit, state }, index) {
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_PLAYING, true)
}
