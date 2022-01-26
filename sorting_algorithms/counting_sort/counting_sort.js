const countingSort = (arr, min, max) => {
    const count = {};
    for (let i = min; i <= max; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] += 1;
    }

    const sortedArr = [];
    for (let i = min; i <= max; i++) {
        while (count[i] > 0) {
            sortedArr.push(i);
            count[i]--;
        }
    }
    return sortedArr;
};

console.log(countingSort([-3, 6, 5, 5000000, 9], -3, 5000000));