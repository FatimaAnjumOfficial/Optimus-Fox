//=======================Assignment2=======================

const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

//------------------------Problem 1------------------------
console.log(" ");
console.log("-------------Problem-1:---------------");
console.log(" ");

const newStudents = [
  { name: "Eve", grade: 88 },
  { name: "Frank", grade: 92 },
];

const combineStudents = students.concat(newStudents);
console.log(combineStudents);

//------------------------Problem 2------------------------
console.log(" ");
console.log("-------------Problem-2:---------------");
console.log(" ");

const iterator = students.entries();

for (let [index, value] of iterator) {
  console.log("Index: ", index);
  console.log("Name: ", value.name);
  console.log("Grade: ", value.grade);
}

//------------------------Problem 3------------------------
console.log(" ");
console.log("-------------Problem-3:---------------");
console.log(" ");

const check = students.every((student) => student.grade >= 70);
console.log(check);

//------------------------Problem 4------------------------
console.log(" ");
console.log("-------------Problem-4:---------------");
console.log(" ");

const replaceGrade = students.fill({ name: "", grade: 100 });
console.log(replaceGrade);

//------------------------Problem 5------------------------
console.log(" ");
console.log("-------------Problem-5:---------------");
console.log(" ");

const newStudentArray = students.filter((student) => student.grade > 90);
console.log(newStudentArray);

//------------------------Problem 6------------------------
console.log(" ");
console.log("-------------Problem-6:---------------");
console.log(" ");

function nameCharlie(students) {
  if (students.name == "Charlie") {
    return students.grade;
  }
}

const find = students.find(nameCharlie);
console.log(find);

//------------------------Problem 7------------------------
console.log(" ");
console.log("-------------Problem-7:---------------");
console.log(" ");

const indexFound = students.findIndex((student) => student.grade == 85);
console.log(indexFound);

//------------------------Problem 8------------------------
console.log(" ");
console.log("-------------Problem-8:---------------");
console.log(" ");

const nestedArray = [[1, 2], [3, 4, 5], [6]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray);

//------------------------Problem 9------------------------
console.log(" ");
console.log("-------------Problem-9:---------------");
console.log(" ");

const result = students.flatMap((student) =>
  student.grade >= 70 ? true : false
);
console.log(result);

//------------------------Problem 10-----------------------
console.log(" ");
console.log("-------------Problem-10:---------------");
console.log(" ");

const studentName = students.forEach((student) => student.name);
console.log(studentName);

//------------------------Problem 11-----------------------
console.log(" ");
console.log("-------------Problem-11:---------------");
console.log(" ");

const string = "hello world";
const newArray = Array.from(string);
console.log(newArray);

//------------------------Problem 12-----------------------
console.log(" ");
console.log("-------------Problem-12:---------------");
console.log(" ");

const checkName = students.includes((student) => student.name == "Eve");
console.log(checkName);

//------------------------Problem 13-----------------------
console.log(" ");
console.log("-------------Problem-13:---------------");
console.log(" ");

/*function index(students)
{
    for(let [index, student] of students)
    {
        if(student.grade == 85)
        {
            return index;
        }
    }
}
const indexfound = index(students);*/

const indexOfBob = students.findIndex((student) => student.name === "Bob");
console.log(indexOfBob);

//------------------------Problem 14-----------------------
console.log(" ");
console.log("-------------Problem-14:---------------");
console.log(" ");

const grades = students.map((student) => student.grade);
console.log(grades);

//------------------------Problem 15-----------------------
console.log(" ");
console.log("-------------Problem-15:---------------");
console.log(" ");

const newStudent = { name: "Grace", grade: 87 };
const array = students.push(newStudent);
console.log(array);

//------------------------Problem 16-----------------------
console.log(" ");
console.log("-------------Problem-16:---------------");
console.log(" ");

const removedStudent = students.pop();
console.log(removedStudent);

//------------------------Problem 17-----------------------
console.log(" ");
console.log("-------------Problem-17:---------------");
console.log(" ");

const reverse = students.reverse();
console.log(reverse);

//------------------------Problem 18-----------------------
console.log(" ");
console.log("-------------Problem-18:---------------");
console.log(" ");

const remove1stStudent = students.shift();
console.log(remove1stStudent);

//------------------------Problem 19-----------------------
console.log(" ");
console.log("-------------Problem-19:---------------");
console.log(" ");

const totalGrades = students.reduce((acc, student) => acc + student.grade, 0);
const averageGrade = totalGrades / students.length;
console.log(averageGrade);
