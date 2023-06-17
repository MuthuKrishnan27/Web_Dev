// async function x(){
//     try{
//         await Promise.reject("Rejected!");
//     }
//     catch (e){
//         console.log(e);
//     }
// }
// x();

//  x((a,b,c)=>{
//     return a+b+c;
//  },2,3,6)
//  function x(callback,a,b,c){
//     let str="";
//     setTimeout(()=>{
//         str +="x";
//     });
//     str+= callback(a,b,c)
//     console.log(str);
//  }

// (function(){
//     setTimeout(()=>console.log(1),2000);
//     console.log(2);
//     setTimeout(()=>console.log(3),0);
//     console.log(4);
// })();

// async function get(){
//     return await Promise.resolve("I made it! ");
// }
// const data = get();
// console.log(data);

// const myprom = ()=> Promise.resolve('I have resolved!');
// function fun1() {
//     myprom().then(res => console.log(res));
//     console.log('second');
// }
// async function fun2(){
//     console.log(await myprom());
//     console.log('second2');
// }
// fun1();
// fun2();

// for(var a=1;a<5;a++){
//     setTimeout(function(){
//         console.log(a);
//     },1000);
// }

// setTimeout(()=>{
//     console.log('a');
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('b');
//     })
// })

// const prom = new Promise((resolve,reject)=>{
//    resolve('a');
// })
// setTimeout(()=>{
//     console.log('b');
// })
// prom.then((msg)=>{
//     console.log(msg);
// })

// Promise.all
// const prom1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('a');
//     })   
//     })
// const prom2 = new Promise((resolve,reject)=>{
//     resolve('b');
//     })
// const prom3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('c');
//     },10)   
//     })
// Promise.all([prom1,prom2,prom3]).then((msg)=>{
//     console.log(msg);
// })

// Pormise.race
// const prom1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('a');
//     })   
//     })
// const prom2 = new Promise((resolve,reject)=>{
//     resolve('b');
//     })
// const prom3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('c');
//     },10)   
//     })
// Promise.race([prom1,prom2,prom3]).then((msg)=>{
//     console.log(msg);
// })

// var x = new Promise(()=>{});
// console.log(x);

// var abc = setInterval(counting,300);
// var ct = 0;
// function counting(){
//     console.log(ct++);
//     if(ct===5){
//         clearInterval(abc);
//     }
// }

let people = function(person,age){
    this.person = person;
    this.age = age;
    this.info = function(){
        console.log(this);
        setTimeout(()=>{
            console.log(this.person+" is "+this.age+" years old");
        },3000);
    }
}
let person1 = new people('John',21);
person1.info();