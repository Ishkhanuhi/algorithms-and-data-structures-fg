function merge(left, right) {
  var result = [];

  console.log("Left: " + left);
  console.log("Right: " + right);
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  result = result.concat(left).concat(right);
  console.log("Result: " + result);
  return result;
}

function mergeSort(items) {
  if (items.length < 2) {
    return items;
  }
  let work = [];
  for (let i = 0; i < items.length; i++) {
    work.push([items[i]]);
  }

  for (let lim = items.length; lim > 1; lim = Math.floor((lim + 1) / 2)) {
    for (var j = 0, k = 0; k < lim; j++, k += 2) {
      work[j] = merge(work[k], work[k + 1]);
      console.log(`Work[${j}] = ` + work[j]);
    }
  }

  return work[0];
}

console.log(mergeSort([6, 3, 7, 2, 8, 4, 9, 1]));
