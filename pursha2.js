var num = 17;
var count=0;
for(i=1;i<=num;i++){
if(num%i==0){
count++;
}
}
if(count==2){
console.log("number is a prime");
}
else{
console.log("number is not prime");
}
