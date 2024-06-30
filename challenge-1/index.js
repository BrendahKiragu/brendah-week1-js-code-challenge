function studentGradeGenerator (){
  let marks = parseFloat(prompt('Enter student marks(0 - 100)'));

  //If any these is true, an alert pops with the message "invalid input..."
  while (isNaN(marks) || marks < 0 || marks> 100){
    alert("Invalid input. Please enter a number between 0 and 100");

   marks = parseFloat(prompt("Enter student marks (0 - 100)"));
   
  }

  let grade;
  if (marks > 79) {
    grade = 'A';
  }

  else if (marks >= 60 && marks <= 79){
    grade = 'B';
  }

 else if (marks >= 50 && marks <60 ){
    grade = 'C';
  }

  else if (marks >=40 && marks < 50){
    grade = 'D';
  }

  else{
    grade = 'E';
  }
  alert(`Marks: ${marks} \n Grade: ${grade}`)
}

//call the function to execute it.
studentGradeGenerator();