//variaveis para quardar os resultados aleatoios para depois conferir;
var numerosAle = [];
var resposta = [];


var cont = 0;
var numeroGerado ;
var nivel = 0;
var posicaoDeResposta = 0;
var verifi = 0;
var horaJogo = false;
var creatEle = false;
var recebeDoText = 0;
var numeroDeacertos = 0;
var numerosDeerros = 0;

//Elementos do front

var txtAcertos;
var txtErros;
var NumeroAleatorio;

var time = 2;


//load da pagina 
function loadBody(){
   txtAcertos = document.getElementById('acertos');
   txtAcertos.disabled = true;
   txtAcertos.style.textAlign = 'center';

   txtErros = document.getElementById('erros');
   txtErros.disabled = true;
   txtErros.style.textAlign = 'center';

   NumeroAleatorio = document.getElementById('txtNumeroAleatorio');
   NumeroAleatorio.disabled = true;
   NumeroAleatorio.style.textAlign = 'center';

   document.getElementById('acertos').value = numeroDeacertos;
   document.getElementById('erros').value = numerosDeerros;

   document.getElementById('verificacao').innerHTML = '.....'
}



//botão proximo 
function proximo(){
    nivel++;
    cont++;
   
if(creatEle === false){
    if(horaJogo === false){
        //gerar numeros e manda para function gravar
        switch(nivel){
            case 1: 
            numeroGerado = Math.floor(Math.random() * ( 9 + 1)) + 1;
                gravar(cont,numeroGerado);
            break;
    
            case 2: 
            numeroGerado = Math.floor(Math.random() * ( 50 + 1)) + 10;
            gravar(cont,numeroGerado);
            break;
    
    
            case 3: 
            numeroGerado = Math.floor(Math.random() * ( 100 + 1)) + 50;
            gravar(cont,numeroGerado);
            break;
    
    
            case 4: 
            numeroGerado = Math.floor(Math.random() * (200 + 1)) + 100;
            gravar(cont,numeroGerado);
            break;
    
    
            case 5: 
            numeroGerado = Math.floor(Math.random() * ( 300 + 1)) + 200;
            gravar(cont,numeroGerado);
            break;
    
    
            case 6: 
            numeroGerado = Math.floor(Math.random() * ( 400 + 1)) + 300;
            gravar(cont,numeroGerado);
            break;
    
    
            case 7: 
            numeroGerado = Math.floor(Math.random() * (700 + 1)) + 400;
            gravar(cont,numeroGerado);
            break;

            case 8: 
            numeroGerado = Math.floor(Math.random() * (800 + 1)) + 500;
            gravar(cont,numeroGerado);
            break;

            case 9: 
            numeroGerado = Math.floor(Math.random() * (900 + 1)) + 600;
            gravar(cont,numeroGerado);
            break;

            case 10: 
            numeroGerado = Math.floor(Math.random() * (1000 + 1)) + 700;
            gravar(cont,numeroGerado);
            horaJogo = true;
            break;
        
        }
    }else {
        var textRes = document.createElement('input');
        textRes.type = 'text';
        textRes.id = "textRes";
        textRes.classList = "form-control";
        textRes.style.textAlign = 'center';
        document.getElementById('textResposta').appendChild(textRes); 
        creatEle = true;
    }
}
else{
    verifi ++ ;
    posicaoDeResposta++;
    switch(verifi){
        case 1: 
        recebeDoText = document.getElementById('textRes').value;
        recebeDoText = parseInt(recebeDoText);
        resposta[posicaoDeResposta] = recebeDoText;

        if(resposta[1] == null){
            numerosDeerros++;
        }else{
            if(resposta[1] === numerosAle[1]){
                numeroDeacertos ++
            }else{
                numerosDeerros++; 
            }
        }
        break;


        case 2: 
        recebeDoText = document.getElementById('textRes').value;
        recebeDoText = parseInt(recebeDoText);
        resposta[posicaoDeResposta] = recebeDoText;

        if(resposta[2] == null){
            numerosDeerros++;
        }else{
            if(resposta[2] === numerosAle[2]){
                numeroDeacertos ++ 
            }
            else {
                numerosDeerros++; 
            }
        }
        break;



        case 3: 
        recebeDoText = document.getElementById('textRes').value;
        recebeDoText = parseInt(recebeDoText);
        resposta[posicaoDeResposta] = recebeDoText;

        if(resposta[3] == null){
            numerosDeerros++; 
        }else{
            if(resposta[3] === numerosAle[3]){
                numeroDeacertos ++
            }
            else {
                numerosDeerros++; 
            }
        }
        break;


        case 4: 
        recebeDoText = document.getElementById('textRes').value;
        recebeDoText = parseInt(recebeDoText);
        resposta[posicaoDeResposta] = recebeDoText;


        if(resposta[4] == null){
            numerosDeerros++; 
        }else{
            if(resposta[4] === numerosAle[4]){
                numeroDeacertos ++  
            }
            else {
                numerosDeerros++; 
            }
        }
        break;


        case 5: 
        recebeDoText = document.getElementById('textRes').value;
        recebeDoText = parseInt(recebeDoText);
        resposta[posicaoDeResposta] = recebeDoText;
        
        if(resposta[5] == null){
            numerosDeerros++; 
        }else{
            if(resposta[5] === numerosAle[5]){
                numeroDeacertos ++
            }
            else{
                numerosDeerros++; 
            }
        }
        break;


        case 6: 
        recebeDoText = document.getElementById('textRes').value;
        recebeDoText = parseInt(recebeDoText);
        resposta[posicaoDeResposta] = recebeDoText;

        if(resposta[6] == null){
            numerosDeerros++; 
        }else{
            if(resposta[6] === numerosAle[6]){
                numeroDeacertos ++
            }
            else{
                numerosDeerros++; 
            }
        }
        break;



        case 7: 
        recebeDoText = document.getElementById('textRes').value;
        recebeDoText = parseInt(recebeDoText);
        resposta[posicaoDeResposta] = recebeDoText;

        if(resposta[7] == null){
            numerosDeerros++; 
        }else{
            if(resposta[7] === numerosAle[7]){
                numeroDeacertos ++ 
            }
            else{
                numerosDeerros++; 
            }
        }        
        break;



        case 8: 
        recebeDoText = document.getElementById('textRes').value;
        recebeDoText = parseInt(recebeDoText);
        resposta[posicaoDeResposta] = recebeDoText;

        if(resposta[8] == null){
            numerosDeerros++; 
        }  else{
            if(resposta[8] === numerosAle[8]){
                numeroDeacertos ++ 
            }
            else{
                numerosDeerros++; 
            }
        }      
        break;


        case 9: 
        recebeDoText = document.getElementById('textRes').value;
        recebeDoText = parseInt(recebeDoText);
        resposta[posicaoDeResposta] = recebeDoText;

        if(resposta[9] == null){
            numerosDeerros++; 
        }else{
            if(resposta[9] === numerosAle[9]){
                numeroDeacertos ++ 
            }
            else{
                numerosDeerros++; 
            }
        }
        break;


        case 10: 
        recebeDoText = document.getElementById('textRes').value;
        recebeDoText = parseInt(recebeDoText);
        resposta[posicaoDeResposta] = recebeDoText;
        let textResposta = document.getElementById('textRes');
        textResposta.disabled = true;
    

        if(resposta[10] == null){
            numerosDeerros++; 
        }else{
            if(resposta[10] === numerosAle[10]){
                numeroDeacertos ++ 
            }
            else{
                numerosDeerros++; 
            }
        }
        
        if(numeroDeacertos == 0){
            document.getElementById('verificacao').innerHTML = 'Você não respondeu';
        }


        if(numeroDeacertos <= 4){
            document.getElementById('verificacao').innerHTML = 'Precisa praticar'; 
        }

        if(numeroDeacertos >= 5){
            document.getElementById('verificacao').innerHTML = 'Bom'; 
        }

        if(numeroDeacertos >= 7){
            document.getElementById('verificacao').innerHTML = 'Muito bom'; 
        }

        if(numeroDeacertos == 10){
            document.getElementById('verificacao').innerHTML = 'Perfeito'; 
        }
        
        break;
    }
    document.getElementById('acertos').value = numeroDeacertos;
    document.getElementById('erros').value = numerosDeerros;
    document.getElementById('textRes').value = '';
}
    
    
}


