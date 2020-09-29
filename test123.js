
function changeColor(){
    var x = document.querySelectorAll("li a");
    for (var i in x)
    {
    if (i>=0)
    {
      x[i].style.color="black";  
    }
    
   }
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("footer").style.backgroundColor = "white";


    var y = document.querySelectorAll("i");
    var t;
    for (t = 0; t < y.length; t++) {
        y[t].style.color = "black";
    }

    document.getElementById("color").style.border="1.5px solid #000";
    document.getElementById("color").style.color="#000";
    var f =document.getElementsByClassName("footer");
    f[0].style.color="#000" ;
 
}



function revert(){
    var x = document.querySelectorAll("li a");
   for (var i in x){
    if (i>=0)
    {
      x[i].style.color="white";  
    }
    
   }
    document.getElementById("header").style.backgroundColor = "rgba(252, 47, 1, 0.83)";
    document.getElementById("footer").style.backgroundColor = "rgba(252, 47, 1, 0.83)";
}


