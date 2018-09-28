function cinco(tipo,arr){
    var arreglo=[];
    if(typeof tipo==="string"){
        for (var i = 0; i <arr.length; i++){
            if(typeof arr[i]===tipo){
                arreglo.push(arr[i]);
            }
        }
    }
    console.log(`El nuevo arreglo es ${arreglo}`);
}