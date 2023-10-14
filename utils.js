function findMean(list) {
  let sum = list.reduce((sum, num) => sum + num, 0);
  let value = sum / list.length;
  return value || 0;
}

function findMedian(list) {
  let result = null;
  list.sort((a, b) => a - b);
  if (list.length % 2) {
    let index = Math.floor(list.length / 2);
    result = list[index];
  } else {
    let upperindex = list.length / 2;
    let lowerindex = upperindex - 1;
    result = (list[upperindex] + list[lowerindex]) / 2;
  }
  return result;
}

function findMode(list) {
  let frequency = {};
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    if (item in frequency) {
      frequency[item].push(item);
    } else {
      frequency[item] = [item];
    }
  }
  let value = null;
  let length = 0;
  Object.values(frequency).forEach((list, index) => {
    if (list.length > length) {
      length = list.length;
      value = list[0];
    }
  });
  return value;
}

module.exports = { findMean, findMedian, findMode };
