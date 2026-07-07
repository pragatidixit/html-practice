// fetch("https://jsonplaceholder.typicode.com/posts/", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         "name": "Mern batch",
//         "batch-no": 2,
//         "id": 1
//     })
// })
// .then((res) => res.json())
// .then((val) => {
//     console.log(val);
// });

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method:"PATCH",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         batch:2030
//     })
// })
// .then(response => response.json())
// .then(data => console.log("PATCH:", data))
// .catch(error => console.error(error));


// const task1=new Promise((resolve,reject)=>
// {
//     resolve("done");
// })
// const task2=new Promise((resolve,reject)=>
// {
//     resolve("done2");
// })
// async function fun() {
//     return task1;
//     return task2;
    
// }
// const data=fun();
// data.then((res)=>console.log(res));
// console.log(data);

// const task1=new Promise((res,rej)=>
// {
//     setTimeout(()=>
//     {
//         res("Promise resolved")
//     },5);
// })

// const task2=new Promise((res,rej)=>
// {
//     setTimeout(()=>
//     {
//         res("Promise 2 resolved")
//     },50);
// })

// const task3=new Promise((res,rej)=>
// {
//     setTimeout(()=>
//     {
//         res("Promise 3 resolved")
//     },500);
// })
// const task4=new Promise((res,rej)=>
// {
//     setTimeout(()=>
//     {
//         res("Promise 4 resolved")
//     },5);
// })

// async function handel() {
//     console.log("task1");
//     const val=await task1;
//     console.log(val);

//     console.log("task2");
//     const val2=await task2;
//     console.log(val2);

//     console.log("task3");
//     const val3=await task3;
//     console.log(val3);

//     console.log("task4");
//     const val4=await task4;
//     console.log(val4);
   
// }

// handel();


//  https://api.github.com/users/pragatidixit
 const Url=" https://api.github.com/users/pragatidixit";

 async function tracking() {
   


    try{
         const data= await fetch(Url);

        const jsonValue=await data.json();
        console.log(jsonValue);
    }
    catch{
        console.log("error");
    }
 }
 tracking()