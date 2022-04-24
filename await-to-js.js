/**
 *
 * @param {Promise} promise 请求函数
 * @param {Object} errorText 扩展错误对象
 * @return {Promise} 返回一个Promise
 * @description to函数返回一个Promise且值是一个数组，数组之中有两个元素，如果索引为0的元素不为空值，说明该请求报错，如果索引0的元素为空值说明该请求没有报错，也就是成功。
 */
export function to(promise, errorText) {
  return promise
    .then((data) => [null, data])
    .catch((err) => {
      if (errorText) {
        const parsedError = { ...err, ...errorText }
        return [parsedError, undefined]
      }
      return [err, undefined]
    })
}
