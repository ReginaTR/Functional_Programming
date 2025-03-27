const none = (collection, callbackFn) => {
    let i = 0 

    for (const item of collection)
      if (callbackFn(item, i++))
        return false 
    
    return true
} 


console.log(none([1, 2, 3, 4, 5], (item => item % 2 === 0)))

console.log(none([1, 2, 3, 4, 5], (item => item < 10)))

console.log(none([1, 2, 3, 4, 5], (item => item > 10)))

console.log(none([1, 2, 3, 4, 5], (item => item % 2 !== 0)))
