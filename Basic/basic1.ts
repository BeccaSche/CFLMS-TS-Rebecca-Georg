class Person{
	firstName="";
	age="";
	jobTitle="";

	constructor(firstName, age, jobTitle){
		this.firstName = firstName;
		this.age = age;
		this.jobTitle = jobTitle;
	}

	whoAreYou(){
		return `Hello there, My name is ${this.firstName} and I am ${this.age} years old, and I am a ${this.jobTitle}.`;
	}
}

var Person1 = new Person("John", "30", "waiter");

document.write(Person1.whoAreYou());

