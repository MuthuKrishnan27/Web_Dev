// alert("Alert!!!");
// var a = prompt("a: ");
// ans = function oddeven(a){
//     if(a%2===0){
//         return "even"
//     }
//     else{
//         return "odd"
//     }
// }

// console.log(ans(a)); 

// hoisted();
// function hoisted() 
// { 
//     console.log('Hoisted'); 
// }

// var i,j;
// for(var i=0,j=10;i<5;++i){
//     console.log("Hello");
// }

// var a=10;
// function f(){
//     var a = 20;
// }
// f();
// console.log(a);


// var a=10;
// function f(){
//     var a = 20;
//     console.log(a);
// }
// f();

// var a = 1
// function b(){
//     a=10;
//     return;
//     function a(){}
// }
// b();
// console.log(a);

// function mul(a,b){
//     return a*b;
// };
// console.log(mul);

// var a;
// console.log(a);

// function demo(){
//     console.log(x);
//     var x=10;
// }
// demo();

// Strings 
// var str = "Mathematics";
// console.log(str.slice(3));

let n = 12321;
let t=n;
let res=0;
while(t!=0){
    let rem = t%10;
    res=(res*10)+rem;
    t=parseInt(t/10);
}
console.log(res);