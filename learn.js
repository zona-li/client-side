/******************** Closure ********************/

// Example 1
function jump() {
	var height  = 10;

	function scream() {
		console.log(height);
	}

	return scream;
}

/*
 We save the output of a function to a new variable. 
 JavaScript keeps a reference to that original scope and we are still able to use it and 
 the height variable. This reference is called "closure"
 */
var newJump = jump();	

newJump();	// logs 10

// Example 2
function add(a) {
	return function(b) {
		return a+b
	};
}

var addUp7 = add(7)
var addUp14 = add(14)

/*
 In this example, we defina a function (inner function) b inside another function (outer function) a and expose b.
 
 To expose b, we simple return it or pass it into a. b will now have access to the variables 
 within the scope of a even after a has been returned.
 */
console.log(addUp7(8));		// 15
console.log(addUp14(12)); 	// 26


// You can define a class inside a function and define the private static variables inside the 
// closure:
(function() {
	var foo;
	foo = 0;
	function MyClass() {
		foo += 1;
	}
	MyClass.prototype = {
		howMany: function() {
			return foo;
		}
	};
	window.MyClass = MyClass;
}());


// Useful when we are dealing with higher order functions:
// Return a list of all albums with at least 'x' copies sold.
function bestSellingAlbum(x) {
	return albumList.filter(
		function (album) {
			return album.sales >= x;
		}
	);
}
// Thanks to ES6, this is is equal to
const bestSellingAlbum = (x) => albumList.filter(album => album.sales >= x);



































