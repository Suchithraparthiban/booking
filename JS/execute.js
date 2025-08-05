// var b=80;
// console.log(b);
// b="smith";
// console.log(b);
// var b=true;
// console.log(b);
// var a;
// console.log(a);
// a=10;
// console.log(a);

//implicit coersion
// console.log(10+10);
// console.log("smith"+"phone")
// console.log("10"+10);
// console.log("5"-1);
// console.log("5"-true);
// console.log("5a"+10);
// console.log("5a"-10);

//simple alert
// let item=5;
// let item1=alert(`${item}item has been added`);
// console.log(item1);

//confirm alert
// let useraccept=confirm("please turn on the location");
// console.log(useraccept);
// console.log(typeof useraccept);

//prompt alert
// let useraccept=prompt("enter your age");
// console.log(useraccept);
// console.log(typeof useraccept);

//explicit coercion
// let useraccept= Number(prompt("enter your age"));
// console.log(useraccept);
// console.log(typeof useraccept);

// let num1=Number("5");
// console.log(num1);
// console.log(typeof num1);
// console.log(isNaN(num1));

// let num2=Number("switch");
// console.log("*****");

// let num1=Number(true);
// console.log(num1);
// console.log(typeof num1);

//number into string
// let str= String(25n);
// console.log(str);
// console.log(typeof str);

//other datatype to booleAN
// let BOL=Boolean(25)
// console.log(BOL);
// console.log(typeof BOL);
// console.log(String(25))
// console.log(24)

// let b=50;
// {
//     var a=60;
//     console.log(a);
// }
// console.log(a);
// console.log(window.a);
// console.log(this.a);

// var a=50;
// {
//     console.log(a);
//     let a;
//     a=60;
// }

// console.log(a);

// console.log(a);
// var a;
// var a=60;
// console.log(a);

// console.log(a);
// let a;
// var a=60;
// console.log(a);

// var a=10;
// {
//     a=25;
//     {
//         let a=45;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);

// var a=45;
// {
//     let a=80;
//     {
//     let a=90;
//     console.log(a);
//     console.log(window.a);
//     }
//     console.log(a);
// }

// var a1=50;
// {
//     let a=45;
//     var a1=95;
//     {
//         let a=55;
//         var a1=105;
//         console.log(a);
//         console.log(window.a1);

//     }
//     a="parent";
//     console.log(a);
//     console.log(a1);
//     console.log(this.a1);

// }
// console.log(a1);

// let gparent="declare and initialize";
// {
//     var child="declare band initialize";
//     {
//         gparent="re initialize";
//         {
//             child="re initialize";
//             {
//                 console.log(gparent);
//                 console.log(child);
//                 console.log(window.gparent);
//                 console.log(window.child);
//             }
//         }
//     }
// }

//function
// console.log("start");
// function sum(a,b){
//     console.log(a+b);}
//     sum(10,21);
//     sum(20,21);
//     console.log("end");

// console.log("start");
// function sub(){
//     var a=50;
//     var b=20;
//     console.log(a-b);

// }
// console.log(sub);
// sub();
// console.log(a);
// console.log(b);
// console.log("end");

// console.log("start");
// function mul(a,b){
//     console.log(a*b)
// }
// mul(10,2)
// console.log(mul);
// console.log(mul(5,2));
// console.log("end");
// console.log(a);

// Function expression

// console.log("strat");
// let compare=function(a1,b1){
// console.log(a1<=b1);
// console.log(a1>=b1);
// console.log(a1<b1);
// console.log(a1>b1);
// }
// compare(5,10);
// console.log(compare);
// compare=90;
// compare(30,20);
// console.log("end");

// console.log("strat");
// let task=function(a,b){
//     add(a,b);
//     sub(a,b);

// }
// function add(x,y){
//     console.log(x+y);

// }
// function sub(x1,y1){
//     console.log(x1-y1);

// }
// task(10,5);
// console.log("end");

// console.log("start");
// add(20,10);
// var add = function sum(a1,b1)
// {
//     console.log(a1+b1)
// }
// add(10,20)
// console.log("end");                               


// console.log("start");
// function sum()
// {
// for(i=0;i<3;i++){
//     for(j=0;j<3;j++){
//         if(i==j){
//             console.log("i");
//             return ;
//         }
//         console.log("inner loop");

//     }
//     console.log("outer loop");
// }
// }
// console.log(sum());
// console.log("j")

// console.log("start")
// var globe="global"
// function outer(){
// var a=10;
//   console.log(a,globe)
//   function inner(){
//     var b=20;
//     console.log(a)
//     console.log(b)
//     console.log(globe)
//   }
//   return inner()

// }
// outer()
// console.log("end");


// function teamlead(task,a,b){
// return task(a,b)
// }
// function d1(x,y) {

// }

console.log("start")
function createmultiplier(factor){
    return function(x){
        return x* factor;
    }
}
const double= createmultiplier(2)
console.log(double(5))
console.log(double)
console.log("end");

