# i-storage
给localStorage整合了过期时间的功能

## 简介
localStorage是浏览器提供给我们的原生api， 目前localStorage只能实现永久存储。 
本工具给localStorage整合了设置过期时间的功能， 并让用户可以在存储信息过期的时候去“订阅”到此信息。
此外，本工具也整合了 sessionStorage的存储操作


## 如何使用

###  npm 下载
  ```
  npm install sweet-storage
  ```
  
  ```javascript
    import storage from 'sweet-storage'
    storage.save('name', 'storage', 3000)
    storage.on('name', (key)=> {
      console.log(key + '过期了被删除了')
    })
  ```

###  直接引入
  ```javascript
    <script src='./storage/release/storage.js'></script>
    storage.save('name', 'storage', 3000)
    storage.on('name', (key)=>{
      console.log(key + '过期了被删除了')
    })
  ```


## API
  #### 存储到localStorage中的 api

  - storage.save(key, value, time)  // 存储到localStorage中
    - key: 存储的键
    - value: 存储的值
    - time: 存储的时间， 毫秒数  time不允许为0  
  
  - storage.remove(key)     // 删除localStorage中指定键
    - key: 需要被删除的键

  - storage.clear()         // 清楚localStorage

  - storage.on(key, fn)     // 订阅某一个键的到期信息
    - key: 被订阅的键，
    - fn: 回调函数， key作为参数传入fn中

  - storage.off(key)       // 取消订阅某一个键的到期信息
    -key: 被订阅的键



  #### 存储到sessionStorage中的api

  - storage.session.save(key, value)
    - key: 存储的键
    - value: 存储的值

  - storage.session.remove(key)
    - key: 存储的键

  - storage.session.clear()
    - 清空sessionStorage