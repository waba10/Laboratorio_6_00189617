function nueve(numero){
    valores=[];
    var numaleatorio;

    for (var i = 0; i <20; i++){
        numaleatorio=(Math.floor(Math.random() *100)+1);
        valores.push(numaleatorio);
    }

    for (var j = 0; j <20; j++){
       if(numero===valores[j]){
           console.log("ganaste");
       }
       else{
           console.log("perdiste");
       }
    }

    
    return valores;
}