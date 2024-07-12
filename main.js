/* Task1: Create An Array Of Objects, Each Representing 
A Person With Properties Like Name, Age,
 And Gender. Write A Function To Filter Out 
 All Females And Then Map The Remaining People To 
 An Array Of Names. Print The Final Result.*/
const persons = [
    {name:"Galib", age: 25, gender: "male"},
    {name:"Mohona", age: 24, gender: "female"},
    {name:"Fahim", age: 20, gender: "male"},
    {name:"Maria", age: 18, gender: "female"},
    {name:"Shuvo", age: 34, gender: "male"},
    {name:"Shams", age: 15, gender: "male"},
]
const filterAndMapNames = (persons)=>{

return persons.filter(person=> person.gender === "male").map(person => person.name)
}
const result1 = filterAndMapNames(persons)
console.log("Task1 answer: ",result1)

/* 2.Task: Object Manipulation
Create An Array Of Objects Representing Books 
With Properties Like Title, Author, And Year. 
Write A Function That Takes The Array And Returns
 A New Array With Only The Book Titles. Print The Result.*/

 const books = [
    { title: "Psycology of money", author: "Harper Lee", year: 1960 },
    { title: "Hablu Programming", author: "Jhankar Mahbub", year: 2018 },
    { title: "Rich Dad Poor Dad", author: "Rober kiyosaki", year: 2015 },
    { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 }
];

const getBookTitles=(books) =>{
    return books.map(book => book.title);
}

const result2 = getBookTitles(books);
console.log("Task2 answer: ",result2); 

/* 3.Task: Function Composition

Write Three Functions: One To Square A Number, 
One To Double A Number, And One To Add 5 To A Number.
Compose These Functions To Create A New Function
 That Squares A Number, Doubles The Result
 , And Then Adds 5.*/

const square = num => num * num;

const double = num => num * 2;

const addFive = num => num + 5;

const composeFunctions = num => addFive(double(square(num)));

const result3 = composeFunctions(3);
console.log("Task3 answer: ",result3); 

/* 4.Task: Sorting Objects

Create An Array Of Objects Representing Cars With Properties Like Make, 
Model, And Year. Write A Function To Sort The Array
 Of Cars By The Year Of Manufacture In Ascending Order. 
 Print The Sorted Array.*/

 const cars = [
    { make: "Toyota", model: "Camry", year: 2018 },
    { make: "Honda", model: "Civic", year: 2023 },
    { make: "Ford", model: "Mustang", year: 2024 },
    { make: "BMW", model: "X5", year: 2019 }
];
const sortByYearAscending=(cars) =>{
    return cars.sort((car1, car2) => car1.year - car2.year);
}

const result4 = sortByYearAscending(cars);
console.log("Task4 answer: ",result4);

/*5.Task: Find And Modify

Write A Function That Searches An Array Of Objects
 For A Specific Person By Name. If Found, 
 Modify Their Age Property. Print The Updated Array.*/
 const persons2 = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 32 }
];

function findAndUpdateAge(persons, name, newAge) {
    const updatedPersons = persons.map(person => {
        if (person.name === name) {
            return { ...person, age: newAge }; 
        }
        return person; 
    });

    return updatedPersons;
}

const result5 = findAndUpdateAge(persons2, "Charlie", 26);
console.log("Task5 answer: ",result5);

