// binary search logic

export const binarySearch = (target: number) => {
    let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    // Your variables here (start, end, etc.)
    let start = 0
    let end = sortedArray.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end ) / 2)

        if (target > sortedArray[middle]){
            start = middle +1
        } else if (target < sortedArray[middle]){
            end = middle -1
        } else if (target === sortedArray[middle]){
            return middle
        }
    }
    return -1
}