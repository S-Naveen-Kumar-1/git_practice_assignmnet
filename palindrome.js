var name = "catac";
var bag ="";
for(i=name.length;i>=0;i--){
bag = bag+name[i];
}
if(name==bag){
console.log("its a palindrome");
}
else{
console.log("its not a palindrome");
}