import { createMinHeapByLocalInfo, insert } from './minHeap'

export const recordName = 'ISTORAGE_RECORD'


/**
 * 获取localStorage中存储的localInfo对象并转换为javascript对象
 * @return Object  localInfo
 */
export function getLocalInfo() {
  let localInfo = localStorage.getItem(recordName)
  if (!localInfo) {
    localInfo = {}
  } else {
    localInfo = JSON.parse(localInfo)
  }
  return localInfo
}

/**
 * 将需要定时存储的时间信息存储到localInfo中, 并且localInfo改变后更新优先队列
 * @param {key} String 键 
 * @param {time} Number 保存的时间 毫秒数
 */
export function addLocalInfo(key, time) {
  let overdueTime = new Date().getTime() + time    // 到期的时间
  let localInfo = getLocalInfo()
  if (localInfo[key] === undefined) {
    localInfo[key] = overdueTime
    localStorage.setItem(recordName, JSON.stringify(localInfo))
    insert({
      key,
      time
    })
  } else {
    localInfo[key] = overdueTime
    localStorage.setItem(recordName, JSON.stringify(localInfo))
    createMinHeapByLocalInfo(localInfo)
  }
  // localInfo[key] = overdueTime
  // localStorage.setItem(recordName, JSON.stringify(localInfo))
  // createMinHeapByLocalInfo(localInfo)
} 


/**
 * 
 * @param {key} String key
 */
export function deleteLocalInfo(key){
  let localInfo = getLocalInfo()
  if ( localInfo[key] !== undefined ) {
    delete localInfo[key]
    localStorage.setItem(recordName, JSON.stringify(localInfo))
    createMinHeapByLocalInfo(localInfo)
  }
}