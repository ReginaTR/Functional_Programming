const filter = (collection, callbackFn) => {
    const result = []
    let i = 0

    for (const item of collection)
      if (callbackFn(item, i++)){
        result.push(item)
      } 
    return result
}

const odd = value => value % 2 !== 0

console.log([1, 2, 3, 4, 5].filter(item => odd(item)))

console.log([1, 2, 3, 4, 5].filter(odd))