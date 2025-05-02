function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Troca os elementos
            }
        }
    }
    return arr;
}

const numbers = [45, 34, 12, 2, 11, 70];

console.log("Bubble Sort:", bubbleSort([...numbers]));