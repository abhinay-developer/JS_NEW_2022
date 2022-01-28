console.log("JS Arrays");


var numbers=[10,20,30,40,900,1,5,0,70,1000]; //length starts from 1,index starts from 0
          // 0  1   2  3  4  5 6 7
 
 var colors=["RED","GREEN","VIOLET","PINK"]      
 
 
  for(var i=0;i<colors.length;i++){
    
     if(i%2==0){
         console.log(colors[i]);
     }


  }


 colors.forEach(color => {
    //  console.log(colors.sort());
        // console.log(color);

 });
          //avg
var findLength=numbers.length;

 var  sum=0;

//   for(var i=0;i<=numbers.length;i++){
//     sum=sum+numbers[i];
//     var avg=sum/2;
//     console.log(avg);
//   }

for (var  num of numbers) {
    // console.log(num);
}

for (var key in numbers) {
//    console.log(numbers[key]);
}

numbers.forEach(num => { 
    // console.log(num);
});

// console.log(`Length :${findLength}`);
// console.log(numbers);



