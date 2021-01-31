/**
 * For more programming concepts, questions, tips, and tutorials, visit:
 * 
 * https://bit.ly/devtools-yt
 * https://code.devtools.tech
 * https://devtools.tech
 * 
 * Author: Puneet Ahuja (https://puneetahuja.in)
 */

 /**
  * Question: Create a function calculator that should take one initial value.
  * Chain calculations like add, subtract on it.
  * Return the calculated value on invocation of val function at the end of the chain.
  * 
    var result = cal(2)
            .add(5)
            .sub(4)
            .val()

    console.log("Result is : " , result)

    // Output : 3 (2 + 5 - 4)
  */


/**
 * **********  Approach - 1  **********
 */

 function cal( initialValue ){

    console.log("Is this global?" , this === global)

    // 1. create accumulator - store result.

    // closure
    var accumulator = initialValue;

    // 2. Define add, sub and val functions .

    this.add = function add(num){
        accumulator += num;
        return this;
    }

    this.sub = function sub(num){
        accumulator -= num;
        return this;
    }

    this.val = function val(){
        return accumulator;
    }

    // 3. Return an object with add, sub and val functions. - chain
    return this;
 }

 console.log("Before cal call" , global.add)

 var result = cal(2)
 .add(5)
 .sub(4)
 .val()

 console.log("After cal call" , global.add)

console.log("Result is : " , result)