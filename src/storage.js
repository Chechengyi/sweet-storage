import { addLocalInfo, deleteLocalInfo } from './storage_info'
import { clearHeap } from './minHeap'
import observer from './observers'

/**
 * 
 * @param {key} 键
 * @param {value} 值 
 * @param {time} 存储时间，毫秒数 如果不传则认为永久存储  time不允许为0
 */
export function save(key, value, time, fn){
  if ( time===0 ) return
  if ( time ) {
    addLocalInfo(key, time)
  }
  // 只有设置了过期时间的操作才有订阅删除信息的资格
  if ( fn ) {
    observer.subscribe(key, fn)
  }
  localStorage.setItem(key, value)
}

/**
 * 删除storage中的某一项
 * @param {key} String 键 
 */
export function remove(key){
  deleteLocalInfo(key)
  localStorage.removeItem(key)
}

// 清除localStorage
export function clear(){
  clearHeap()
  localStorage.clear()
}