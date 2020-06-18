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
		return `Hello there, My name is ${this.firstName} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
	}
}

var Person1 = new Person("John", "30", "waiter");



class Employee extends Person {
	salary; jobLocation; 

	constructor(firstName, age, jobTitle, salary, jobLocation) {
		super(firstName, age, jobTitle);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}
	whoAreYou() {
		return `${super.whoAreYou()} and get ${this.salary} per month and I work in ${this.jobLocation}`;
	}
}

var Employee1 = new Employee("Georg", "37", "coder", "2000", "Vienna");

document.write(Employee1.whoAreYou());