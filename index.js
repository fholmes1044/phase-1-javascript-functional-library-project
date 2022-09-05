
function myEach(collection, alert){
    let newArray = Object.values(collection)
    //console.log("coll", newArray)
    newArray.forEach(element => alert(element))
    return collection
}

function mySize(collection){
    let newArray = Object.values(collection)
    return newArray.length
}

function myMap(collection, callback){
    let newArray = Object.values(collection)
    //console.log("new", newArray)
    const map = newArray.map(element => callback(element))
    //console.log("map", map)
    return map
}



function myFind(collection, callback){
    let newArray = Object.values(collection)
    let find = newArray.find(element => callback(element) )
    console.log("result", find)
   return find  
}

function myReduce(collection, callback, acc){
    let newArray = Object.values(collection)
    if (!acc){
      acc = newArray.shift()
    }
    for (let i = 0; i<newArray.length; i++){
        acc = callback(acc, newArray[i], newArray)
    }
    return acc
    
    }
        
  
function myFilter(collection, predicate){
    let newArray = Object.values(collection)
    //console.log("newArray", newArray)
    //console.log("predicate", predicate)
    let array = []
    for (let i=0; i<newArray.length; i++){
        if(predicate(newArray[i])){
           array.push(newArray[i])
           console.log("array",array,"i",i)
          
        } 
        
    }
return array
}

function myFirst(array, n){
if(n){
return array.slice(0,n)
}
else{
    return array[0]
}
}

function myLast(array, n){
    if(n){
        return array.slice(array.length-n)
        }
        else{
        return array[array.length-1]    
        }
    
}

function myKeys (object){
    console.log("obj", object)
 const Array = Object.getOwnPropertyNames(object)
 console.log("arr", Array)
 return Array
}

function myValues(object){
    const values = Object.values(object)
    return values
}