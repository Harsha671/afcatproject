import React from "react";
function Carazol(){
    
    function change(){
        var imgRef = document.querySelector(".name");
        if(imgRef.name==="n1"){
            imgRef.src="https://afcat.cdac.in/AFCAT/assets/images/crausal/cr7.webp"
            imgRef.name="n2"
            imgRef.style.height="400px"
            imgRef.style.width="100%"
        }
        else if(imgRef.name==="n2"){
           imgRef.src="https://th.bing.com/th?id=OIP.6fnbcpSjR4EKBNcTyFH65gHaEX&w=325&h=192&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
           imgRef.name="n3"
           imgRef.style.height="400px" 
           imgRef.style.width="100%" 

        }
        else if(imgRef.name==="n3"){
            imgRef.src="https://th.bing.com/th?id=OIP.U9gbWFwUzd4X6hGQzz7e_QHaEZ&w=324&h=192&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            imgRef.name="n4"
              imgRef.style.height="400px"
               imgRef.style.width="100%"
        }
        else if(imgRef.name==="n4"){
            imgRef.src="https://th.bing.com/th?id=OIP.Z-b2MkcL48sJ8QvwapUmYwHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            imgRef.name="n5"
              imgRef.style.height="400px"
               imgRef.style.width="100%"
        }
        else{
            imgRef.src="https://th.bing.com/th?id=OIP.S2MchTPYg6n-DTsbHQ34ewHaEO&w=330&h=188&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            imgRef.name="n1"
              imgRef.style.height="400px"
               imgRef.style.width="100%"
        }
    }
    setInterval(change,3000)
    return(
        <div className="d1">
            <img className="name" name="n1" src="https://afcat.cdac.in/AFCAT/assets/images/crausal/cr7.webp" alt="" width={"100%"} height={"400px"}/>
        </div>
    
    )
}
export default Carazol;