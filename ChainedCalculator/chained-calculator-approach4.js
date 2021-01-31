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
 * **********  Approach - 4  **********
 */

class Calculator{
  constructor(initialValue){
    this.accumulator = initialValue;
  }

  add(num){
    this.accumulator += num;
    return this;
  }

  sub(num){
    this.accumulator -= num;
    return this;
  }

  val(){
    return this.accumulator;
  }
}

function cal(initialValue){
  return new Calculator(initialValue);
}


var result = cal(2)
.add(5)
.sub(4)
.val()

console.log("Result is : " , result)

