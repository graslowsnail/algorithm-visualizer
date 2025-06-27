// selection sort rebuild 2

const selectionSort2 = () => {
    const arr = [91, 37, 68, 14, 82, 45, 23, 77, 56, 39]

    // for each position in the arr.
    for(let i = 0; i < arr.length; i++){
        let minIndex = i
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        let cachedIndex = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = cachedIndex
    }
    return arr
}
