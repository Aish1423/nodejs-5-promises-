// var a = 10;
// var b = 0;

// let wait = new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//     //resolve(20)
//     b = 20
//     resolve()
//     }, 3000);
// })

// wait.then(()=>{
//     console.log(a+b);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// console.log("Start");

// console.log("Code");

// console.log("Stop");


// console.log("Start");

// setTimeout(()=>{
//     console.log("Code");
// },3000)

// console.log("Stop");

// var a = 10

// var b = 0;

// setTimeout(()=>{
//     b = 20
// },3000)

// console.log(a+b);

var a = 10

var b = 0;

let wait = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        b = 20
        resolve()
        // reject("Value not updated")
    },3000)
})

wait
.then(()=>{
    console.log(a+b);
})
.catch((err)=>{
    console.log(err);
})

