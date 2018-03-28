// global scope
var message = "hi"

function myfunc() {
	// local scope
	var message = "New Message"
	console.log(message);
}

myfunc()
