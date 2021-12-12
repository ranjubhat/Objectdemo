// Types of creating resuable objects
// 1. Create normal function
// 2. Create functional constructor.
// 3. Create class and constructor.

// 1. Create normal function
function createBycycleFunction(color, type, price) {
  let newBycycle = {};
  newBycycle.color = color;
  newBycycle.type = type;
  newBycycle.price = price;
  return newBycycle;
}

const bycycleOne = createBycycleFunction("blue", "gents", 10000);
//In above method a newObject is created in the function and after assigning all the properties it is returned.
//Even if we give new while calling, there will not be any change to the output.
//Creation of 'this' will happen but it is not assigned with any properies and the created object is returned not 'this'.

// 2. Create functional constructor.
function CreateBycycleConstructor(color, type, price) {
  // let newBycycle = {};
  //It is like creating let this={} and return this;
  this.color = color;
  this.type = type;
  this.price = price;
  // return newBycycle;
}

const bycycleTwo = new CreateBycycleConstructor("yellow", "ladies", 5000);
//If we see the above function , we can see 2 main things, 2 lines of code are commented.
// creating the object and returning it.
//Javascript provides us this keyword which does both of these work.
//But inorder to use this way, we need to call with new keyword.
//One convention is that => for creating functional constructor use pascal casing(Capital first) instead of camel casing.

//3. Create class and constructor.

class CreateBycycleClass {
  constructor(color, type, price) {
    this.color = color;
    this.type = type;
    this.price = price;
  }
}

const bycycleThree = new CreateBycycleClass("red", "gents", 7000);

console.log(bycycleOne, bycycleTwo, bycycleThree);

//In case if we miss the this keyword for functional constructor. It will not create this object and it is added to global this object.
//Since it is not returning any object it will be undefined.
const newBycleFunctionInstance = createBycycleFunction("blue", "gents", 10000); // Returns the object.
const newBycycleConstructorInstance = CreateBycycleConstructor(
  "yellow",
  "ladies",
  5000
); // Returns undefined as new keyword is missing, but if we see the global object it will have the property color,type,price with the values.
const newBycycleClassInstance = new CreateBycycleClass("red", "gents", 7000); // If we dont provide new here, it will give us error as  Class constructor CreateBycycleClass cannot be invoked without 'new'.
