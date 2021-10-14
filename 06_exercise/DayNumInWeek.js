function weekNumbersToWords(arrNum){
    const arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var arrTemp = [];
    for (let j = 0; j <arr.length; j++){
            arrTemp[j] = arr[arrNum[j]];
    }
    return arrTemp;
}