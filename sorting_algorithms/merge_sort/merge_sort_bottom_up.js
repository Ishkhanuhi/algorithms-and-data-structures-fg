function mergeSort(arr) {
  var sorted = arr.slice();
  var n = sorted.length;
  var buffer = new Array(n);

  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
      let left = leftStart;
      let right = Math.min(left + size, n);
      let leftLimit = right;
      let rightLimit = Math.min(right + size, n);
      let i = left;
      while (left < leftLimit && right < rightLimit) {
        if (sorted[left] <= sorted[right]) {
          buffer[i++] = sorted[left++];
        } else {
          buffer[i++] = sorted[right++];
        }
      }
      while (left < leftLimit) {
        buffer[i++] = sorted[left++];
      }
      while (right < rightLimit) {
        buffer[i++] = sorted[right++];
      }
    }
    var temp = sorted;
    var sorted = buffer;
    var buffer = temp;
  }

  return sorted;
}

let data = [1, 4, 10, 2, 9, 3];
console.log("\n input: " + data.join(", ") + "\n");
console.log("output: " + mergeSort(data).join(", ") + "\n");
