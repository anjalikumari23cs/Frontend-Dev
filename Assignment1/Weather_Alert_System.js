let temp=28;
let humidity=50;
let windspeed=40;
if(temp>35 && humidity>70){
    console.log("Cancel: Heat Alert");
}
else if(temp<10 && windspeed>40){
    console.log("Cancel:Cold/Windy Alert");
}
else{
    console.log("Event Approved");
}

if(temp<20){
    console.log("Wear Jacket");
}
else if(temp<30 && temp>=20){
    console.log("Confortable");
}
else if(temp>=30){
    console.log("Stay Hyderated");
}