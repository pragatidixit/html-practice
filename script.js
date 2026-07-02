// console.log("HII"); //gives output on the console
// // alert("Emergency"); // shows a window popup showing the message

// console.log(num);//undefined
// var num=14; // value can be changed and it is hosited and function scope
// console.log(num);//14


// // What is hosisting???
// //functions or variable jo var type se declare kiye jate hai  jab js interuppt ka rrha hota hai js then woh global scope mein move kar diye jate hai


// //undefined used when we want to tell that the variable or anything exists but not in the present place
// //not defined when it does not exists at all

// // console.log(num2);// refrence error
// let num2=5; //block scope not hoisted can be reassigned
// console.log(num2);


// // console.log(num3);// refrence error
// const num3=6; //block scope not hoisted cannot be reassigned
// // num3=7; // type error
// console.log(num3);


// let a=3;
// let b=4;

// // Arithmetic Operators
// console.log("Arithemetic Operators");
// console.log(a+b);  
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b); //(3^4)

// //comparison Operator gives true or false
// console.log("Comparison Operator");
// console.log(a==b);//checks only value
// console.log(a===b);//checks type as well data type
// console.log(a!=b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);

// //== ===
// console.log("local comparison");
// console.log(5==5);
// console.log(5=="5");
// console.log(5!="5");

// console.log("strict comparison");
// console.log(5===5);
// console.log(5==="5");
// console.log(5!=="5");


// //logical operator 
// console.log("Logical Operator");
// console.log(5<3 && 4>3);
// console.log(5<3 || 4>3);
// console.log(!(5>3));

// //Short-circuiting means JavaScript evaluates expressions from left to right and stops the moment the outcome is certain, returning the actual value it stopped on.
// //  When setting defaults, the Logical OR (||) operator short-circuits and uses the right-side fallback if the left side is any falsy value, including 0, false, or an empty string "". 
// // In contrast, the Nullish Coalescing (??) operator strictly limits its short-circuiting fallback to missing data, only triggering if the left side is exactly null or undefined.
// // For example, imagine a game settings object: const config = { volume: 0, showTutorial: false, nickname: "" };. 
// // If you try to extract these values using the OR operator, you create bugs: config.volume || 50 short-circuits to 50 because 0 is falsy, completely erasing the user's choice of silence. Similarly, config.showTutorial || true evaluates to true, and config.nickname || "Guest" evaluates to "Guest". 
// // By switching to the nullish operator, JavaScript protects these valid choices: config.volume ?? 50 safely stops and returns 0, config.showTutorial ?? true returns false, and config.nickname ?? "Guest" returns "", because none of the original values are null or undefined.


// //Assignment operators
// // =,+=,-=,*=,/=,++,--


// //Control Flow
// //if/else if/else
// //switch/case

// console.log("control flow")
// let score=34;
// if(score>33)
// {
//     console.log("pass");
// }
// else
// {
//     console.log("fail");
// }


// console.log("switch")

// let day="fri";
//  switch(day)
//  {
//  case "mon":
//  case "fri":
//     console.log("work");
//     break;
// case "sat":
//     console.log("holiday");
//     break;
// default:
//     console.log("idk");
//  }


// console.log("Ternary Operators")
// let mmm=67;
// let numi=6;
// let msg= mmm>79?console.log("pass"):console.log("fail");
// let paa=numi>5?console.log("big"):console.log("small");

// //Short Curcuiting
// // const msg=scoore>=60?"pass":"fail";
// // const name=User.name||"guest";

// let group=13;
// if(group%2==0||group==15)
//     console.log("You are allowed");
// else
//     console.log("You are not allowed");


// console.log("for loop")

// for(let i=1;i<=5;i++)
// {
//     let row=""
//     for(let j=0;j<i;j++)
//     {
//         row+="*";
//     }
//     console.log(row);
// }


// console.log("while loop")
// let i=1;
// while(i<11)
// {
//     console.log(5*i);
//     i++;
// }

// console.log("do..while loop")
// let j=0;
// do{
//     console.log(j++);
// }while(j<8);


// //array iterations(for of)
// const arr=[1,2,3];
// for(let num of arr)
// {
//     console.log(num);
// }


// //for in (object keys)
// const obj={a:1,b:2};
// for(let key in obj)
// {
//     console.log(key,obj[key]);
// }


// //for each array method

// [1,2,3].forEach((num,i)=>{
//     console.log(i,num);
// });


// console.log("function")

// function info(name,college,city)
// {
//     console.log(`Hii My name is ${name}.I study in ${college}.i am from ${city}`)
// }

// info("pa","hdua","jhfdisui");

// //differnce between null and undefined
// //undefined is given when you cannot access the value
// // null is a type of value given specifically 
// //undefined gives nan when 10+undefined=unefined
// //null gives 0 so 10+null=10


// setTimeout(() => {
//   console.log("Hello after 2 seconds!");
// }, 2000);


let display1=document.querySelector("#first");

let display2=document.querySelector("#second");

let display3=document.querySelector("#third");

let display4=document.querySelector("#fourth");

let button=document.querySelector("#submit");

button.addEventListener('click',()=>
{
 display1.textContent="login";

setTimeout(() => {
 display2.textContent="new email";
}, 2000);
setTimeout(() => {
 display3.textContent="meeting";
}, 4000);
setTimeout(() => {
 display4.textContent="new message";
}, 6000);

});
