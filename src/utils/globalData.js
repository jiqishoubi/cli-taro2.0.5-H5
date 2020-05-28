/**
 * 不经常修改的全局变量
 */
let globalData = {
  isProd: false,
}

export function set(key, val) {
  globalData[key] = val
}

export function get(key) {
  return globalData[key]
}