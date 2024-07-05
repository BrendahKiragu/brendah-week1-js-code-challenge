Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

Solution Explained:
# step1: Input Prompt
The function starts by prompting the user to enter marks between 0 and 100. 
It uses parseFloat to convert the user input to a floating-point number.

# step2: Validation Loop:
The while loop checks if the entered marks are invalid,that is, not a number (isNaN(marks)) or outside the range of 0 to 100.
If invalid, it alerts the user and prompts again until a valid input is entered.

# step3: Grade Calculation:
The function then assigns a grade based on the marks:
A: Marks above 79
B: Marks from 60 to 79
C: Marks from 50 to 59
D: Marks from 40 to 49
E: Marks below 40

# step4: Output:
The result is now shown using alert to display the marks and corresponding grade.

# Running the function. 
 To run the function:
 1. Open the solution1.html in a browser.
 
