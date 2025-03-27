
const forEach = (collection, callbackFn) => {

    for (let i = 0; i < collection.length; i++) {
      const item = collection[i];    

      callbackFn(item, i)
    }
}  

forEach([1, 2, 3], (item, i) => console.log([item, i]))



forEach([1, 2, 3], (item) => console.log([item]))




/* Outra forma de fazer:


const forEach = (collection, callbackFn) => {
let i = 0

for (const item of collection)     
  callbackFn(item, i++)
}


outra forma


const forEach = (collection, callbackFn) => {

    for (let i = 0; i < collection.length; i++) {
      callbackFn(collection[i], i)
    }
}   */