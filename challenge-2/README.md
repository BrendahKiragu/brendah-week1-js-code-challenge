Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

# solution explained

# step1: function declaration
The function is declared with a function name =checkSpeed and assigned one parameter(speed);

# step2: variables declaration
Two variables 
 const speedLimit(represents speed limit in km/hr) and
 const kmPerDemeritPoint(represents how many kms over the speed limit results in one demerit point) are declared and assigned values;

# step3: speed checking logic
A speed checking logic using if statement is established as follows:
1) If the speed is less than speedLimit (70 km/h), it logs "Ok", indicating the driver is within the speed limit.

2) If the speed is greater than or equal to speedLimit(speed >= 70), further checks are performed to calculate demerit points.
# check1: 
If the speed exceeds the speedLimit, this ->(const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);calculates how many demerit points the driver accumulates. It subtracts speedLimit from speed, divides the result by kmPerDemeritPoint (5 km per demerit point), and takes the floor of the division to get the whole number of demerit points.
# check2:
If (demeritPoints >=12), it logs "License suspended", indicating that the driver's license will be suspended due to excessive speeding.
Else, it logs `Points: ${demeritPoints}` followed by the number of demerit points accumulated, indicating how close the driver is to having their license suspended.



# call the function to test it.
checkSpeed(90);  // Output: Points: 4
checkSpeed(140); // Output: License suspended
checkSpeed(69);  // Output: Ok