//1:Create a function(s) that fulfills array with 10 random integer values and returns a multiply of 3 greatest values. 

function task_1(){
    let array= new Array();
    for (let i=0; i<10; i++){
        array[i]=Math.floor(Math.random()*11);
        
    }
    array.sort(function(a,b){
        return a-b;
    });
    console.log (array);
    let multiplyOfgreatest=1;
    for (let i=7; i<10;i++){
        multiplyOfgreatest*=array[i];
    }
    console. log(multiplyOfgreatest);
    return multiplyOfgreatest;
}