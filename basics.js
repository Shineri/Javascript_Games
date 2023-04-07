



//array

const array = ['Siru','Nanu','kookoo'];
console.log(array);
array.push('Payal');
const next='puppy';
const index=array.indexOf(next);
if(index==-1){
console.log('Data not found');
const save=array.splice(array.length-1,1,next)
}

console.log(array);


//map method in array
const numbers=[2,6,1,7,77];
// let newarr=array.map((element,index,arr) =>{
// return element==0;
// });
console.log(numbers);
//console.log(newarr);

//double every element of numbers and return only those which are graeter than 10;

const resultArray = numbers.map((element)=>{
  return element*2;
   
}).filter((value)=>{
    return value>10;
});
console.log(resultArray);






//use of chaining

let arr= [3,4,5,8,9];

let result = arr.map((element)=> element*2).filter((element)=> element>11).reduce((accumulator,element)=>
accumulator+=element
);
console.log(arr);
console.log(result);


let tobeFlat=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,12,13,14,89]
]
let flatArr = tobeFlat.reduce((accum,currval)=>{
    return accum.concat(currval);
})

console.log(flatArr);



//string


//  1. indexOf and search
let myname ="Payal Chaudhary";
console.log(myname.indexOf("u",4));
//but you cant search for the same string in a string 
//with search function but you can with indexOf method of string

// 2. for extracting a part of string
// slice(start,end) substring(start,end), substr(start,length)

console.log(myname.slice(1,-1));  //include start buit not end
//negative is where to end after leaving those amount of characters from end
console.log(myname.substr(2,4));


//replace method

let afterreplace=myname.replace("Chaudhary","Singh");
console.log(afterreplace);




