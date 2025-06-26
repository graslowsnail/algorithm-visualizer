// build 2 of bubble sort

const unsortedArr = [88, 23, 67, 12, 95, 44, 31, 76, 89, 55]

const swap = (arr: number [], index1: number, index2: number) => {
    let leftIndex = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = leftIndex
}

const bubbleSort = () => {
    let didSwap = true
    while(didSwap){
        didSwap =  false 
        for(let i = 0; i < unsortedArr.length-1; i++){
            if(unsortedArr[i] > unsortedArr[i+1]){
                swap(unsortedArr, i, i+1)
                didSwap = true
            }
        }
    }
    return unsortedArr
}
