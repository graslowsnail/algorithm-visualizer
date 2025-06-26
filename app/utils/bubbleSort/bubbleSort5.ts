// 5th rebuild of bubble sort

const arr5 = [73, 29, 41, 15, 88, 52, 96, 34, 67, 10] 

// for the length of the arr run the inner loop 
const bubbleSort5 = () => {
    for(let i = 0; i< arr5.length; i++){
        for(let j = 0 ; j < arr5.length -1 ; j ++){
            if (arr5[j] > arr5[j+1]){
                let leftIndex = arr5[j]
                arr5[j] = arr5[j+1]
                arr5[j+1]= leftIndex
            }
        }
    }
    return arr5// return after the last itteration of the outer loop
}