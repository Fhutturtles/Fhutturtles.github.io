let A = document.querySelector("body");
A.style["backgroundImage"] = "url(b3.jpg)";

let Mbutton =  document.querySelector(".menu");
Mbutton.onclick = function() ////this is an event handler
{
    let R = Math.floor(Math.random() * 2);
    if(R == 0)
    {
        A.style["backgroundImage"] = "url(b1.jpg)"; 
    }
    if(R == 1)
    {
        A.style["backgroundImage"] = "url(b2.jpg)"; 
    }
    if(R == 2)
    {
        A.style["backgroundImage"] = "url(b3.jpg)"; 
    }
    
    
}