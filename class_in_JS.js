class Student {
    constructor(firstName, lastName, grade, numberInClass) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.numberInClass = numberInClass;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let students = [];

function addStudent(firstName, lastName, grade, numberInClass) {
    let isNumberDuplicate = students.some(student => student.numberInClass === numberInClass);

    if (isNumberDuplicate) {
        console.log(`This ID number already exists. Please try again.`);
        return;
    }

    let student = new Student(firstName, lastName, grade, numberInClass);
    students.push(student);
    console.log(`Student ${student.getFullName()} has been successfully added!`);
}

function findStudentByName(name) {
    let foundStudents = students.filter(student => student.getFullName().includes(name));
    if (foundStudents.length === 0) {
        console.log(`No students found with the name "${name}".`);
    } else {
        console.log(`Found Students:`);
        foundStudents.forEach(student => {
            console.log(`- ${student.getFullName()}, Grade: ${student.grade}, ID: ${student.numberInClass}`);
        });
    }
}

function sortStudentsByName() {
    return students.sort((a, b) => a.getFullName().localeCompare(b.getFullName()));
}

function sortStudentsByNumber() {
    return students.sort((a, b) => a.numberInClass - b.numberInClass);
}

function sortStudentsByGrade() {
    return students.sort((a, b) => b.grade - a.grade);
}

function startInteractiveMode() {
    const prompt = require('prompt-sync')();

    while (true) {
        console.log("\nAvailable Commands:");
        console.log("1. 'add' - Add a new student");
        console.log("2. 'sortName' - Sort students by name");
        console.log("3. 'sortNumber' - Sort students by ID number");
        console.log("4. 'sortGrade' - Sort students by grade");
        console.log("5. 'exit' - Exit the program");

        let command = prompt("Enter a command: ").trim().toLowerCase();

        if (command === "add") {
            let firstName = prompt("Enter first name: ");
            let lastName = prompt("Enter last name: ");
            let grade = parseInt(prompt("Enter grade: "));
            let numberInClass = parseInt(prompt("Enter student ID number: "));
            addStudent(firstName, lastName, grade, numberInClass);
        } 
        else if (command === "sortname") {
            let sortedStudents = sortStudentsByName();
            console.log("Sorted Students by Name:");
            sortedStudents.forEach(student => {
                console.log(`${student.getFullName()}, ID: ${student.numberInClass}, Grade: ${student.grade}`);
            });
        } 
        else if (command === "sortnumber") {
            let sortedStudents = sortStudentsByNumber();
            console.log("Sorted Students by ID Number:");
            sortedStudents.forEach(student => {
                console.log(`${student.getFullName()}, ID: ${student.numberInClass}, Grade: ${student.grade}`);
            });
        }
        else if (command === "sortgrade") {
            let sortedStudents = sortStudentsByGrade();
            console.log("Sorted Students by Grade:");
            sortedStudents.forEach(student => {
                console.log(`${student.getFullName()}, ID: ${student.numberInClass}, Grade: ${student.grade}`);
            });
        }
        else if (command === "exit") {
            console.log("Exiting the program.");
            break;
        }
        else {
            console.log("Unknown command. Please try again.");
        }
    }
}

startInteractiveMode();
