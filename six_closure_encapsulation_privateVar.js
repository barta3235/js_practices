function kitchen(){
    let roast =0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer= kitchen();

console.log(firstServer);
console.log(firstServer());


// When you call const firstServer = kitchen();, you are essentially creating an instance of the inner function returned by kitchen. This instance, stored in firstServer, is itself a function. So, when you print console.log(firstServer), you are logging the actual function object that was returned by kitchen.

// On the other hand, when you call console.log(firstServer()), you are invoking the function stored in firstServer. This function increments the roast variable and returns its current value. So, the first console.log(firstServer) prints the function itself, while the second console.log(firstServer()) prints the result of calling the function, which is the incremented value of roast.

