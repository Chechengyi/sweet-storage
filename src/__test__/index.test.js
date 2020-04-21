import './mock'

import storage from '../index'


test('storage存入数据', () => {
  storage.save('test1', 'test1');
  expect(storage.get('test1')).toBe('test1')
});

test('storage删除数据', () => {
  storage.save('test2', 'test2');
  storage.remove('test2');
  expect(storage.get('test2')).not.toBe('test2')
})

test('storage清除数据', () => {
  storage.save('test3', 'test3');
  storage.save('test4', 'test4');
  storage.clear();
  expect(storage.get('test3')).not.toBe('test3')
  expect(storage.get('test4')).not.toBe('test4')
})

test('storage存储数据设置过期时间', (done) => {
  storage.save('test5', 'test5', 1000) // 设置1s后过期
  setTimeout(function () {
    expect(storage.get('test5')).not.toBe('test5');
    done()
  }, 1100)
})

test('测试storage过期订阅', (done) => {
  storage.save('test6_key', 'test6', 1000) // 设置1s后过期
  storage.on('test6_key', function (key) {
    expect(key).toBe('test6_key');
    expect(storage.get('test6_key')).not.toBe('test6')
    done()
  })
})

test('storage多个函数订阅一个键的过期', (done) => {
  var mockFn1 = jest.fn();
  var mockFn2 = jest.fn();
  storage.save('test7_key', 'test7', 200) // 设置200ms后过期
  storage.on('test7_key', mockFn1)
  storage.on('test7_key', mockFn2)
  setTimeout(() => {
    expect(mockFn1).toBeCalledTimes(1)
    expect(mockFn2).toBeCalledTimes(1)
    done()
  }, 300)
})

test('测试取消storage过期订阅_off时指定函数，只取消指定的函数', (done) => {
  var mockFn1 = jest.fn();
  var mockFn2 = jest.fn();
  storage.save('test7_key', 'test7', 200) // 设置200ms后过期
  storage.on('test7_key', mockFn1)
  storage.on('test7_key', mockFn2)
  storage.off('test7_key', mockFn1)
  setTimeout(function () {
    expect(mockFn1).toBeCalledTimes(0);
    expect(mockFn2).toBeCalledTimes(1);
    done()
  }, 300)
})

test('测试取消storage过期订阅_off时指定函数，取消所有订阅该键的函数', (done) => {
  var mockFn1 = jest.fn();
  var mockFn2 = jest.fn();
  storage.save('test8_key', 'test8', 200)
  storage.on('test8_key', mockFn1)
  storage.on('test8_key', mockFn2)
  storage.off('test8_key', true)
  setTimeout(function () {
    expect(mockFn1).toBeCalledTimes(0);
    expect(mockFn2).toBeCalledTimes(0);
    done()
  }, 300)
})



