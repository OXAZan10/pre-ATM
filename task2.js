//2:Create a function(s) that returns total amount of seconds starting from the beginning of today and till now.
function task_2(){
    let today= new Date();
    let totalAmountOfSecond=today.getHours()*60*100+today.getMinutes()*100+today.getSeconds();
    return totalAmountOfSecond;
}