'use strict';

function User(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

let user = new User('Muthu', 'Ayya');
console.log("User Full Name::"+`${user.firstName} ${user.lastName});