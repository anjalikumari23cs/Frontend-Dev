function getbug(){
    return new Promise((resolve,reject)=>{
        const succ=  Math.random()<0.8;
        setTimeout(()=>{
            if(succ){
                resolve("UI Glitch in Bug Tracker");
            }
            else{
                reject("Error fetching bug");
            }
        },1000);
    });
}
getbug()
.then((bug)=>{
    console.log("Bug fetched:"); 
    console.table(bug);
})
.catch((error)=>{
    console.log(error);
});