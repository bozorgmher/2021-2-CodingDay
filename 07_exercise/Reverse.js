function revNumber(num){
    var str = num.toString();
    var newNum = ""
    for(let i = 0; i <str.length ; i++){
      
        newNum += str[str.length -1 - i];
    }
    return newNum;
}