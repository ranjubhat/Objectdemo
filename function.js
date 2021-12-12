//Different ways of executing function
function foo() {
  console.log("Hello world");
  console.log(this)// Points to global object==>Window in browser.
}
foo(); //Method 1
var obj = {};
obj.foo = function () {
  console.log("Hello world 2");
};
obj.foo(); //Method 2

new foo(); //Method 3- Execution as constructor function
this.foo(); //Method 4
