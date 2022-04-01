function selectionFood (foodInfo){
    const foodSelect = document.querySelector(".select");
    if (foodSelect !== null){
        foodSelect.classList.remove("select");
    }
    foodInfo.classList.add("select");
}

function selectionDrink (drinkInfo){
    const drinkSelect = document.querySelector(".select");
    if (drinkSelect !== null){
        drinkSelect.classList.remove("select");
    }
    drinkInfo.classList.add("select");
}

function selectionCandies (candiesInfo){
    const candiesSelect = document.querySelector(".select");
    if (candiesSelect !== null){
        candiesSelect.classList.remove("select");
    }
    candiesInfo.classList.add("select");
}
