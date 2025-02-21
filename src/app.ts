// question no1

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(user: User): User {
  return user;
}

const newUser: User = {
  id: 18,
  name: "anus",
  email: "sheikhanus925@gmail.com",
  isActive: true,
};

const userCreated = createUser(newUser);

console.log(userCreated);

// question no2

type Input = number | string;

function checkedInput(input: Input): string {
  if (typeof input === "number") {
    return `${input} is Number`;
  } else {
    return `${input} is String`;
  }
}

console.log(checkedInput(12));
console.log(checkedInput("anus"));

// question no3

class Vehicle {
  constructor(public make: string, public model: string, public year: number) {}
  getInfo(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  doors: number;
  constructor(make: string, model: string, year: number, door: number) {
    super(make, model, year);
    this.doors = door;
  }
  getInfo(): string {
    return `${this.doors}`;
  }
}

class Motorcycle extends Vehicle {
  hasSidecar: boolean;
  constructor(make: string, model: string, year: number, sidecar: boolean) {
    super(make, model, year);
    this.hasSidecar = sidecar;
  }
  getInfo(): string {
    return `${this.hasSidecar}`;
  }
}

var myCar = new Car("Honda", "Accord", 2025, 4);
var myBike = new Motorcycle("Honda", "CD125", 2025, true);
console.log(myCar);
console.log(myBike);

// question no4

class BankAccount {
  private balance: number;
  private readonly accountNumber: string;

  constructor(b: number, a: string) {
    this.balance = b;
    this.accountNumber = a;
  }
  getBalance(): number {
    return this.balance;
  }
  getAccountNum(): string {
    return this.accountNumber;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }
  withdraw(amount: number): void {
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

abstract class Shape {
  protected color: string;
  constructor(c: string) {
    this.color = c;
  }
  abstract calculateArea(): number;

  getColor(): string {
    return this.color;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
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

// question no6

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}
function createProduct(product: Product): Product {
  return product;
}

const newProduct: Product = {
  id: 101,
  name: "iron",
  price: 3500,
  category: "Electronic",
};
console.log(newProduct);

// question no7

class Employee {
  name: string;
  salary: number;
  constructor(n: string, salary: number) {
    this.name = n;
    this.salary = salary;
  }
  getDetails(): string {
    return `Name: ${this.name}, Salary: ${this.salary}`;
  }
}

class Developer extends Employee {
  programmingLanguage: string;
  constructor(name: string, salary: number, programmingLanguage: string) {
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }
  getDetails(): string {
    return this.programmingLanguage;
  }
}

class Designer extends Employee {
  toolUsed: string;
  constructor(name: string, salary: number, toolUsed: string) {
    super(name, salary);
    this.toolUsed = toolUsed;
  }
  getDetails(): string {
    return this.toolUsed;
  }
}

const dev = new Developer("Anus", 50000, "MERN");
console.log(dev);

const desinger = new Designer("Amir", 50000, "Adobe Suite");
console.log(desinger);

// question no8
class Student {
  public name: string;
  private grades: number[] = [];
  protected school: string;
  readonly studentID: number;

  constructor(n: string, s: string, si: number) {
    this.name = n;

    this.school = s;
    this.studentID = si;
  }

  addGrades(grade: number): void {
    this.grades.push(grade);
  }

  getAverageGrade(): number {
    if (this.grades.length === 0) return 0;
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

// question no9

type Response0 =
  | { success: true; data: string }
  | {
      success: false;
      error: string;
    };

function handleResponse(response: Response0): void {
  if (response.success) {
    console.log(`Data received: ${response.data}`);
  } else {
    console.log(`Error occurred: ${response.error}`);
  }
}

const successResponse: Response0 = {
  success: true,
  data: "Operation successful",
};
const errorResponse: Response0 = {
  success: false,
  error: "Something went wrong",
};

handleResponse(successResponse);
handleResponse(errorResponse);

// question no10

abstract class Animal {
  protected species: string;
  constructor(species: string) {
    this.species = species;
  }

  abstract makeSound(): string;

  getSpecies(): string {
    return this.species;
  }
}

class Dog extends Animal {
  constructor() {
    super("Dog");
  }

  makeSound(): string {
    return "Woof";
  }
}

class Cat extends Animal {
  constructor() {
    super("Cat");
  }

  makeSound(): string {
    return "Meow";
  }
}

const myDog = new Dog();
const myCat = new Cat();
console.log(`${myDog.getSpecies()} & Says ${myDog.makeSound()}`);
console.log(`${myCat.getSpecies()} & Says ${myCat.makeSound()}`);

// question no11
function findIndex<T>(arr: T[], value: T): number {
  return arr.indexOf(value);
}

const numbers = [10, 20, 30, 40];
console.log("Index of 30:", findIndex(numbers, 30));

const strings = ["apple", "banana", "cherry"];
console.log("Index of 'banana':", findIndex(strings, "banana"));

// question no12
interface Car {
  drive(): string;
}

interface Bike {
  ride(): string;
}

function useVehicle(vehicle: Car | Bike) {
  if ("drive" in vehicle) {
    console.log(vehicle.drive());
  } else {
    console.log(vehicle.ride());
  }
}

class Honda implements Car {
  drive(): string {
    return "Driving a car!";
  }
}

class HondaBike implements Bike {
  ride(): string {
    return "Riding a Bike!";
  }
}

const myCar1 = new Honda();
const myBike1 = new HondaBike();

useVehicle(myCar1);
useVehicle(myBike1);

// question no13
interface Person {
  name: string;
  age: number;
}

interface Employee {
  jobTitle: string;
}

type FullTimeEmployee = Person & Employee;

function describeEmployee(emp: FullTimeEmployee): void {
  console.log(`Name: ${emp.name}, Age:${emp.age} , Job Title: ${emp.jobTitle}`);
}

const employee: FullTimeEmployee = {
  name: "Anus",
  age: 25,
  jobTitle: "MERN Dev",
};

describeEmployee(employee);

// question no14

interface Dog {
  bark(): string;
}

interface Cat {
  meow(): string;
}

type Pet = Dog | Cat;

function makeSound(pet: Pet) {
  if ("bark" in pet) {
    console.log(pet.bark());
  } else console.log(pet.meow());
}

class Dog1 implements Dog {
  bark(): string {
    return "Woof!";
  }
}

class Cat1 implements Cat {
  meow(): string {
    return "Meow";
  }
}

const petDog = new Dog1();
const petCat = new Cat1();

makeSound(petCat);
makeSound(petDog);

// question no15

interface Shape {
  calculateArea(): number;
  getType(): string;
}

class Circle1 implements Shape {
  radius: number;
  constructor(r: number) {
    this.radius = r;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getType(): string {
    return "Circle";
  }
}

const myCircle1 = new Circle1(5);
console.log(myCircle1);
console.log(myCircle1.calculateArea());
console.log(myCircle1.getType());
