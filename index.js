'use strict';

function User(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

let user = new User('Muthu', 'Ayyavu');
console.log("User Full Name::"+`${user.firstName} ${user.lastName}`);

let person = {
	fName : "Sar",
	lName : "Rengaraj",
	sayHi() {
		console.log("First Name::"+this.fName+ " Last Name::" + this.lName);
	}
};

person.sayHi();

let sayHello = (text) => {
	console.log("Hai::"+text);
};

sayHello("Jenni");
