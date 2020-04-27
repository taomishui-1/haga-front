export function fillInt(num, len) {
  return (Array(len).join('0') + num).slice(-len);
}

export function transInteger(num) {
  num = parseInt(num, 10) || 0;
  if (!num) {
      return num;
  }
  let t = 0;
  let n = '';
  if (num < 10000) {
      return num;
  }
  if (num < 100000000) {
      t = num / 10000 >> 0;
      n = fillInt(num % 10000, 4);
      const j = parseInt(n.slice(0, 2));
      if ('0' === n || j === 0) {
          return t + "万";
      }
      return t + "." + ((j + '').length === 1 ? n.slice(0, 2) : n.slice(0, 1)) + "万";
  }
  if (num < 10000000000) {
      t = num / 100000000 >> 0;
      n = fillInt(num % 100000000, 8);
      const j = parseInt(n.slice(0, 2));
      if ('0' === n || j === 0) {
          return t + "亿";
      }
      return t + "." + ((j + '').length === 1 ? n.slice(0, 2) : n.slice(0, 1)) + "亿";
  }
  return num;
}

export function transMoney(num) {//取整，三行逗号隔开
  num = parseInt(num, 10) || 0;
  if (!num) {
      return num;
  }
  return parseFloat(num).toLocaleString();

}

export function transFragment(num) {
  num = parseInt(num, 10) || 0;
  if (!num) {
      return num;
  }
  const fragmentNum = (num / 10).toFixed(1);
  num = Math.floor(fragmentNum);
  return transInteger(num) + (num === fragmentNum ? '' : fragmentNum.substring(fragmentNum.indexOf('.')));
}