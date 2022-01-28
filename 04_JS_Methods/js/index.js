//(){}          add()

function  display1To10(){

    for(i=1;i<=10;i++){
        console.log(i);
    }

}

// display1To10();


function   saveUsers(){

    display1To10();
}

// saveUsers();


// function add(num1,num2){
//     var sum=num1+num2;
//     console.log(`Sum : ${sum}`);
//     return sum;
// }

var add=(num1,num2)=> {
    sum=num1+num2;
    // console.log(sum);
};

add(10,20);

function displayName(myName){
    // console.log(`My Name: ${myName}`);
}


var displayName=myName=> console.log(myName); //ES6  Lamda Exression 
displayName("Sai");


var  mul=function(a,b){
  var result=a*b;
     console.log(result);
}
mul(10,30);

setTimeout(()=>{
//  console.log("Hello");
},8000)

let counter=0;
let date;
setInterval(() => {
    console.log(`SNOOZE ${new Date()}`);
}, 2000);