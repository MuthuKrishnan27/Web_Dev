// let n = 24;
//   let l=0, r=100, ans=n;
//     while(l<=r){
//         let mid=Math.floor((l+r)/2);
//         if(mid*mid<=n){
//             ans=mid;
//             l=mid+1;
//         }
//         else{
//             r=mid-1;
//         }
//     }
// console.log(ans);

// console.log(a);
// let a;
// console.log(a);

// console.log(a);
// const a;
// console.log(a);

// console.log(a);
// var a;
// console.log(a);
// const lookup = {
//     'A': 'N','B': 'O','C': 'P','D': 'Q',
//     'E': 'R','F': 'S','G': 'T','H': 'U',
//     'I': 'V','J': 'W','K': 'X','L': 'Y',
//     'M': 'Z','N': 'A','O': 'B','P': 'C',
//     'Q': 'D','R': 'E','S': 'F','T': 'G',
//     'U': 'H','V': 'I','W': 'J','X': 'K',
//     'Y': 'L','Z': 'M', '?': '?', ',': ','
//   };
  
//   function rot13(encodedStr){
//      let decodedArr = ""; // Your Result goes here
//     // Only change code below this line
//           for(let i=0;i<encodedStr.length;i++){
//           let str = encodedStr.charAt(i);
//           if(lookup[str]===undefined){
//               decodedArr+=str;
//           }
//           else{
//               decodedArr+=lookup[str];
//           }
//       }
//     return decodedArr;//return decodedArr
//   }
  
//   let res = rot13("SERR YBIR? NPPVBWBO").toString();
//   console.log(res)
  // You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
  
   // console.log(rot13("SERR YBIR? NPPVBWBO"));
  
//   module.exports = rot13;

// a = [1,2,3,4,5];

// let output = a.map(function(element,index){
//   return element;
// });
// console.log(output)

// let arr = [
//   { id: 1, name: "john", age: "18", marks: 80 },
//   { id: 2, name: "jack", age: "20", marks: 85 },
//   { id: 3, name: "karen", age: "19", marks: 35 },
// ];


// let arr = [
//   { id: 1, name: "john", age: "18", marks: 80 },
//   { id: 2, name: "jack", age: "20", marks: 85 },
//   { id: 3, name: "karen", age: "19", marks: 35 },
// ];

// function PrintStudentswithMap() {
//   //Write your code here , just console.log
//   arr.map(function(element,index,list) {
//     if(element.marks>50){
//       console.log(element);
//     }
//   }) 
// }

// function PrintStudentsbyForEach() {
//   //Write your code here , just console.log
//     arr.forEach(function(element,index,list) {
//       if(element.marks>50){
//         console.log(element);
//       }
//     })
// }

// function addData() {
//   //Write your code here, just console.log
//   arr.push({id:4,name:"susan",age:"20",marks:45});
//   console.log(arr);
// }

// function removeFailedStudent() {
//   //Write your code here, just console.log
//   let output = arr.filter(function(element,index,list){
//     return (element.marks>50);
//   })
//   console.log(output);
// }

// function concatenateArray() {
//   //Write your code here, just console.log
//   let arr2 = [
//     { id: 4, name: "kishan", age: '22', marks: 95 },
//     { id: 5, name: "gayle", age: '42', marks: 80 },
//     { id: 6, name: "virat", age: '34', marks: 90 },
//   ];

//   let concatArr = arr.concat(arr2);
//   console.log(concatArr);
// }

// class prom{
//   constructor(executor){
//     let f1 = ()=>{
//       console.log("inside f1");
//     }
//     let f2 = ()=>{
//     console.log("inside f2");
//     }
//   executor(f1,f2);
// }
// }

// let executor = (a,b)=>{
//   a();
//   b();
// }

// let Prom1 = new prom(executor);


// let executor = (a,b)=>{
//   a();
// }
// let prom = new Promise(executor);

// function letterCombinations(input_digit) {
//   //Complete the function
//   let map = ["0","1","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
//   let arr = [];
// 	func(input_digit,map,arr,"");
//   arr.sort();
//   return arr;
// }

// function func(input_digit,map,arr,asf){
// 	if(input_digit.length===0){
//     arr.push(asf);
//     return;
//   }
//   let digit = input_digit.charAt(0);
//   let str = map[digit];
//   for(let i=0;i<str.length;i++){
//     func(input_digit.substring(1),map,arr,asf+str.charAt(i));
//   }
// }

// console.log(letterCombinations("999"));

// MCQ
// {
//   let msg = "hello";
//   console.log(msg);
// }
// console.log(msg);

// var scope = "js scope";
// let a = function p(){
//   var scope = "sc";
//   function ch(){
//     return scope;
//   }
//   return ch();
// };
// console.log(a());

// function greeting(){
//   throw 'Hello World!';
// }
// function hi(){
//   try{
//     let data = greeting();
//     console.log('It worked',data);
//   }
//   catch(error){
//     console.log('oh no ',error);
//   }
// }
// hi();

// function greet(user){
//   var user = "dear "+user;
//   return function(greeting="hello! "){
//     console.log(greeting+user);
//   }
// }

// var hello = greet("saloni");
// hello();
function volume_sphere() {
  //Write your code here
  let r = document.getElementById("radius").value;
  let volume = document.getElementById("volume");
  let data = (4/3)*(3.14)*r*r*r;
  let span = document.createElement("span");
  span.innerText = data;
  volume.appendChild(span);
  console.log(span);
} 
// let submit = document.getElementById("submit");
// submit.addEventListener("click",volume_sphere);
// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
