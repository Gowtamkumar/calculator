
function calculator(number){
    var resutl = document.getElementById('result').value+=number;
  console.log(resutl)
}
function calculation(){
    var resultValue = document.getElementById('result').value;
    var resultValue = eval(resultValue);
    document.getElementById('result').value = resultValue;
}
function Reset(){
    document.getElementById('result').value = "";
}
