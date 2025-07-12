let person = { name: "Alton", age: 21 };
console.log(person.name);      // "Alton"
console.log(typeof person);    // "object"




let arr = [1, 2, 3];
console.log(arr.length);       // 3
arr.customProperty = "test";
console.log(arr.customProperty);  // "test"
console.log(typeof arr);       // "object"



function greet() {
  console.log("Hello");
}
greet.language = "English";
console.log(greet.language);   // "English"
console.log(typeof greet);     // "function" (but still an object under the hood)



let str = "hello";
console.log(str.toUpperCase());   // "HELLO"
console.log(typeof str);          // "string"
