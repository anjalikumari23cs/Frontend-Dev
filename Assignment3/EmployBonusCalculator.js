"use strict";
const employees = [
{ name: "Amit", salary: "45000", years: "5" },
{ name: "Sara", salary: "38000", years: "2" },
{ name: "Kiran", salary: "52000", years: "7" }
];
for(let i=0; i<employees.length; i++){
    let bonus = 0;  
    let salary = parseFloat(employees[i].salary);
    let years = parseInt(employees[i].years);   
    if(years > 3){
        bonus = salary * 0.1; 
    }
    else{
        bonus = salary * 0.05;
    }
    let totalCompensation = salary + bonus;
    console.log(`Employee: ${employees[i].name}`);
    console.log(`Salary: $${salary.toFixed(2)}`);
    console.log(`Years of Service: ${years}`);
    console.log(`Bonus: $${bonus.toFixed(2)}`);
    console.log(`Total Compensation: $${totalCompensation.toFixed(2)}`);
    console.log('-----------------------------');
}
