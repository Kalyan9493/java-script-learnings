
function matrixSearch(arr,key){
    console.log(arr[i][i]);
    console.log(arr[j][j]);
    if(key < arr[i][i] || key > arr[j][j]){
        return false;
    }
    else
    {
        while(i<arr.length && j>=0){
            if(key == arr[i][j]){
                 return true;
             }
             if(key < arr[i][j]){
                 j--;
              }
              else
             {
                 i++;
             }
         }
        
    }
   
}

console.log(matrixSearch([[1,2,3],[4,5,6],[7,8,9]], 5));