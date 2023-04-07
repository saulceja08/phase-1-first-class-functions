function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction() {
    // Define a named function
    function myNamedFunction() {
      console.log('This is my named function');
    }
  
    // Return the named function
    return myNamedFunction;
  }

  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log('This is my anonymous function');
    };
  }

