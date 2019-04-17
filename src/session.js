
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
  save,
  remove,
  clear
}