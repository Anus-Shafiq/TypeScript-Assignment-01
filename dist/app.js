"use strict";
// question no1
function createUser(user) {
    return user;
}
const newUser = {
    id: 18,
    name: "anus",
    email: "sheikhanus925@gmail.com",
    isActive: true,
};
const userCreated = createUser(newUser);
console.log(userCreated);
function checkedInput(input) {
    if (typeof input === "number") {
        return `${input} is Number`;
    }
    else {
        return `${input} is String`;
    }
}
console.log(checkedInput(12));
console.log(checkedInput("anus"));
// question no3
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
class Car extends Vehicle {
    constructor(make, model, year, door) {
        super(make, model, year);
        this.doors = door;
    }
    getInfo() {
        return `${this.doors}`;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, sidecar) {
        super(make, model, year);
        this.hasSidecar = sidecar;
    }
    getInfo() {
        return `${this.hasSidecar}`;
    }
}
var myCar = new Car("Honda", "Accord", 2025, 4);
var myBike = new Motorcycle("Honda", "CD125", 2025, true);
console.log(myCar);
console.log(myBike);
// question no4
class BankAccount {
    constructor(b, a) {
        this.balance = b;
        this.accountNumber = a;
    }
    getBalance() {
        return this.balance;
    }
    getAccountNum() {
        return this.accountNumber;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw Error("Insufficient balance");
        }
        this.balance -= amount;
    }
}
const myAccount = new BankAccount(150000, "ba097654321");
console.log(myAccount);
myAccount.deposit(10000);
console.log(myAccount);
myAccount.withdraw(160000);
console.log(myAccount);
myAccount.deposit(10000);
console.log(myAccount);
// question no5
class Shape {
    constructor(c) {
        this.color = c;
    }
    getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const myCircle = new Circle("red", 6);
console.log(myCircle);
console.log(myCircle.getColor());
console.log(myCircle.calculateArea());
const myRectangle = new Rectangle("white", 6, 8);
console.log(myRectangle);
console.log(myRectangle.getColor());
console.log(myRectangle.calculateArea());
function createProduct(product) {
    return product;
}
const newProduct = {
    id: 101,
    name: "iron",
    price: 3500,
    category: "Electronic",
};
console.log(newProduct);
// question no7
class Employee {
    constructor(n, salary) {
        this.name = n;
        this.salary = salary;
    }
    getDetails() {
        return `Name: ${this.name}, Salary: ${this.salary}`;
    }
}
class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }
    getDetails() {
        return this.programmingLanguage;
    }
}
class Designer extends Employee {
    constructor(name, salary, toolUsed) {
        super(name, salary);
        this.toolUsed = toolUsed;
    }
    getDetails() {
        return this.toolUsed;
    }
}
const dev = new Developer("Anus", 50000, "MERN");
console.log(dev);
const desinger = new Designer("Amir", 50000, "Adobe Suite");
console.log(desinger);
// question no8
class Student {
    constructor(n, s, si) {
        this.grades = [];
        this.name = n;
        this.school = s;
        this.studentID = si;
    }
    addGrades(grade) {
        this.grades.push(grade);
    }
    getAverageGrade() {
        if (this.grades.length === 0)
            return 0;
        let sum = 0;
        this.grades.forEach((grade) => (sum += grade));
        return sum / this.grades.length;
    }
}
const newStudent = new Student("anus", "SM Public School", 89871);
console.log(newStudent);
newStudent.addGrades(89);
newStudent.addGrades(60);
console.log(newStudent.name);
console.log(newStudent.getAverageGrade());
function handleResponse(response) {
    if (response.success) {
        console.log(`Data received: ${response.data}`);
    }
    else {
        console.log(`Error occurred: ${response.error}`);
    }
}
const successResponse = {
    success: true,
    data: "Operation successful",
};
const errorResponse = {
    success: false,
    error: "Something went wrong",
};
handleResponse(successResponse);
handleResponse(errorResponse);
// question no10
class Animal {
    constructor(species) {
        this.species = species;
    }
    getSpecies() {
        return this.species;
    }
}
class Dog extends Animal {
    constructor() {
        super("Dog");
    }
    makeSound() {
        return "Woof";
    }
}
class Cat extends Animal {
    constructor() {
        super("Cat");
    }
    makeSound() {
        return "Meow";
    }
}
const myDog = new Dog();
const myCat = new Cat();
console.log(`${myDog.getSpecies()} & Says ${myDog.makeSound()}`);
console.log(`${myCat.getSpecies()} & Says ${myCat.makeSound()}`);
// question no11
function findIndex(arr, value) {
    return arr.indexOf(value);
}
const numbers = [10, 20, 30, 40];
console.log("Index of 30:", findIndex(numbers, 30));
const strings = ["apple", "banana", "cherry"];
console.log("Index of 'banana':", findIndex(strings, "banana"));
function useVehicle(vehicle) {
    if ("drive" in vehicle) {
        console.log(vehicle.drive());
    }
    else {
        console.log(vehicle.ride());
    }
}
class Honda {
    drive() {
        return "Driving a car!";
    }
}
class HondaBike {
    ride() {
        return "Riding a Bike!";
    }
}
const myCar1 = new Honda();
const myBike1 = new HondaBike();
useVehicle(myCar1);
useVehicle(myBike1);
function describeEmployee(emp) {
    console.log(`Name: ${emp.name}, Age:${emp.age} , Job Title: ${emp.jobTitle}`);
}
const employee = {
    name: "Anus",
    age: 25,
    jobTitle: "MERN Dev",
};
describeEmployee(employee);
function makeSound(pet) {
    if ("bark" in pet) {
        console.log(pet.bark());
    }
    else
        console.log(pet.meow());
}
class Dog1 {
    bark() {
        return "Woof!";
    }
}
class Cat1 {
    meow() {
        return "Meow";
    }
}
const petDog = new Dog1();
const petCat = new Cat1();
makeSound(petCat);
makeSound(petDog);
class Circle1 {
    constructor(r) {
        this.radius = r;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    getType() {
        return "Circle";
    }
}
const myCircle1 = new Circle1(5);
console.log(myCircle1);
console.log(myCircle1.calculateArea());
console.log(myCircle1.getType());
//# sourceMappingURL=app.js.map