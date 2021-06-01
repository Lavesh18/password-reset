
function myfun(){

    var a = document.getElementById("pass1").value;
    var b = document.getElementById("pass2").value;
    
    
    if(a==""){
        document.getElementById("msg").innerHTML="Please fill this box (this should not be empty!)";
        return false;
    }
    if(a.length < 8){
       document.getElementById("msg").innerHTML="Password length should not be less than 8";
        return false;
    }
    if(a!=b){
       document.getElementById("msg1").innerHTML="Password is not same";
        return false;
    }

    if((a.search(/[!\@\#\^\&*\$]/)==-1) && (a.search(/[0-9]/)==-1)){
        document.getElementById("msg").innerHTML="Contains all the alphabets should also contain atleast one number & one special character";
        return false;
    }
    else if((a.search(/[0-9]/)==-1)){
        document.getElementById("msg").innerHTML="should also contains atleast one number";
        return false;
    
    }
    else if((a.search(/[!\@\#\^\&*\$]/)==-1)){
        document.getElementById("msg").innerHTML="Contains all albhabets & numbers should also contain atleast one special characters";
        return false;
    }
    if((a.search(/[a-z]/)!=-1 ) && a.search(/[0-9]/)!=-1 && a.search(/[!\@\#\^\&*\$]/)!=-1)
    {
        document.getElementById("resetbtn").value="JOIN A RACE";
        document.getElementById("reset").innerHTML="Password changed";
        document.getElementById("resetnew").disabled=true;
        var c=document.getElementById("resetnew");
        c.parentNode.removeChild(c);
        var d=document.getElementById("resetre");
        d.parentNode.removeChild(d);
        document.getElementById("pinner").textContent="Your password has been updated! Now get back in the driver seat racers are waiting for you!";
        

        return false;
    }
    
    

  
}