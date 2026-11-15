

// class Student{
// constructor(name, age){
//     this.name = name;
//     this.age = age;
// }
// displayInfo(){
//     console.log("Name:", this.name);
//     console.log("Age:", this.age);
// }

// }

// const student1 = new Student("Rahul", 20);
// student1.displayInfo();

// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 20000,
//     isElectric: false,

//     start: function(){
//     return "Vroom! The engine is running.";
//     }
// };

// console.log(car.model);
// console.log(car.start());

//Classed (Blueprints).

// class Car {
//     constructor(brand, model){
//         this.brand = brand;
//         this.model = model;
//     }
//     startEngine(){
//         return `The ${this.brand} ${this.model}is starting ...`;
//     }
// }

// const myCar = new Car("Tesla", "Model 3");
// console.log(myCar.startEngine());

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Abdallah Mohammed Elmahady"));


function 