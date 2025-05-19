// The second argument/parameter is expected to be a (callback) function
const findWaldo = function (names, found) {
  names.forEach((name,index) => {     // for each name grab the index position where it is located
    if(name === "Waldo"){  // if the name matches the given string, then give me the index using the callback function
      found(index)
    }
    
  }); 
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found him at index ${index}`)
});