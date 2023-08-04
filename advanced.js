var numbers =[14,24,33,43,57,64,73,84,92];

for(var i=0; i<=10; i++){
   var number = numbers[i];
   
//    if (i>5){
//     break;
//    }
   if (number>33){
    continue;
   }
   console.log(number);
}