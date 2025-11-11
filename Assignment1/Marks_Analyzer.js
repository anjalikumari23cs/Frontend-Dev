let marks=[40,10,30,50,60];
let sum=0;
let failcount=0;
for (let i of marks){
    sum+=i;
    if(i<40){
        failcount++;
    }
}
let average=sum/5;
let perc=(sum/500)*100;
console.log("Average Marks:",average);
console.log("Total Percentage:",perc);
 
let grade="";
if(perc>=90){
    grade="A+";
}
else if(perc>=75){
    grade="A";
}
else if(perc>=60){
    grade="B";
}
else if(perc>=40){
    grade="C"
}
else{
    grade="Fail";
}
console.log("Grades:",grade);
if(failcount>=2){
    console.log("Reapeat Year");
}