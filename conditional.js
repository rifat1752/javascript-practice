//co0nditional if else
console.log('conditional  if-else');
var iphone_price= 79000;
var my_budget= 56000;
console.log(iphone_price);
console.log(my_budget);

if (iphone_price<my_budget){
    console.log('i will buy iphone');
}
else {
    console.log('i do not have budget');
}

//example 02
var chicken = 400;
var beef = 700;
var goat = 1200;
var budget = 1500;

 if(chicken<budget && beef>budget && goat>budget){
    console.log(" chicken grill  khabo ");
 }
 else if(chicken<budget && beef<budget && goat>budget) {
    console.log('give me the beef.');
 }
 else {
    console.log('give me the goat.');
 }

 // example 03
 var math=true;
 var matrix=false;
 var vector =true;
 var straightline = true;

 if (math==true) {
    if(matrix==true){
        console.log('math - ');
        }
    else if(vector==true)
      {console.log('math - vector');}
    else {console.log('math - straightline');}
 }
 else {
    console.log('i dont know math');
 }