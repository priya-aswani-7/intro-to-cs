function wordOccurrence(word, phrase){ // O(1)
  let result = 0 // O(1)
  const array  = phrase.split(' ') // O(N)
  for(let i = 0; i < array.length; i++){ // O(N)
    if(word.toLowerCase() === array[i].toLowerCase()){ // O(1)
      result++; // O(1)
    }
  }
  return  // O(1)
}

// OVERALL COMPLEXITY: O(N)

function bubble_sort(list){ // O(1)
  for(let i = 0; i < list.length - 1; i++){ // O(N)
    for(let j  = 0; j < list.length - 2; j++){ // O(N)
      if(list[j+1] < list[j]){ //  O(1)
        const temp = list[j]; // O(1)
        list[j] = list[j+1]; // O(1)
        list[j+1] = temp; // O(1)
      }
    }
  }
  return list; // O(1)
}

// OVERALL COMPLEXITY: O(N)*O(N) = O(N^2)


function bobIsFirst(people){ // O(1)
  return people[0] == 'bob' // O(1)
}

// OVERALL COMPLEXITY: O(1)

function isPalindrome(input){ // O(1)
  const stack = []; // O(1)
  let output = ""; // O(1)
  for(let i = 0; i < input.length; i++){ // O(N)
    stack.push(input[i]); // O(1)
  }
  while(stack.length){ // O(N)
    output += stack.pop(); // O(1)
  }
  return output == input // O(1)
}

// OVERALL COMPLEXITY: O(N)

function sumOfDivisors(n){ // O(1)
  let result = 0; // O(1)
  let i = 1; // O(1)
  while(i < n){ // O(N)
    if( n % i == 0){ // O(1)
      result += i; // O(1)
    }
    i++; // O(1)
  }
  return result // O(1)
}

// OVERALL COMPLEXITY: O(N)

function printAllNumbersThenSumPairs(numArray){ // O(1)
  numArray.forEach((num)=>{ // O(N)
    console.log(num); // O(1)
  });
  numArray.forEach((num, index)=>{ // O(N)
    if(index < numArray.length - 1){ // O(1)
      console.log(num + numArray[index+1]) // O(1)
    }
  });
}

// OVERALL COMPLEXITY: O(N)


function isPrime(num){ // O(1)
  if(num == 1 || num == 2){ // O(1)
    return false // O(1)
  }
  for(let i = 2; i < num - 1; i++){ // O(N)
    if(num % i == 0){ // O(1)
      return false // O(1)
    }
  }
  return true // O(1)
}

// OVERALL COMPLEXITY: O(N)

function factorial(n){ // O(1)
  if(n === 0){ // O(1)
    return 1; // O(1)
  }else{ // O(1)
    return n * factorial(n-1); // O(N)
  }
}

// factorial(5) = 5 * factorial(4)
// factorial(4) = 4 * factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1 * factorial(0)
// factorial(0) = 1

// OVERALL COMPLEXITY: O(N)





