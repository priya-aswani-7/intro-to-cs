const countDown = (num) => {
    // base case
    if(num < 0) return;

    // general case
    console.log(num)
    countDown(num - 1)
}

// countDown(100)

// [1]: 1
// [1, 2]: 3
// [1, 2, 3]: 6

const sumOfArray = (arr, index = 0, sum = 0) => {

    // base case
    if(index === arr.length){
        return sum;
    }

    // recursive / general case
    else {
        sum += arr[index]
        return sumOfArray(arr, index+1, sum)
    }
}

console.log(sumOfArray([1, 2, 3, 4, 5]))

// write a recursive function to print elements of an array
const printArray = (arr, index = 0) => {

    // base case -> STOP ALL OPERATIONS
    if(index === arr.length) return;
    
    // general or recursive case -> DO SOMETHING + MOVE ON TO THE NEXT (CALL THE FUNCTION AGAIN!)
    else {
        console.log(arr[index])
        printArray(arr, index + 1)
    }
}

// arr: [10, 20, 30, 40, 50], index = 0, 10
// arr: [10, 20, 30, 40, 50], index = 1, 20
// arr: [10, 20, 30, 40, 50], index = 2, 30
// arr: [10, 20, 30, 40, 50], index = 3, 40
// arr: [10, 20, 30, 40, 50], index = 4, 50
// arr: [10, 20, 30, 40, 50], index = 5, return


// write a recursive function to multiply all elements of an array





// [1, 2, 4, 5, 6], index = 0, sum = 0
// sum = 1

// 10
// 9 
// 8
// 7
// 6
// 5 
// 4
// 3
// 2
// 1
// 0 