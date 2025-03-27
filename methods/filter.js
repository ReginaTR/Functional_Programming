const filter = (collection, callbackFn) => {
    const result = []
    let i = 0

    for (const item of collection)     
      if (callbackFn(item, i++)){
        result.push(item)
      } 
    return result
} 


//Testando: 

console.log(filter([1, 2, 3, 4, 5],(item => item % 2 !== 0))) 

console.log(filter([1, 2, 3, 4, 5],(item => item % 2 === 0))) 

