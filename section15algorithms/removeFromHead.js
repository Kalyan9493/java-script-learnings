// delete the elements from the front positions.

function removeFromHead(arr,excess){
    arr.splice(0,excess);

    return arr;
}

console.log(removeFromHead(["sfsdf","sasfsd","jan","feb","march"],2));
