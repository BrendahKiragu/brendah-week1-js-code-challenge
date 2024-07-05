//function declaration and variables assignment
function checkSpeed(speed) { 
  const speedLimit = 70;
    const kmPerDemeritPoint = 5; 

    if (speed <= speedLimit) {
        return "Ok";
    }  else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
           return "License suspended";
        } else {
            return`Points: ${demeritPoints}`;
        }
    }
}


// Prompts for input(speed) and converts it to a floating-point number
let userSpeed = parseFloat(prompt("Enter speed"));

if(isNaN(userSpeed) || userSpeed< 0){
  alert("Please enter a valid number for speed.");  

  userSpeed = parseFloat(prompt("Enter speed"));
} else{
    alert(checkSpeed(userSpeed));
}


