
function matrixSearch(arr,key){

    var rowLength = arr.length;
    var row=0;
    var column=arr[0].length;

    if(key < arr[0][0] || key > arr[rowLength-1][column-1]){
        return false;
    }
    else
    {
        while(row<rowLength && column-1>=0){
            if(key == arr[row][column-1]){
                 return true;
             }
             if(key < arr[row][column-1]){
                 column--;
              }
              else
             {
                 row++;
             }
         }
        
    }
   
}

console.log(matrixSearch([[1,2,3],[4,5,6],[7,8,9]], 0));