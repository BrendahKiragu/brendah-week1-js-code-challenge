//declares the function
//'marks' prompts the user to enter student marks and converts it to a floating-point number
function studentGradeGenerator (){
  let marks = prompt('Enter student marks(0 - 100)');

  //'while loop' repeatedly prompts the user until valid input is provided
  // 'alert' alerts the user if the input is invalid and prompts again till a valid input is provided.
  while (isNaN(marks) || marks < 0 || marks> 100){
    alert("Invalid input. Please enter a number between 0 and 100");

   marks = prompt("Enter student marks (0 - 100)");
   
  }

//Initializes a variable for storing grade based on marks
  let grade;

  //assigns grade based on the provided marks
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

  //displays the marks and corresponding grade using an alert
  alert(`Marks: ${marks} \n Grade: ${grade}`)
}

//call the function to execute it.
studentGradeGenerator();