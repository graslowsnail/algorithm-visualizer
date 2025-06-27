

const selectionSort3 = () => {
    const arr = [91, 37, 68, 14, 82, 45, 23, 77, 56, 39]

    for(let i = 0; i< arr.length; i ++ ) {
        let minIndex = i
        for(let j = i; j < arr.length; j ++){
            if( arr[j] > arr[minIndex] ) {
                minIndex = j
            }
        }
        let cachedIndex = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = cachedIndex
    }
}


// test1
// Task: Print every element EXCEPT the last one
function test1 () {
    let arr = [10, 20, 30, 40, 50]
    for(let i = 0; i< arr.length -1; i ++){
        console.log(arr[i])
    }
}
// test2
// Task: Count how many numbers are greater than 10
// Return the count
const test2 = ()=> {
    let arr = [15, 8, 23, 4, 16, 9]
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            count = count + 1
        }
    }
    return count
}

// test 3
// Given: start with num = 1
// Task: Keep doubling num until it's greater than 100
// Return how many times you doubled it
const test3 = () => {
    let num = 1
    let count = 0
    while(num <= 100){
        num =  num * 2
        count = count + 1
    }
    return count
}

// test 4
// Task: Print all possible pairs (don't repeat pairs)
// Example output: (1,2), (1,3), (1,4), (2,3), (2,4), (3,4)
function test4() {
    let arr = [1, 2, 3, 4]
    // every current index
    for(let i = 0; i< arr.length; i ++){
        for (let j = i+1; j< arr.length; j ++){
            console.log(arr[i], arr[j])
        }
    }
}

// test 5
// Task: Replace every even-indexed element with 0
// Modify the original array
function test5(){
    let arr = [5, 10, 15, 20, 25]
    for(let i = 0; i< arr.length; i++){
        if( i % 2 === 0){
            arr[i]= 0
        }
    }
}