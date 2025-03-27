const some  =  (collection, callbackFn) => {
    let i = 0
    
    for (const item of collection)
      if(callbackFn(item, i++))
        return true

    return false
}

console.log(some([1, 2, 3, 4, 5], (item => item > 3)))

console.log(some([1, 2, 3, 4, 5], (item => item < 3)))

console.log(some([1, 2, 3, 4, 5], (item => item % 2 === 0)))

console.log(some([1, 3, 5], (item => item % 2 === 0)))

console.log(some([1, 2, 3, 4, 5], (item => item % 2 !== 0)))

console.log(some([1, 2, 3, 4, 5], (item => item % 2 === 0)))
