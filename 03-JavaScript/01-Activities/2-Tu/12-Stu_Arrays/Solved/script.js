// Creates an array containing names of five students in the class
var students;

console.log("Welcome to the class " + students);

students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

console.log("Welcome to the class " + students[0]);

// Logs length of the students array
console.log(students.length);

// Now, write a console log introducing each student
console.log("Welcome to the class " + students[0]);
console.log("Welcome to the class " + students[1]);
console.log("Welcome to the class " + students[2]);
console.log("Welcome to the class " + students[3]);
console.log("Welcome to the class " + students[4]);
   
// Replace the first student in the array with a new student Bob.
var students_orig = students[0];
students[0] = "Bob";

// Use your Javascript to check if "Bob" is the first element in the array 
if (students[0] !== students_orig) {
    console.log(students_orig, "has left the building, say hello to", students[0] + " who has joined our class!");
} 