function time(){

    setTimeout('time()')
    

}

function gravar(i,res){
    
    switch(i){
        case 1: 
        numerosAle[i] = res;
            document.getElementById('txtNumeroAleatorio').value = res;
        break;

        case 2: 
        numerosAle[i] = res;
        document.getElementById('txtNumeroAleatorio').value = res;
        break;


        case 3: 
        numerosAle[i] = res;
        document.getElementById('txtNumeroAleatorio').value = res;
        break;


        case 4: 
        numerosAle[i] = res;
        document.getElementById('txtNumeroAleatorio').value = res;
        break;


        case 5: 
        numerosAle[i] = res;
        document.getElementById('txtNumeroAleatorio').value = res;
        break;


        case 6: 
        numerosAle[i] = res;
        document.getElementById('txtNumeroAleatorio').value = res;
        break;


        case 7: 
        numerosAle[i] = res;
        document.getElementById('txtNumeroAleatorio').value = res;
        break;

        
        case 8: 
        numerosAle[i] = res;
        document.getElementById('txtNumeroAleatorio').value = res;
        break;

        
        case 9: 
        numerosAle[i] = res;
        document.getElementById('txtNumeroAleatorio').value = res;
        break;

        
        case 10: 
        numerosAle[i] = res;
        document.getElementById('txtNumeroAleatorio').value = res;
        break;


        default :
       
        break;
    }
}