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

// In OOP, closures make working with objects and data easier:
function count() {
	var x = 0;
	return {
		increment: function() { ++x; },
		decrement: function() { --x; },
		get: function() { return x; },
		reset: function() { x = 0; }
	}
}

// Passing values and parameters into an algorithm:
function proximity_sort(arr, midpoint) {
	return arr.sort(function(x, y) { x -= midpoint; y -= midpoint; return x*x - y*y; });
}


// Namespacing private functions:
// JS can emulate the functionality of declaring method as either public or private via closures.

var houseRent = (function() {
	var rent = 100000;
	function changeBy(amount) {
		rent += amount;
	}
	return {
		raise: function() {
			changeBy(10000);
		},
		lower: function() {
			changeBy(-10000);
		},
		currentAmount: function() {
			return rent;
		}
	};
})();

alert(houseRent.currentAmount());	// $100,000
houseRent.lower();
alert(houseRent.currentAmount());	// $90,000
houseRent.changeBy(2000);	// TypeError: undefined is not a function



// Map
Array.prototype.map = function(callback) {
	arr = [];
	for (var i = 0; i < this.length; i++)
		arr.push(callback(this[i],i,this));
	return arr;
};

// Filter
Array.prototype.filter = function(callback, context) {
	arr = [];
	for (var i = 0; i < this.length; i++) {
		if(callback.call(context, this[i], i, this))
			arr.push(this[i]);
	}
	return arr;
};




































