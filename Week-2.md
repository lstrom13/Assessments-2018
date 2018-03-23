### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 you link the page using your stylesheet and href

 //Googled Answer
 <head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
  the class selects elements with a specific attribute, you can call a class using the (.) syntax, you can only use an id once but can use classes over again.

 //Googled Answer
  The benefit of this is that you can have the same HTML element, but present it differently depending on its class or ID. In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”).

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
justify-content: center
##### 2) give it a black border that is 5px wide,
border: 5px solid black;
##### 3) make its text appear in the center of the box
text-align: center;

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 is a free css library used with templates and other components to style your page

 //Googled Answer
 Bootstrap is a free and open-source front-end library for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only.

#### 5. Name 4 semantic html tags.
<header>
<footer>
<main>
<nav>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
 let and const are the alternate block scope new to ES6. let can be changed and const cannot be changed. let will be your local block scope and const will be your local and global block scope.

 //Googled Answer
 Image result for ES6 block scope
let and const — the introduction of block scope. In ES6, let and const were introduced as alternative ways of declaring variables — both being blocked scoped. This will probably resonate way better with you if you're used to any other language than JavaScript. In block scope, any block will be a scope.


 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
   front end development is how the design actually gets implemented on the webpage, you would use css, html, bootstrap, javascript

 //Googled Answer
  Front-end web development is the practice of producing HTML, CSS and usually JavaScript (while WebAssembly is a recent alternative to it) for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front-end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

 let age = 3;
console.log(`I'm ${age} years old!`);
we are taking {age} and adding it into a string by using ${} to put out "i'm 3 years old!


 #### 9. What is the difference between a div and a span?


 //Your Answer
  span is used for small one line and div is used for a block of HTML

 //Googled Answer
  The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.  

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
  you can take objects from a parent class and give them to a child class but the child class cannot take from the parent class

 //Googled Answer
In object-oriented programming, inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass or base class. A class that inherits from a superclass is called a subclass or derived class.
