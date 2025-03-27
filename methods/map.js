const map = (collection, callbackFn) => {
    const result = []

    for (let i = 0; i < collection.length; i++) {
      const item = collection[i]      
      const mappedItem = callbackFn(item, i)

      result.push(mappedItem)
    }

    return result
}


console.log(map([ 1, 2, 3, 4, 5 ], (item, i) => item**i))

