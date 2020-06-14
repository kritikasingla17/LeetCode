var reverseString = function(s) {
    var len=s.length;
 for(var i=0, j=len-1;i!==j;i++,j--){
     if(i>j){
         break;
     }
     var temp;
     temp=s[i];
     s[i]=s[j];
     s[j]=temp;
 }
 
 return s;
 };

//  var s=["H","a","n","n","a","h"];
//  console.log(reverseString(s));