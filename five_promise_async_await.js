// A promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.
// --pending, -- resolve, -- reject

// fetch() is a promise object


// fetch() is called 
        // - http request sent to remote API.
        // - http Response
        // - fetch resolved
// .then executes


const myLoader=()=>{
    return new Promise((resolve,reject)=>{
          const success=Math.random();

          if(success <=0.5){
            resolve(0.3);
          }else{
            reject(0.7);
          }
    });
}

myLoader()
.then(data => console.log('Resolved Data: ',data))
.catch(err=> console.log('rejected with err: ',err))
