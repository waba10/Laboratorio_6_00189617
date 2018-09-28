function promedio_arreglos(arr){
    var contador=0;
    for (var i = 0; i <arr.length; i++){
        
        contador=contador+arr[i];
        
    }
    var promedio=contador/arr.length;
    console.log(`La suma es ${contador} y su promedio es ${promedio}`);
    
}