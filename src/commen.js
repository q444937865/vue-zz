/**
 * 设置cookie
 * @param name cookie的名称
 * @param value cookie的值
 * @param day cookie的过期时间
 */
var setCookie = function (name, value, day) {
  if (day !== 0) { //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    var expires = day * 24 * 60 * 60 * 1000;
    var date = new Date(+new Date() + expires);
    document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
  } else {
    document.cookie = name + "=" + escape(value);
  }
};
export default setCookie;

/**
 * 获取对应名称的cookie
 * @param name cookie的名称
 * @returns {null} 不存在时，返回null
 */
var getCookie = function (name) {
  var arr;
  var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
};
export default getCookie;

/**
 * 删除cookie
 * @param name cookie的名称
 */
var delCookie = function (name) {
  setCookie(name, ' ', -1);
};

/**
 * 获取url中的参数
 * @param name 参数的名称
 */
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
export default getQueryString;

/**
 * 对数组中按照某个对象进行排序
 * @param prop 参数的名称 
 * @param desc 1或者不输为正序,-1为倒序 
 */
var compare = function (prop, desc) {
  if (desc == undefined) desc = 1;
  return function (obj1, obj2) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];
    if (val1 < val2) {
      return -1 * desc;
    } else if (val1 > val2) {
      return 1 * desc;
    } else {
      return 0;
    }
  }
}
export default compare;

/**
 * 对数组中按照某个对象进行排序
 * @param arrs 数组
 */
var unique = function (arrs) {
  var temp = {}, //新建一个空对象，给数组中没出现过的数添加一个属性
    arr = [], //去重后的数组
    len = arrs.length; //要进行去重数组的长度
  for (var i = 0; i < len; i++) {
    if (!temp[arrs[i]]) { // 判断数组中的数作为属性名在temp里有没有属性值
      temp[arrs[i]] = "abc"; //如果没有属性值，则说明没出现过给他一个属性值
      arr.push(arrs[i]); //同时把这个数添加到去重后的数组里
    }
  }
  return arr; //最后返回这个数组，这是hash算法
}
export default unique;

/**
 * 时间格式化
 * @param timestamp 时间戳
 * formats格式包括
 *  1. Y-M-D
 *  2. Y-M-D h:m:s
 *  3. Y年M月D日
 *  4. Y年M月D日 h时m分
 *  5. Y年M月D日 h时m分s秒
 *  示例：console.log(formatDate(1500305226034, 'Y年M月D日 h:m:s')) ==> 2017年07月17日 23:27:06
 */
function formatDate(timestamp, formats) {
  formats = formats || 'Y-M-D';
  var myDate = timestamp ? new Date(timestamp) : new Date();
  var year = myDate.getFullYear();
  var month = formatDigit(myDate.getMonth() + 1);
  var day = formatDigit(myDate.getDate());
  var hour = formatDigit(myDate.getHours());
  var minute = formatDigit(myDate.getMinutes());
  var second = formatDigit(myDate.getSeconds());
  return formats.replace(/Y|M|D|h|m|s/g, function (matches) {
    return ({
      Y: year,
      M: month,
      D: day,
      h: hour,
      m: minute,
      s: second
    })[matches];
  });
  // 小于10补0
  function formatDigit(n) {
    return n.toString().replace(/^(\d)$/, '0$1');
  };
}
export default formatDate;

/**
 * 加入收藏夹
 * 
 */
function AddFavorite(sURL, sTitle) {
  try {
    window.external.addFavorite(sURL, sTitle)
  } catch (e) {
    try {
      window.sidebar.addPanel(sTitle, sURL, "")
    } catch (e) {
      alert("加入收藏失败，请使用Ctrl+D进行添加")
    }
  }
}
export default AddFavorite;