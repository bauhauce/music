function randomNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle (arr) {
  arr.forEach(function (item, index) {
    const randomIndex = randomNum(0, arr.length - 1)
    arr[index] = arr[randomIndex]
    arr[randomIndex] = item
  })
  return arr
}
