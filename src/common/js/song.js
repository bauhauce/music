export class Song {
  constructor (id, singer, name, image, albumName) {
    this.id = id
    this.singer = singer
    this.name = name
    this.image = image
    this.albumName = albumName
  }
}

export function arrayToString (arr, prop) {
  const ret = []
  if (!arr) {
    return
  }
  arr.forEach(item => {
    ret.push(item[prop])
  })
  return ret.join(',')
}

export function createList (arr) {
  const ret = []
  arr.forEach((item, index) => {
    ret.push(new Song(item.id, arrayToString(item.ar, 'name'), item.name, item.al.picUrl, item.al.name))
  })
  return ret
}

export function createSearchList (arr) {
  const ret = []
  arr.forEach((item, index) => {
    ret.push(new Song(item.id, arrayToString(item.artists, 'name'), item.name, null, item.album.name))
  })
  return ret
}
