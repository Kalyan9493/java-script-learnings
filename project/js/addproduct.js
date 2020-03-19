
$(document).ready(function() {

    $('#product').click(function(){
        
       var user={
            pname: $("#pname").val(),
            catagory:$("#catagory").val(),
            memory:$("#memory").val(),
            os:$("#os").val(),
            ram:$("#ram").val(),
            price:$("#price").val()
        };
    if(user.pname !== "" && user.catagory !== "" && user.os!=="" && user.ram!=="" && user.ram!="" && user.price!=="" ){
       $.ajax({
            type:'POST',
            contentType:'application/json',
            url:'http://localhost:8080/products/',
            contentType: 'application/json; charset=utf-8',
            data:JSON.stringify(user),
            success:function(user){
                alert("Product Added Succesfully");
                console.log(user);
            },
            error:function(){
                alert("Error In Adding product");
            }
        }); 
    }else{
        alert("All Fields Should Be filled");
    }
        console.log(user);
    
    });
    });