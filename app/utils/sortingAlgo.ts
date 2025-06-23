// insertion sort

export const createArray = (userInput: number) => {
    const tempArray: number [] = []
    const usedNumbers = new Set<number>() // keep track of what numbers we have added 
    const maxRange = Math.max(userInput * 10, 1000)

    while(tempArray.length < userInput) {
        let randomNumber = Math.floor(Math.random() * maxRange) + 1

        if(!usedNumbers.has(randomNumber)){
            usedNumbers.add(randomNumber)
            tempArray.push(randomNumber)
        }
    }
    return tempArray
}

export const sortArray = (tempArray: number []) => {
    let unsortedArray: number [] = tempArray;
    let sortedArray: number [] = []

    sortedArray.push(unsortedArray[0]) // add first number into sorted array
    unsortedArray.shift()// remove first element in unsoreted array

    for( let x = 0; x < unsortedArray.length; x++){
        const originalLength = sortedArray.length
        for( let y = 0; y <= sortedArray.length; y++){
            if(unsortedArray[x] < sortedArray[y]){
                sortedArray.splice(y, 0, unsortedArray[x])
                break
            }
            if(y === originalLength){
                sortedArray.push(unsortedArray[x])
                break
            }
        }
    }
    return sortedArray
}
