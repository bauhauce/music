import axios from 'axios'

export function getBanner () {
  return axios.get('http://localhost:3000/banner?type=2').then(res => {
    return Promise.resolve(res.data)
  })
}

export function getRecommend () {
  return axios.get('http://localhost:3000/top/playlist?limit=20&order=new').then(res => {
    return Promise.resolve(res.data)
  })
}

export function getListDetail (id) {
  return axios.get(`http://localhost:3000/playlist/detail?id=${id}`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSongDetail (id) {
  return axios.get(`http://localhost:3000/song/detail?ids=${id}`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSongUrl (id) {
  return axios.get(`http://localhost:3000/song/url?id=${id}`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getLyric (id) {
  return axios.get(`http://localhost:3000/lyric?id=${id}`).then(res => {
    return Promise.resolve(res.data)
  })
}
