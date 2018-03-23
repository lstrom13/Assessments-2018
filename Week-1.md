### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  boolean*
null
number*
string*
symbol
undefined *

* primitives

  //Googled Answer
  Boolean.
  Null.
  Undefined.
  Number.
  String.
  Symbol.
  Object.

#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: 'inside'


Then, past the code in your console and explain why you were right/wrong.

when i ran text it showed "outside" cause it didnt create a new variable for text. like text.new = "inside"

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JSON is the data within the browser and server.

  //Googled Answer
  JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language (the way objects are built in JavaScript). As stated in the MDN, some JavaScript is not JSON, and some JSON is not JavaScript.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  a closure can access the outer function from within.

  //Googled Answer
  A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  the = sets a value, the == compares values to true or false and converts and the === both sides have to equal true or it with return false, it doesnt do conversion

  //Googled Answer
  The = (assigment operator) , == and === (relational operator) please explain the diffenerce between these 3 operators in javascript;along with relevant examples.And what do we mean by type type conversion in===,please explain with example.And why does

   3==='3'//false
      3==="3"//false
      "3"==3//true
      3===3//true
  also why does

  3==3//true
      "3"==3//true
      3=='3'//true
      1==true//true
  2 votes

  permalink

  By using = you assign a value to something.

  x = 1 //x now equals 1
  x = 2 //x now equals 2
  By using == you check if something is equal to something else. This is not strict

  x == 1 //is x equal to 1? (False)
  x == 2 //is x equal to 2? (True)
  true == 1 //does the boolean value of true equal 1? (True)
  By using === you check if something is equal to something else. This is also strict.

  x === 1 //is x equal to 1? (False)
  x === 2 //is x equal to 2? (True)
  true === 1 //does the boolean value of true equal 1? (False)
  What strict does, in case it wasn't clear there, is that it checks not only the equality of the two values, it compares the types of the two values too. Using == will try and convert one side of the expression to be the same type as the other. For example, boolean and integer. The boolean value for true is 1, therefore does 1 equal 1? Yes, true. When using strict however, it does not try and convert before doing the comparison, it checks if true equals 1, which is doesn't as they are two different data types, and returns false.
