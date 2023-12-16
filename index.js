function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// Example callback function
function callbackFunction() {
    console.log("Inside the callback function!");
}

// Calling receivesAFunction with callbackFunction
receivesAFunction(callbackFunction);



function returnsANamedFunction (){

    function namedFunction() {
    }

    return namedFunction;
}

    function returnsAnAnonymousFunction(){

    

    return function(){

    };
    }
