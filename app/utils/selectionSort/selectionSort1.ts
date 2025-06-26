// 1st build of selection sort algo
const arr6 = [64, 25, 12, 22, 11, 90, 88, 76, 50, 33]; 

const selectionSort = () => {
    for(let j = 0; j < arr6.length-1; j++) {
        let minIndex = j

        for(let i = j; i< arr6.length; i++){
            if(arr6[i]< arr6[minIndex]){
                minIndex= i
            }
        }

        let cachedIndex = arr6[minIndex]
        arr6[minIndex] = arr6[j]
        arr6[j] = cachedIndex
    }
    return arr6
}