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


let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(element,index,list) {
    if(element.marks>50){
      console.log(element);
    }
  }) 
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
    arr.forEach(function(element,index,list) {
      if(element.marks>50){
        console.log(element);
      }
    })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let output = arr.filter(function(element,index,list){
    return (element.marks>50);
  })
  console.log(output);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 4, name: "kishan", age: '22', marks: 95 },
    { id: 5, name: "gayle", age: '42', marks: 80 },
    { id: 6, name: "virat", age: '34', marks: 90 },
  ];

  let concatArr = arr.concat(arr2);
  console.log(concatArr);
}