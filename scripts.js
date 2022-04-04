//variaveis goblais
let nameFood;
let priceFood;
let nameDrink;
let priceDrink;
let nameCandies;
let priceCandies;
let go;
let message;
let namePerson;
let address;
let finish = 'Confirmar dados';



//funcoes para selecionar
function selectionFood (foodSelect){
    const confirm = document.querySelector(".optionFood").querySelector(".select");
    if (confirm !== null){
        confirm.classList.remove("select");
    }
    foodSelect.classList.add("select");
}

function selectionDrink (drinkSelect){
    const confirm = document.querySelector(".optionDrink").querySelector(".select");
    if (confirm !== null){
        confirm.classList.remove("select");
    }
    drinkSelect.classList.add("select");
}

function selectionCandies (candiesSelect){
    const confirm = document.querySelector(".optionCandies").querySelector(".select");
    if (confirm !== null){
        confirm.classList.remove("select");
    }
    candiesSelect.classList.add("select");
}

//funçoes para salvar as variaveis globais e finalizar pedido

function foodInformation (foodInfo){
    const selectFood = document.querySelector(".optionFood").querySelector(".information");
    if (selectFood !== null){
        selectFood.classList.remove("information");
    }
    foodInfo.classList.add("information");
    nameFood = foodInfo.querySelector("h5").innerHTML
    priceFood = foodInfo.querySelector(".price").innerHTML

    if(nameFood && nameDrink && nameCandies){
        document.querySelector(".go").classList.add("yellow");  
        document.querySelector(".confirm").innerHTML = finish;  
        go = document.querySelector(".yellow");
    }
}
function drinkInformation (drinkInfo){
    const selectDrink = document.querySelector(".optionFood").querySelector(".information");
    if (selectDrink !== null){
        selectDrink.classList.remove("information");
    }
    drinkInfo.classList.add("information");
    nameDrink = drinkInfo.querySelector("h5").innerHTML
    priceDrink = drinkInfo.querySelector(".price").innerHTML

    if(nameFood && nameDrink && nameCandies){
        document.querySelector(".go").classList.add("yellow");  
        document.querySelector(".confirm").innerHTML = finish; 
        go = document.querySelector(".yellow"); 
    }
}
function candiesInformation (candiesInfo){
    const selectCandies = document.querySelector(".optionFood").querySelector(".information");
    if (selectCandies !== null){
        selectCandies.classList.remove("information");
    }
    candiesInfo.classList.add("information");
    nameCandies = candiesInfo.querySelector("h5").innerHTML
    priceCandies = candiesInfo.querySelector(".price").innerHTML
    if(nameFood && nameDrink && nameCandies){
        document.querySelector(".go").classList.add("yellow");  
        document.querySelector(".confirm").innerHTML = finish;
        go = document.querySelector(".yellow");
    }
}
function check(){
    namePerson = prompt("Qual o seu nome?");
    address = prompt("Qual o seu endereço?");
    if(nameFood && nameDrink && nameCandies && namePerson && address){
        document.querySelector(".go").classList.add("hide");
        document.querySelector(".conclude").classList.remove("hide");
        document.querySelector(".conclude").classList.add("green");

        priceFood = Number(priceFood);
        priceDrink = Number(priceDrink);
        priceCandies = Number(priceCandies);
        let total = priceFood + priceDrink + priceCandies
        let text = 
        `
        Olá, gostaria de fazer o pedido:
        - Prato: ${nameFood}
        - Bebida: ${nameDrink}
        - Sobremesa: ${nameCandies}
        Total: R$ ${total.toFixed(2)}
        
        Nome: ${namePerson}
        Endereço: ${address}
        `
        ;
        let encoded = encodeURIComponent(text);

        let end = "Fechar pedido";    
        message = "https://wa.me/47984833226?text="+encoded;
        URL = message;

        document.querySelector(".conclude").classList.add("green");
        document.querySelector(".end").innerHTML = end.link(URL);  
    
    }
}
   



