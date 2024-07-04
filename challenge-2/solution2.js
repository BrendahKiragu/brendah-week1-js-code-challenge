//function declaration and variables assignment
function checkSpeed(speed) {
    let speed = prompt('Enter speed(>= 0)');
    while (isNaN(speed) || speed < 0){
    alert("Invalid input. Please enter a number >=0");

   speed = prompt("Enter speed (>=0)");
   
  }
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

//function call and input an argument inside parenthesis 
checkSpeed(90);
