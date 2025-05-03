function sortArray() {
    let inputValue = document.getElementById("inputArray").value;
    let arr = inputValue.split(',').map(Number);

    document.getElementById("bubbleResult").textContent = "Bubble Sort: " + bubbleSort([...arr]).join(', ');
    document.getElementById("insertionResult").textContent = "Insertion Sort: " + insertionSort([...arr]).join(', ');
    document.getElementById("selectionResult").textContent = "Selection Sort: " + selectionSort([...arr]).join(', ');
}
