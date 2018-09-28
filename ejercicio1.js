function ocurrencias(num, arr){
    var contador=0;
    for (var i = 0; i <arr.length; i++){
        if(arr[i]==(num)){
            contador=contador+1;
        }
    }
    console.log(`El total de ocurencias es ${contador}`);

}
