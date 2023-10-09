//DESCRIPTION:
//Fix the two spelling errors in the code so the netWorkingCapital calculation works.
//Check the spelling of the two variables used in the netWorkingCapital calculation, the console output should show that "Net working capital is: 2".
//There should be no instances of misspelled variables in the code.
//The receivables variable should be declared and used properly in the code.
//There should be no instances of misspelled variables in the code.
//The payables variable should be declared and used properly in the code.

//SOLUTION:

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);