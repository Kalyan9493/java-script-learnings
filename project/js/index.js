$(document).ready(function() {

$('#regbtn').click(function(){
    
   var user={
        firstname: $("#fname").val(),
        lastname:$("#lname").val(),
        emailid:$("#eid").val(),
        mobileno:$("#mno").val(),
        address:$("#add").val(),
        username:$("#uname").val(),
        password:$("#pass").val()
    };

    if(user.firstname!=="" && user.lastname!== "" && user.mobileno!=="" && user.password!=="" && user.username!=="" && user.address!==""){

    

   $.ajax({
        type:'POST',
        contentType:'application/json',
        url:'http://localhost:8080/user/',
        contentType: 'application/json; charset=utf-8',
        data:JSON.stringify(user),
        success:function(user){
            alert("User Added Succesfully");
            console.log(user);
        },
        error:function(){
            alert("Error In Registering User");
        }
    }); 
}else{
    alert("All fields Must Required");
}

/*var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
var theUrl = "https://localhost:8080/user/";
xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify(user));*/

    console.log(user);

});
});