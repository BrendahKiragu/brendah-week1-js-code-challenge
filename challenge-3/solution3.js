// Function for calculating PAYE(tax)
function calculatePAYE(grossSalary) {
    let tax = 0;

    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        tax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.30);
    } else if (grossSalary <= 800000) {
        tax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((grossSalary - 500000) * 0.325);
    } else {
        tax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((800000 - 500000) * 0.325) + ((grossSalary - 800000) * 0.35);
    }

    return tax;
}
//console.log(calculatePAYE(50000))

// Function for calculating NHIF deductions
function calculateNHIF(grossSalary) {
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}
//console.log(calculateNHIF(18000))

// Function to calculate NSSF deductions
function calculateNSSF(grossSalary) {
    //The standard rate is 6% of gross salary, with a maximum of Ksh. 1080
    return Math.min(grossSalary * 0.06, 1080);
}

//console.log(calculateNSSF(70000))

// Function to calculate the net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let paye = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let netSalary = grossSalary - paye - nhif - nssf;

    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
} 

const displaySalaryDetails = (basicSalary, benefits) => {
    const details = calculateNetSalary(basicSalary, benefits);

    console.log(`Gross Salary: Ksh ${details.grossSalary.toFixed(2)}`);
    console.log(`PAYE (Tax): Ksh ${details.paye.toFixed(2)}`);
    console.log(`NHIF Deductions: Ksh ${details.nhif.toFixed(2)}`);
    console.log(`NSSF Deductions: Ksh ${details.nssf.toFixed(2)}`);
    console.log(`Net Salary: Ksh ${details.netSalary.toFixed(2)}`);
};

// Get user input for basic salary and benefits
//parseFloat convert the input(string) to a number
const basicSalary = parseFloat(prompt('Enter basic salary:'));
const benefits = parseFloat(prompt('Enter benefits:'));

// Calculate and display the salary details
const salaryDetails = calculateNetSalary(basicSalary, benefits);

alert(`Your salary details are:\n
Gross Salary: Ksh ${salaryDetails.grossSalary.toFixed(2)}\n
PAYE (Tax): Ksh ${salaryDetails.paye.toFixed(2)}\n
NHIF Deductions: Ksh ${salaryDetails.nhif.toFixed(2)}\n
NSSF Deductions: Ksh ${salaryDetails.nssf.toFixed(2)}\n
Net Salary: Ksh ${salaryDetails.netSalary.toFixed(2)}`);