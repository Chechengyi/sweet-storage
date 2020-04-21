# sweet-storage

给 `localStorage` 整合了过期时间的功能

`localStorage` 是浏览器提供给我们的原生api， 目前 `localStorage` 只能实现永久存储。 
本工具给localStorage整合了设置过期时间的功能， 并让用户可以在存储信息过期的时候去“订阅”到此信息。
此外，本工具也整合了 `sessionStorage` 的存储操作


## 如何使用

###  npm 下载

```bash
$ npm install sweet-storage
```
  
```javascript
import storage from 'sweet-storage'
storage.save('name', 'storage', 3000)
storage.on('name', key => {
  console.warn(`${key} deleted`)
})
```

###  直接引入

```javascript
<script src='./storage/release/storage.js'></script>
storage.save('name', 'storage', 3000)
storage.on('name', (key)=>{
  console.warn(`${key} deleted`)
})
```


## API

### localStorage

### get

根据key获取localStorage中的信息

```js
storage.get(key)
```

* key: 保存的时候设置的key

#### save

存储到localStorage中

```js
storage.save(key, value, time)
```

* key: 存储的键
* value: 存储的值
* time: 过期时间(ms), 不传代表永久存储,  time不允许设为0

#### remove

删除localStorage中指定键

```js
storage.remove(key)
```

* key: 需要被删除的键

#### clear

清空localStorage

```js
storage.clear()
```

#### on

订阅某一个键的到期信息

```js
storage.on(key, fn)
```

* key: 被订阅的键
* fn: 回调函数(key => {})

#### off

取消订阅某一个键的到期信息

```js
storage.off(key, fn)
```

```js
storage.off(key, true)  // 传入true取消所有订阅此键的函数
```

* key: 被订阅的键
* fn:  取消的函数

### sessionStorage

### get

根据key获取sessionStorage中的信息

```js
storage.session.get(key)
```

* key: 保存的时候设置的key

#### save

存储

```js
storage.session.save(key, value)
```
* key: 存储的键
* value: 存储的值

#### remove

移除

```js
storage.session.remove(key)
```

* key: 需要被删除的键

#### clear

清空sessionStorage

```js
storage.session.clear()
```
