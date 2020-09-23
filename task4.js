/*Implement a function addWithDelay() which will work with parameters according to the conditions below:
•	If all parameters are positive numbers, it should return within 1000ms timeframe a Promise containing a sum of all the numbers provided as parameters 
•	If any parameter is represented by a negative number, function should return an error message “Error! Some parameter is a negative number!" using “reject()” option
*/
function addWithDelay(){
    let positiveNumber=1;
    let summ=0;
    for (i=0; i<arguments.length;i++){
        if (arguments[i]<0) {
            positiveNumber=0
        }
    }
    
    const newPromise= new Promise((resolve, reject)=>{
        if (positiveNumber>0){
            for (i=0; i<arguments.length;i++){
                summ+=arguments[i];
            }
            setTimeout(()=>{
            resolve(summ);}
            ,1000)
        } else{
            let message= new Error('Error! Some parameter is a negative number!');
            reject(message);
        }
    });

    return (newPromise
    .then(summ => console.log(summ))
    .catch(function (error) {

        console.log(error.message);}))
}
async function addWithDelayRun(){
    await addWithDelay(1,3,4,-5,6);
}

addWithDelayRun();