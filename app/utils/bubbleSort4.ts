// 4th rebuild of bubble sort

const arr4 = [42, 18, 93, 7, 56, 21, 84, 35, 69, 14]

const bubbleSort4 = () => {
    for(let i = 0 ; i< arr4.length; i ++) {
        for(let j = 0; j < arr4.length -1 ; j ++){
            if(arr4[j] > arr4[j+1]){
                let leftIndex = arr4[j]
                arr4[j] = arr4[j+1]
                arr4[j+1] = leftIndex
            }
        }
    }
    return arr4
}