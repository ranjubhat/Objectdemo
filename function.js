//Different ways of executing function
function foo() {
  //console.log("Hello world");
  //console.log(this); // Points to global object==>Window in browser.
}
foo(); //Method 1
var obj = {};
obj.foo = function () {
  //console.log(this); //Points to the obj
  //console.log("Hello world 2");
};
obj.foo(); //Method 2

new foo(); //Method 3- Execution as constructor function.Here thisnpoints to newly created object.
foo.call(); //Method 4

function Bicycle(color, type, price, tyrePressure) {
  console.log(this);
  this.color = color;
  this.type = type;
  this.price = price;
  this.tyrePressure = tyrePressure;
  this.inflateTyres = function () {
    this.tyrePressure += 5;
    console.log(this);
  };
}
const newB1 = new Bicycle("red", "gents", 10000, 20);
newB1.inflateTyres(3);
//Here 2 types of functions are called
//1. Contructor function where this points newly created object.
//2. the function inside the object points to the object newB1.
//In both of the cases 'this' may have different reference.

//Lets say if we want to keep this inflatetyres function outside the object so that it can be reusable by other objects as well.
function Mechanic(name) {
  this.name = name;
}
const mike = new Mechanic("mike");

//Here we want the mechanic to inflate the tyre for us.like bicyle 1, 2 , etc.

mike.inflateTyres = newB1.inflateTyres;
//But if we call the inflateTyres using mike1, it will not work because there is not tyrepressure property in Mechanic object.
//So the requirement is inflate the tyrepressure of newB1. But it has to be done by mechanic.

mike.inflateTyres.call(newB1);

//Now inflatetyres function inside mike has the access to this.tyrepressure, because we are calling the function with reference to the newB1.

//Lets say there 100 instances of Bicycle constructor function.
//So 100 copies of inflatetyres methods are created which is waste.
//But in class based object creation, there will be single copy of method and all the instances refere to same method.
//There is no concept of classes in JS(ES6 has classes which simulates class like behaviour but not class.)
//So we have prototypes.---Define the methods in one place and inherit that for different objects.

//Whenever we create array/object/variable or anything in javascript a object is attached to that===>Prototype object.
function foo() {} // Here one function with name foo object is created. Along with that a prototype object is created.
foo.prototype; //To access the prototype object. Here prototype is the property to access the prototype object.
const newFoo1 = new foo(); //There is __proto__ which again points to the prototype object.
//Difference between prototype and __proto__ is , prototype is property of constructor and __proto__ is the property of instance.

//Lets say we set a property for constructor prototype

foo.prototype.test = "ranjan";
//So now the prototype object has the property called test.
foo.prototype === newFoo1.__proto__; //true

//So if we try to access test from newFoo1, we will be able to do that.
// How it works is newFoo1 checks property test in its context, there is no property.
//Then it will check in its prototype.

newFoo1.test; // It is equal to newFoo1.__proto__.test

//Whenever we try to access any property in a object it will check whether it has that property. If no then only it goes to check its prototype.

function EmployeeObject(name) {
  this.name = name;
}
const emp1 = new EmployeeObject("ranjan");
const emp2 = new EmployeeObject("CPU");
//Lets say we want to create one common function for all these instances, wthout modifying the constructor.
//We can do it with prototype.

EmployeeObject.prototype.giveSalary = function () {
  console.log("salary added");
};

emp1.giveSalary();
emp2.giveSalary();

//Now we have added the function to the prototype so it can be reused by all the instances.
