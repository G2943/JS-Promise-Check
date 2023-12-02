let promise = new Promise(function(resolve,reject){
    console.log("Hello from Promise Function")
    resolve(1)
  })
  
  
  console.log("Hello After written Promise")
  setTimeout(function() {
    console.log("Hello from setTimeout")
  }, 2000)
  console.log("Hello after setTimeout function")
  
  console.log(promise)