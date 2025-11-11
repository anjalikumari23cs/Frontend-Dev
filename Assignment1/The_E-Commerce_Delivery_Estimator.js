let orderAmount=450;
let ispremium=false;
let isremote=true;
let deliverycharge=0;
if(orderAmount<500 && !ispremium){
    deliverycharge=50;
}
let deliverytime=3;
if(isremote){
    deliverytime+=2;
}
let totalcharge=orderAmount+deliverycharge;
console.log("Total Charges: ",totalcharge);
console.log("Delivery time: ",deliverytime);