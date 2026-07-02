console.log("hii");
console.log("sync");
setTimeout(()=>
{
    console.log("after 2 sec");
},2000);

console.log("10");
setTimeout(()=>
{
    console.log("after 4 sec");
},4000);
setTimeout(()=>
{
    console.log("after 6 sec");
},6000);

console.log("when");
console.log("why");
console.log("how");

let a = 10;
let b = 20;

console.log("Value of a =", a);

setTimeout(() => {
    console.log("First Timeout");
}, 2000);

console.log("Addition =", a + b);

setTimeout(() => {
    console.log("Second Timeout");
}, 1000);

console.log("Multiplication =", a * b);

console.log("Program Ended");

