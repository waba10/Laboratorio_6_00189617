function cuatro(arr){
    var contador=1;
    var suma=0;
    if(arr.length%2===0){
        for (var i = 0; i <arr.length/2; i++){
            suma=arr[i]+arr[arr.length-contador];
            console.log(`La suma de ${arr[i]} mas ${arr[arr.length-contador]} es ${suma}`);
            suma=0;
            contador=contador+1;
   
        }
    }
    else{
        for (var i = 0; i <(arr.length+1)/2; i++){
            if(contador===(arr.length+1)/2){
                suma=arr[i]+arr[i];
                console.log(`La suma de ${arr[i]} mas ${arr[i]} es ${suma}`);
            }
            else{
            suma=arr[i]+arr[arr.length-contador];
            console.log(`La suma de ${arr[i]} mas ${arr[arr.length-contador]} es ${suma}`);
            suma=0;
            contador=contador+1;
            }
        }
    }
}