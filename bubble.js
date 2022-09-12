function bubbleSort(arr) {
    console.log('hey')
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length -1; j++){
            console.log(arr[j], arr[j + 1], '###', arr)
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                
            }

        }
    }
    return arr
}
console.log(bubbleSort([8,5,2,55]))
module.exports = bubbleSort;