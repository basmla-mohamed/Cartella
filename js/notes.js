/*
 What is OOP?
Object-Oriented Programming that organizes code around objects
 (data plus the behavior that works on that data) instead of loose functions and variables(such as in nike). 
 It makes large programs easier to structure, reuse, and maintain.

 Class
A class is a factory that defines what properties and methods its objects will have. 
js:
class course {
  constructor(name) { this.name = name; }
}

Object (Instance)
An object is a concrete thing created from a class. Each object has its own copy of the data from class. 
const c1 = new course("math") and const c2 = new course("physics") are two separate instances of the same class.

Methods
Methods are functions defined inside a class that describe what an object can do.
 They read or change the object's attributes()

Constructor
method that runs automatically when an object is created. It initializes the attributes.
A class can have 
 only one constructor in JS, while Java and C# allow several.

Getters and setters
Controlled doors to private data. A setter can validate before changing a value, for example refusing a negative score.
class Player {
  #score = 0;
  get score() { return this.#score; }
  set score(v) { if (v >= 0) this.#score = v; }
}

Definition of Inheritance:
A class (child/subclass) can reuse and extend the properties and methods of another 
class (parent/superclass)

super:
Used in a child class to call the parent's constructor or methods. In JS you must call super() before using this in a child constructor.
class child extends parent {
  constructor(name) { super(name); this.id = 0; }
}

Types of inheritance
Single (one parent),
 multilevel (A , B , C), 
 and multiple (one child, many parents). Java and C# don't allow multiple class inheritance; Python and C++ do


 Polymorphism Definition:
"Many forms": the same method call behaves differently depending on the actual object.
 Calling parent.id (search there)????

 Compile-time polymorphism (Overloading)
Several methods with the same name but different parameters,
 resolved at compile time. Supported in Java and C#. JS and Python don't support it directly;
  you check argument types or use default parameters instead.

 Runtime polymorphism (Overriding)
A child class provides its own implementation of a method already defined in the parent. 
The version that runs is decided at runtime based on the real object type.


Operator overloading:
Defining how operators like + or == behave in classes.
 Python supports it (__add__), C++ and C# too. Java and JS don't.(because that typeScript also dont support it (typesScript is js))

 Object = The real thing
object is made from the class, like a real cookie made with the sugar You can make as many as you want from one class.
let myCar = new Car(); //object
let yourCar = new Car();  //another object
*/
