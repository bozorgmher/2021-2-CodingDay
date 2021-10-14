function getLastValue(arr){
    for (let i = 0; i < arr.length; i++)
    {
        arr.sort();
    }
    return arr[arr.length-1];
}