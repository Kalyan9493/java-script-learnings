
$(function (){

    var table1= $("#t1");
    var table2=$("#t2");
    var table3=$("#t3");
    $.ajax({
         type :'GET',
         url  :"http://localhost:8080/products/?catagory=laptops",
         success : function(products)
         {
            console.log("Success",products);
          $.each(products,function(i,product)
         {  
                  switch(product.pid){  
                      case 1: table1.append("<tr><th>Features</th><th>Details</th></tr> <tr><td>Brand</td><td>"+product.name+"</td></tr> <tr><td>OS</td><td>"+product.os+"</td></tr><tr><td>Memory Size</td><td>"+product.memory+" GB</td></tr><tr><td>RAM Size</td><td>"+product.ram+" GB</td></tr><tr><td>Price</td><td>"+product.price+"</td></tr>")
                           break;
                      case 2:table2.append("<tr><th>Features</th><th>Details</th></tr> <tr><td>Brand</td><td>"+product.name+"</td></tr> <tr><td>OS</td><td>"+product.os+"</td></tr><tr><td>Memory Size</td><td>"+product.memory+" GB</td></tr><tr><td>RAM Size</td><td>"+product.ram+" GB</td></tr><tr><td>Price</td><td>"+product.price+"</td></tr>")
                            break;
                      case 3:table3.append("<tr><th>Features</th><th>Details</th></tr> <tr><td>Brand</td><td>"+product.name+"</td></tr> <tr><td>OS</td><td>"+product.os+"</td></tr><tr><td>Memory Size</td><td>"+product.memory+" GB</td></tr><tr><td>RAM Size</td><td>"+product.ram+" GB</td></tr><tr><td>Price</td><td>"+product.price+"</td></tr>")
                          break;
                     default : alert("No Products Found")
                  }
            });
         },
         error : function(){
             alert("Error Loading Page");
         }
    });
});