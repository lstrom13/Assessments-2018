// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
function anonymous(x){
	if(x%3 == 0)
	return(x + " " + "is divisible by three");
	else
	return(x + " " + "is not divisible by three");
}

// edited

// named function
function anonymous(x){
	if(x%3 == 0) {
		console.log(x + " " + "is divisible by three");
	} else {
		console.log(x + " " + "is not divisible by three");
	}
}

anonymous(33)

// anonymous function
var divisbleByThree = function(x) {
	if(x%3 == 0) {
		console.log(x + " " + "is divisible by three");
	} else {
		console.log(x + " " + "is not divisible by three");
	}
}

divisbleByThree(50)


// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var laura = {
	lastName:"strom",
	age:32,
	eyeColor:"blue"
};

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var animals = ["dog", "cat", "bird", "horse"]
animals.pop() // takes off the last item and returns it
animals.slice(2)
animals[2]

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	console.log(typeof str);
	// split the string into an array of letters
	var letters = str.split("");
	console.log("array of letters in str:" + letters);
	// we can call sort on an array of letters to alphabetize
	letters = letters.sort()
	// rejoining the items in the letters array into a string
	letters = letters.join("")
	// return the new word
	return letters
}

// keep this function call here
console.log(AlphabetSoup("hooplah"));


// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

for(var i = 0; i < nums.length; i++) {
	console.log(nums[i] + " " + nouns[i]);
}

// forEach

var array1 = ["a", "b", "c"];

array1.reverse()



// -------------------------- ACCESSORS VS MUTATORS


a.forEach(function(entry) {
    console.log(entry);
});


// output of the first function should be: "1 ducks"
