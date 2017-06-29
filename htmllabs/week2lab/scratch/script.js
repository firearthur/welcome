function FirstReverse(str) { 

    var string="";
    
    for(var i = str.length-1; i=== -1; i--)
    {
        string = string + str[i];
    }
  return string; 
}

var output = FirstReverse("Arthur");   
alert(output);  