/*3#:Define an object happiness within 5 properties. 
Each property should have default integer value, representing its priority. Then create a function that returns a list of property names sorted by priority (highest is on top).*/
const happiness ={
    property_1 : 7,
    property_2 : 4,
    property_3 : 6,
    property_4 : 1,
    property_5 : 78
    };
function task_3(obj){
    let sortArray=new Array();
    for(let property in obj){
        sortArray.push([property, obj[property]]);
    }
    sortArray.sort(function(a,b){
        return b[1]-a[1];
    })
    let newPropertyArr= new Array();
    for (let i=0; i<sortArray.length; i++){
        newPropertyArr[i]= sortArray[i][0]
    }
    return newPropertyArr;
}