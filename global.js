//Global Object

// console.log(global);

//set timeout, clear interval
setTimeout(()=>{
    console.log("In the Timeout");
    clearInterval(int);
},3000);

//set interval
const int = setInterval(()=>{
    console.log("In the Interval");
},1000);


//directory name
console.log(__dirname);
//file name
console.log(__filename);


//wont work
//console.log(document.querySelector);

