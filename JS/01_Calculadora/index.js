// Pantallas calculadora
const displayPrimaria = document.getElementById('primaria');
const displaySecundaria = document.querySelector("#secundaria");

// Botones
const buttons = document.querySelectorAll("button");

buttons.forEach((boton)=>{
    boton.onclick= ()=>{
        if(boton.id=="clear"){
            displayPrimaria.innerText="";
            displaySecundaria.innerText="";
            
        }else if(boton.id=="delete"){
            // Esa funcion devuelve una riña grande
            // displayPrimaria.innerText = deLastChar(displayPrimaria.toString());
            let cadena = displayPrimaria.innerText.substring();
            displayPrimaria.innerText= cadena.substring(0, cadena.length-1);

        }else if(displayPrimaria.innerText != "" && boton.id=="igual"){
            try{
                displaySecundaria.innerText= eval(displayPrimaria.innerText);

            }catch{
                displaySecundaria.innerText= "Hay un error en lo introducido"
                setTimeout( ()=>(displaySecundaria.innerText="") ,2000);
            }

        }else{
            displayPrimaria.innerText += boton.id;
        }
    }
});


// Que coño le pasa a esto? porque me sale una cosa rara D: D: D:
// function deLastChar(cadena){
//     let newCadena ="";
//     for (let index = 0; index < cadena.length-1; index++) {
//         newCadena += cadena[index];   
//     }
//     return newCadena;
// }