//part:2...... multi dimensional Array and tuples - student grades challenge:..........
// you are tasked with creating the student grading system implement function and logic to manage students grades effectively.
// define a typscript type alias named student to represent a student with the following properties .
// ... name (string) the name of the student 
// ... grades (number[] ) an array of grades of diffrent subject
// create an array named students containing at least three students object . each student object should include a name an array of grades .
// impliment a function named calculateAverageGrades that takes the student grades as input and returns the average grades for that student 
// display each student name and average grades iterates throug the student array  calculate the average grade for each student using the calculateAverageGrades function and point their name and grades 



// a type alias for a student
type Student = {
    name: string;
    grades: number[];
};

// an Array containing student objects
const students: Student[] = [
    { name: "uzma", grades: [89, 99, 95] },
    { name: "maham", grades: [90, 92, 80] },
    { name: "yusra", grades: [90, 99, 95] }
];

// using for loop to calculate average grade..........................
function calculateAverageGrade(student: Student): number {
    let sum = 0; //intialize variable

    for (let i = 0; i < student.grades.length; i++) {
        sum += student.grades[i];
    }
    return sum / student.grades.length; 
}

// Function to display the name and average grade of each student
function displayStudentGrades(students: Student[]): void {
    students.forEach(student => {
        const averageGrade = calculateAverageGrade(student);
        console.log(`${student.name}'s average grade: ${averageGrade.toFixed(2)}`);
    });
}

// Calculate and display average grades for each student
displayStudentGrades(students);       