const myArr = [101,201,301,401,501];
//using splice method returns removed elements,index is  0th postion and count is 5 //
//Then slice method retutns selected elements in an array as new array,start position is 0 and end is 2// 
//new array is arrTwo contain left elements only//
const arrTwo = myArr.splice(0,5).slice(0,2);
// 0 th position of new array is assigned new value//
arrTwo[0] = "001";
//print new array//
console.log(arrTwo);



//ouput is ['001',201]