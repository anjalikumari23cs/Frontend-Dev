let count=0;
function inc(){
    function upd(){
        count++;
        console.log("Increase: ",count);
    }
    upd();
}
function dcr(){
    function upd(){
        count--;
        console.log("decrease: ",count);
    }
    upd();
}
inc();
inc();
dcr();
inc();
dcr();
inc();