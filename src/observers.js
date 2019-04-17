
let observer = {}

observer.list = {}


observer.subscribe = function(key, fn) {
  if ( !this.list[key] ) {
    this.list[key] = []
  }
  this.list[key].push(fn)
}


observer.trriger = function(key){
  let fns = this.list[key]
  if ( !fns ) return 
  let args = [].slice.call(arguments, 1)
  for( let i=0; i<fns.length; i++ ){
    fns[i](...args)
  }
}

observer.unsubscribe = function(key, fn){

  if ( fn===true ) {
    this.list[key] = null
    return
  }

  let fns = this.list[key]
  if ( !fns ) return
  // fns = fns.filter( item=> {
  //   return item !== fn
  // })
  this.list[key] = fns.filter( item=> {
    return item !== fn
  })
}


export default observer


