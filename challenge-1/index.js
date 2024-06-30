function studentGradeGenerator (){
  let marks = parseFloat(prompt('Enter student marks(0 - 100)'))

  while (isNaN(marks) || marks < 0 || marks> 100){
    alert("Invalid input. Please enter a number between 0 and 100")
   // marks = parseFloat(prompt("Enter student marks (0 - 100)"))
    marks();
  }

  let grade;
  if (marks > 79) {
    grade = 'A'
  }

  else if (marks >= 60 && marks <= 79){
    grade = 'B'
  }

 else if (marks < 60 && marks >= 49){
    grade = 'C'
  }

  else if (marks >= 40 && marks < 49){
    grade = 'D'
  }

  else{
    grade = 'E'
  }
  alert(`Marks: ${marks} \n Grade: ${grade}`)
}
console.log (studentGradeGenerator())