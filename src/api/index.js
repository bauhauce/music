import axios from 'axios'
import { url } from './config'

export function getBanner () {
  return axios.get(`${url}/banner?type=2`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getRecommend () {
  return axios.get(`${url}/top/playlist?limit=9&order=new`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getListDetail (id) {
  return axios.get(`${url}/playlist/detail?id=${id}`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSongDetail (id) {
  return axios.get(`${url}/song/detail?ids=${id}`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSongUrl (id) {
  return axios.get(`${url}/song/url?id=${id}`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getLyric (id) {
  return axios.get(`${url}/lyric?id=${id}`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSearchHot () {
  return axios.get(`${url}/search/hot`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSearch (keyword) {
  return axios.get(`${url}/search?keywords=${keyword}`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getTopList () {
  return axios.get(`${url}/toplist/detail`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSinger () {
  return axios.get(`${url}/toplist/artist`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSingerDetail (id) {
  return axios.get(`${url}/artists?id=${id}`).then(res => {
    return Promise.resolve(res.data)
  })
}
