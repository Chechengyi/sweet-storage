import { getLocalInfo, recordName } from './storage_info'
import { createMinHeapByLocalInfo } from './minHeap'
import { save, remove, clear, get } from './storage'
import observer from './observers'
import session from './session'

/**
 * 初始化storage  检查localStorage中存储的localInfo如果有时间过期的先直接删掉
 * 注意： 在初始化阶段字段过期删除并不会触发订阅事件
 *       在使用时建议将此库优先引入项目   项目逻辑待storage初始化完成后再进行
 */
function init() {
  if (!window.localStorage) {
    throw new Error('浏览器版本不支持 localStorage')
  }
  let localInfo = getLocalInfo()
  const nowTime = new Date().getTime()

  Object.keys(localInfo).forEach(item => {
    if (localInfo[item] <= nowTime) {
      localStorage.removeItem(item)
      delete localInfo[item]
    }
  })
  localStorage.setItem(recordName, JSON.stringify(localInfo))
  createMinHeapByLocalInfo(localInfo)
}
init()

const Storage = {
  get,
  save,
  remove,
  clear,
  session: {
    get: session.get,
    save: session.save,
    remove: session.remove,
    clear: session.clear
  },
  on: observer.subscribe.bind(observer),
  off: observer.unsubscribe.bind(observer)
}

export default Storage
