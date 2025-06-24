// bubble sort logic
console.log('This is bubble sort:)')

const swapIndexes = (arr: number[], index1: number, index2:number) => {
    let temp  = arr[index1] // save the first value
    arr[index1] = arr[index2] // put the second index value in the first position
    arr[index2] = temp // put saved first index value into second position
}

export const bubbleSort = () =>  {
    let unsortedList: number[] = [64, 34, 25, 12, 22, 11, 90]; 
    let didSwap = true // 1. default state so we always check the unsorted list atleast once
    let passCount = 0  // count for how many times we have passed thru our unsorted List

    console.log('Original:', unsortedList);// print initial  unsorted list

    while (didSwap === true){ // 2. run check over arr atleast once.
        didSwap= false // 3. set did swap to false, because the arr might be in order on the first try.
        passCount++ // add 1 into how many times weve passed thru arr
        for( let j = 0; j < unsortedList.length - passCount; j++){ // 4. for each adjacent pair
            if ( unsortedList[j] > unsortedList[j+1]) { // 5. check if the current index is bigger then the adjcent index
                swapIndexes(unsortedList, j, j+1)// 6. swap indexes if current index is larger
                didSwap= true // 7 set didSwap to true becuase we swapped 
            }
        }
        // 8. if didSwap is false exit
    }
    return unsortedList// 9. return unsroted list that is now in order 
}
