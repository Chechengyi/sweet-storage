function get(key) {
  return sessionStorage.getItem(key)
}

function save(key, value){
  sessionStorage.setItem(key, value)
}

function remove(key){
  sessionStorage.removeItem(key)
}

function clear(){
  sessionStorage.clear()
}

export default {
  get,
  save,
  remove,
  clear
}