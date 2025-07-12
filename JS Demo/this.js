const obj = {
  name: "Alton",
  sayHi: function () {
    console.log(this.name); // "Alton"
  }
};
obj.sayHi();





const obj = {
  name: "Alton",
  sayHi: () => {
    console.log(this.name); // this does NOT refer to obj
  }
};
obj.sayHi(); // prints undefined
