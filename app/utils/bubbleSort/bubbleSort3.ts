// 3rd rebuild of bubble sort

const arr = [42, 18, 93, 7, 56, 21, 84, 35, 69, 14]

// go thru every index of the arr
let didSwap = true

const buubleSort = () => {

    while(didSwap){
        didSwap = false

        for(let i = 0; i < arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                let leftIndex= arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = leftIndex
                //swap this
                didSwap= true
            }
        }
    }
    return arr
}