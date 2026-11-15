

class Student{
constructor(name, age){
    this.name = name;
    this.age = age;
}
displayInfo(){
    console.log("Name:", this.name);
    console.log("Age:", this.age);
}

}

const student1 = new Student("Rahul", 20);
student1.displayInfo();