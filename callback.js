// function ans()
// {
// function add(a,b)
// {
//     return a+b;
// }

// function cb(add,a,b)
// {
//    return  add(a,b);
// }
// return cb(add,5,6);
// }

const c = ["a", 'L', true, 25];

c.forEach((item, index) => {
    console.log(index, item);
});

c.map((item, index) => {
    console.log(index, item);
});
