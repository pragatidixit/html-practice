// const a =new Promise((resolve,reject)=>
// {
// resolve("done");
// }
// );
// a.then((value)=>
// {
//     console.log("this is working");
// });


// const p1=new Promise((res)=>{
//     res("done");
// })

// const p2=p1.then((val)=>
// {
//     console.log("diff",val);
// })

// console.log(p1==p2)


// const b = new Promise((res, rej) => {
//   if(b % 2 == 0){
//     res("Even")
//   }else {
//     rej("Odd")
//   }
// });

// promise.then((value) => {
//   console.log(value);
// });
// b.catch((error) => {
//   console.log(error)
// });

// const p1 = new Promise((res) => {
//     setTimeout(() => res("P1.done"), 1000)
// })
// const p2 = new Promise((res) => {
//     setTimeout(() => res("P2.done"), 1500)
// })
// const p3 = new Promise((res) => {
//     setTimeout(() => res("P3.done"), 2000)
// })

// promise.all([p1, p2, p3])
// .then((val) => console.log("All task done"))
// .catch((val) => console.log("All promises failed"))


// function checkNumber(num)
// {
//     return new Promise((res,rej)=>
//     {
//         if(num>0)
//             res("positive");
//         else
//             rej("Negative");
//  } );
// }

// checkNumber(-7)
//     .then ((res)=>
//     {
//         console.log("Positive");
//     })
// .catch((err)=>
// {
//     console.log("Negative");
// })
// .finally(()=>
// {
//     console.log("run");
// });




function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 Completed");
            resolve("Data from Step 1");
        }, 1000);
    });
}

function step2(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 Completed");
            resolve(data + " -> Step 2");
        }, 1000);
    });
}

function step3(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 Completed");
            resolve(data + " -> Step 3");
        }, 1000);
    });
}

step1()
    .then((result) => step2(result))
    .then((result) => step3(result))
    .then((result) => {
        console.log("Final:", result);
    })
    .catch((err) => {
        console.log(err);
    });