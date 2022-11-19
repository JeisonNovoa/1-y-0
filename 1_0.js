let filas = parseInt(prompt("Ingrese el numero de filas que desea"));
let columnas = parseInt(prompt("Ingrese el numero de columnas que desea"));
let rango = filas * columnas;
let result = new Array(rango);
let contador=0,contador2=0;

for(i = 0; i < filas;i++){
    result[i] = new Array();
    for(j = 0; j<columnas;j++){
        result[i][j] = "|0|";
        if(j == 0){
            result[i][j] = "|1|";
            
        }else if(j == columnas-1){
            result[i][j] = "|1|";

        }
        contador2++;
        if(contador2 = filas){
            document.write("&nbsp");
            contador2 = 0;
        }
        if(i == 0){
            result[j] = new Array();
            result[i][j] = "|1|";
            
        }else if(i == filas-1){
            result[i][j] = "|1|";
            
        }
        document.write(result[i][j]);
    }
    contador++;
    if(contador = columnas){
        document.write("<br>");
        contador = 0;
    }
}