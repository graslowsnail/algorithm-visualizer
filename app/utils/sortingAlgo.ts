// insertion sort

const unsorted: number [] = [64, 34, 25, 12, 22, 11, 90]
//const unsorted: number [] = [10, 50, 30]
let sorted: number [] = []

console.log("original unsorted", unsorted)

sorted.push(unsorted[0])
console.log("Sorted", sorted)

unsorted.shift() // remove first element in arr
console.log("unsorted", unsorted)

for( let i = 0; i < unsorted.length; i++ ){
    const originalLength = sorted.length
    for( let y = 0; y <= sorted.length; y++){
        // if unsorted[i] is less than sorteds current index 
        if( unsorted[i] < sorted[y]){
            // splice(index, deleteCount, item to add)
            // y = where to start, the position
            // 0 = how many items to delete(we dont want to delete anyting)
            // unsorted[i] = what to insert
            sorted.splice(y, 0, unsorted[i])
            break;
        }
        if(y === originalLength){
            sorted.push(unsorted[i])
            break;
        }
    }
}


console.log('new sorted  list lol', sorted)