var Person = /** @class */ (function () {
    function Person(firstName, age, jobTitle) {
        this.firstName = "";
        this.age = "";
        this.jobTitle = "";
        this.firstName = firstName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.whoAreYou = function () {
        return "Hello there, My name is " + this.firstName + " and I am " + this.age + " years old, and I am a " + this.jobTitle + ".";
    };
    return Person;
}());
var Person1 = new Person("John", "30", "waiter");
document.write(Person1.whoAreYou());
