function vfun(){
    var email=document.forms["myform"]["email"].value;
    var upswd=document.forms["myform"]["upswd"].value;

if(email==null || email=="" ){
          document.getElementById("errorBox1").innerHTML =
           "enter the e-mail id";
         return false;
}

if(upswd==null || upswd==""){
          document.getElementById("errorBox2").innerHTML =
           "enter the password";
         return false;
}

if (email != '' && upswd != '' ){
 alert("Login successfully");
                 }

}

function vfun1(){
    var uname1=document.forms["myform2"]["uname1"].value;
    var email1=document.forms["myform2"]["email1"].value;
    var upswd1=document.forms["myform2"]["upswd1"].value;
    var upswd2=document.forms["myform2"]["upswd2"].value;
    var mobile=document.forms["myform2"]["mobile"].value;

if(uname1==null || uname1=="" ){
          document.getElementById("errorBox1").innerHTML =
           "enter the user name";
         return false;
}

if(email1==null || email1==""){
          document.getElementById("errorBox2").innerHTML =
           "enter the email";
         return false;
}

if(upswd1==null || upswd1=="" ){
          document.getElementById("errorBox3").innerHTML =
           "enter the password";
         return false;
}

if(upswd2==null || upswd2==""){
          document.getElementById("errorBox4").innerHTML =
           "enter the password";
         return false;}

if(upswd1 != upswd2){
document.getElementById("errorBox5").innerHTML =
    "Enter Correct Password";
return false;}


if(mobile==null || mobile==""){
    document.getElementById("errorBox6").innerHTML =
    "enter Mobile Number";
   return false;
}


if (uname1 != '' && upswd1 != '' && upswd2 != '' && email1 != '' && upswd1 == upswd2  && mobile != '')
  alert("Register successfull");             
}