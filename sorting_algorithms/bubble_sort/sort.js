function bubbleSort(inputArr) {
  let arr_length = inputArr.length;
  for (let i = 0; i < arr_length; ++i) {
    for (let j = 0; j < arr_length; ++j) {
      if (inputArr[j] > inputArr[j + 1]) {
        let temp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = temp;
      }
    }
  }
  return inputArr;
}
