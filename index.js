var x =[1,2,3,4,5];
var y=[6,7,8,9,10];
var z= x.concat(y);
console.log(z);
let arrayofArrays =[];
function splitArray(array)
{
    while(array.length>0)
       {
        let arrayElement=array.splice(0,1);
        arrayofArrays.push(arrayElement);
        }
        return arrayofArrays;
}
console.log(splitArray(z));