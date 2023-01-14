function converttoFahrenheit(celsius){
    let temp =celsius
    let result= (temp*9/5)+32
    console.log('fahrenheit value :',result)


}
function converttocelsius(fahrenheit){
    let temp=fahrenheit
    let result=(temp-32)*5/9
    console.log('celsius value :',result)


}
    converttoFahrenheit(60);
    converttocelsius(140);