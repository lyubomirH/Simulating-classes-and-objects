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

// Функция за добавяне на студент
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    let grade = parseFloat(document.getElementById('grade').value);
    const numberInClass = parseInt(document.getElementById('numberInClass').value);

    // Проверка за оценка в диапазона от 2 до 6
    if (grade < 2 || grade > 6) {
        alert('Оценката трябва да бъде между 2 и 6.');
        return;
    }

    // Проверка за максимум две цифри след десетичната запетая
    const gradeRegex = /^\d(\.\d{1,2})?$/;
    if (!gradeRegex.test(grade)) {
        alert('Оценката трябва да има максимум две цифри след десетичната запетая.');
        return;
    }

    // Проверка за положителен номер в класа
    if (numberInClass <= 0) {
        alert('Номерът в класа трябва да бъде положително число.');
        return;
    }

    let isNumberDuplicate = students.some(student => student.numberInClass === numberInClass);

    if (isNumberDuplicate) {
        alert('Този номер в класа вече съществува!');
        return;
    }

    let student = new Student(firstName, lastName, grade, numberInClass);
    students.push(student);
    updateTable();
    document.getElementById('studentForm').reset();
});

// Функция за обновяване на таблицата с всички студенти
function updateTable() {
    const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    students.forEach(student => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerText = student.getFullName();
        row.insertCell(1).innerText = student.grade;
        row.insertCell(2).innerText = student.numberInClass;
    });
}

// Функция за сортиране на студентите по име
function sortStudentsByName() {
    students.sort((a, b) => a.getFullName().localeCompare(b.getFullName()));
    updateTable();
}

// Функция за сортиране на студентите по номер
function sortStudentsByNumber() {
    students.sort((a, b) => a.numberInClass - b.numberInClass);
    updateTable();
}

// Функция за сортиране на студентите по оценка
function sortStudentsByGrade() {
    students.sort((a, b) => b.grade - a.grade);
    updateTable();
}
