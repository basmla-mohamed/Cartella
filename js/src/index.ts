/*
1- What is TypeScript
TypeScript is a JavaScript with more additional features created by Microsoft(their creator that create c#).
 Any thing valid JS is valid TS
 It adds a static type system on top of JS, so errors are caught while you write code not when the user run it
we get run time error (make us avoid lost when we dont notice the error  )

2- Why use it
Catch bugs at compile time 
Much better autocomplete (js was not flexible in autocomplete)
better for large projects 

3- How it works
Browsers can't run TS. The compiler (tsc) converts .ts to plain such as sass
browser understand html css js only

4- npm install -g typescript    install by command line
tsc --version                   make sure it downloaded correctly
tsc --watch                     on save (watching)
tsc --init                      create tsc file

5- when we use tsc --init  we must delete module from the file we get ang angular from the end of file

6-we now run tsc code in js file that exist in dist(folder created automaticly)

7- data types 
    premative(store in stack )
    such : number
    string
    boolean
    null
    undefined

    non-premative(store in heap)
    such : function
    array
    object
    
8- datatypes
let name: string = "Basmala";
let age: number = 20;
let x: boolean = true;
let nothing: null = null;
let nothing: undefined = undefined;

9- NOTE: 
boolean takes true and false only
and dont take other falsy values


10- let x = "Cairo";     // error as string(we must define their datatype)
x = 5;                   // Error


11- let a: any = 5;          
let u: unknown = getData();

u.toUpperCase();                             // Error: must check first
if (typeof u === "string") u.toUpperCase();  // OK

12- because that unknown is the safe version of any (unknown dont do any method
 without making sure from his datatype) 

13- let x: number[] = [1, 2, 3];            //array of numbers
let x: Array<string> = ["a", "b"];          //array of strings
let user: [string, number] = ["Sara", 25];  // tuple: fixed length and order

14- let user: { name: string; age?: number; readonly id: number } = {
  name: "Sara",
  id: 1,
};
user.id = 2; // Error: readonly

(null collessing ? ) means the property is optional (type becomes T | undefined).

15- Union types
A value can be one of several types
let id: string | number;
id = "abc";
id = 123;

16- Intersection types
Combine several types into one.
type Person = { name: string };
type Employee = { salary: number };
type Staff = Person & Employee;       // must have both

17-
function print(x: string | number) {
  if (typeof x === "string") x.toUpperCase();     // string 
  else x.toFixed(2);                              // number 
}

18- make static thing such as object to use it latterly
type User{
firstName:string,
lastName:string,
age:number
}

let user1:user={
firstName:"",
lastName:"",
age:20
}


*/
