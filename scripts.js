//variaveis goblais
let nameFood;
let priceFood;
let nameDrink;
let priceDrink;
let nameCandies;
let priceCandies;
let go;
let message;



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
        Total: R$ ${total.toFixed(2)}`

        let encoded = encodeURIComponent(text);
        
        finish = 'Fechar pedido';
        message = "https://wa.me/47984833226?text="+encoded
        URL = message;

        document.querySelector(".go").classList.add("green");        
        document.querySelector(".confirm").innerHTML = finish.link(URL);
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
        Total: R$ ${total.toFixed(2)}`

        let encoded = encodeURIComponent(text);
        
        finish = 'Fechar pedido';
        message = "https://wa.me/47984833226?text="+encoded
        URL = message;

        document.querySelector(".go").classList.add("green");        
        document.querySelector(".confirm").innerHTML = finish.link(URL);
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
        Total: R$ ${total.toFixed(2)}`

        let encoded = encodeURIComponent(text);
        
        finish = 'Fechar pedido';
        message = "https://wa.me/47984833226?text="+encoded
        URL = message;

        document.querySelector(".go").classList.add("green");        
        document.querySelector(".confirm").innerHTML = finish.link(URL);
    }
}


