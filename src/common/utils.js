/**
 * 防抖函数
 * @param {*} func 
 * @param {*} delay 
 */
export function debounce(func, delay) {
  let timer
  return function () {
    let context = this
    let args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}
/**
 * 节流函数
 * @param {*} func 
 * @param {*} wait 
 */
export function throttle(func, wait) {
  let timer
  return function () {
    let context = this
    let args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}
/**
 * 格式化日期函数
 * @param {*} date 
 * @param {*} fmt 
 */
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};