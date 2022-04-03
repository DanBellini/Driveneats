//variaveis goblais
let nameFood;
let priceFood;
let nameDrink;
let priceDrink;
let nameCandies;
let priceCandies;


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

//funçoes para salvar as variaveis globais

function foodInformation (foodInfo){
    const selectFood = document.querySelector(".optionFood").querySelector(".information");
    if (selectFood !== null){
        selectFood.classList.remove("information");
    }
    foodInfo.classList.add("information");
    nameFood = foodInfo.querySelector("h5").innerHTML
    priceFood = foodInfo.querySelector("h6").innerHTML
    if(nameFood && nameDrink && nameCandies){
        document.querySelector(".go").classList.add("green");
        document.querySelector(".confirm").innerHTML = 'Fechar pedido';
    }
}
function drinkInformation (drinkInfo){
    const selectDrink = document.querySelector(".optionFood").querySelector(".information");
    if (selectDrink !== null){
        selectDrink.classList.remove("information");
    }
    drinkInfo.classList.add("information");
    nameDrink = drinkInfo.querySelector("h5").innerHTML
    priceDrink = drinkInfo.querySelector("h6").innerHTML
    if(nameFood && nameDrink && nameCandies){
        document.querySelector(".go").classList.add("green");
        document.querySelector(".confirm").innerHTML = 'Fechar pedido';
    }
}
function candiesInformation (candiesInfo){
    const selectCandies = document.querySelector(".optionFood").querySelector(".information");
    if (selectCandies !== null){
        selectCandies.classList.remove("information");
    }
    candiesInfo.classList.add("information");
    nameCandies = candiesInfo.querySelector("h5").innerHTML
    priceCandies = candiesInfo.querySelector("h6").innerHTML
    if(nameFood && nameDrink && nameCandies){
        document.querySelector(".go").classList.add("green");
        document.querySelector(".confirm").innerHTML = 'Fechar pedido';
    }
}
//função para finalizar pedido
