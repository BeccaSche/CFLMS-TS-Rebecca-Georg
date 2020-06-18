var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        return "Hello there, My name is " + this.firstName + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var Person1 = new Person("John", "30", "waiter");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, firstName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Employee.prototype.whoAreYou = function () {
        return _super.prototype.whoAreYou.call(this) + " and get " + this.salary + " per month and I work in " + this.jobLocation;
    };
    return Employee;
}(Person));
var Employee1 = new Employee("Georg", "37", "coder", "2000", "Vienna");
document.write(Employee1.whoAreYou());
