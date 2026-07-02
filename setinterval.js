console.log("hii");
let count = 0;
let counter = setInterval(() => {
    count++;
    console.log(count);

    if (count == 5) {
        clearInterval(counter);
        console.log("end");
    }
}, 3000);

