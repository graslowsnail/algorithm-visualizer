export const createArray = (userInput: number) => {
    const tempArray: number[] = []
    const usedNumbers = new Set<number>()

    while(tempArray.length < userInput) {
        let randomNumber = Math.floor(Math.random() * userInput) + 1  // 1 to userInput!

        if(!usedNumbers.has(randomNumber)){
            usedNumbers.add(randomNumber)
            tempArray.push(randomNumber)
        }
    }
    return tempArray
}

// insertion sort
export const insertionSort = (tempArray: number[]) => {
    const steps = []
    const array = [...tempArray] // Work with copy
    
    // Add initial state
    steps.push({
        array: [...array],
        comparing: [],
        action: "start"
    })
    
    // Your existing logic but capture each step:
    for (let i = 1; i < array.length; i++) {
        let current = array[i]
        let j = i - 1
        
        // Show comparison
        steps.push({
            array: [...array],
            comparing: [i, j],
            action: "comparing"
        })
        
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j] // Shift element
            
            // Show the shift
            steps.push({
                array: [...array],
                comparing: [j, j + 1],
                action: "shifting"
            })
            
            j--
        }
        array[j + 1] = current // Insert element
        
        // Show insertion
        steps.push({
            array: [...array],
            comparing: [j + 1],
            action: "inserted"
        })
    }
    
    return steps
}
