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

// insertion sort
export const insertionSort = (tempArray: number []) => {
    const unsortedList: number [] =  tempArray
    const sortedList: number [] = []
    sortedList.push(unsortedList[0])
    unsortedList.shift()
    
    while(unsortedList.length > 0) {
        // for each element in sorted List
        for(let i = 0; i<=sortedList.length; i++){
            if(i === sortedList.length){ // if the current index is = to the length of sortedList.length (WERE AT THE END)
                sortedList.push(unsortedList[0]) // add unsortedList[0] to the end of sortedList
                break;
            } else if (unsortedList[0] < sortedList[i]) { // if unsorted[0] is less than sortedList[i]
                sortedList.splice(i, 0, unsortedList[0]) // add the first value BEFORE index(i)
                break; // stop checking
            }
        }
        unsortedList.shift()
    }
    return sortedList
}
