export class Song {
  constructor (id, singer, name, image) {
    this.id = id
    this.singer = singer
    this.name = name
    this.image = image
    this.url = undefined
  }
}

export function arrayToString (arr, prop) {
  const ret = []
  arr.forEach(item => {
    ret.push(item[prop])
  })
  return ret.join(',')
}

export function createList (arr) {
  const ret = []
  arr.forEach((item, index) => {
    ret.push(new Song(item.id, arrayToString(item.ar, 'name'), item.name, item.al.picUrl))
  })
  return ret
}
