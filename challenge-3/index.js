// Function to calculate PAYE (Tax)
function calculatePAYE(grossSalary) {
    let tax;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1; 
    } else if (grossSalary <= 32333) {
        tax = grossSalary * 0.25;
    } else if (grossSalary <= 500000){
        tax = grossSalary * 0.30;
    }
    else if (grossSalary <= 800000) {
        tax = grossSalary * 0.325;  
    }
     else {
        tax = grossSalary * 0.35;  
    }
    return tax;
}
console.log(calculatePAYE(15000))

/*// Function to calculate NHIF deductions
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
} */


