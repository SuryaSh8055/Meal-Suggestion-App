document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("suggestMeal");
    let mealDisplay = document.getElementById("mealDisplay");
    let mealTypeSelect = document.getElementById("MealType");
    
    button.addEventListener("click", function() {
        let selectedType = mealTypeSelect.value;

        if(meals[selectedType] && meals[selectedType].length > 0) {
            const randomMeal = meals[selectedType][Math.floor(Math.random() * meals[selectedType].length)];
            mealDisplay..innerHTML = `How about: <span style="color: red;">${randomMeal}</span> today?`;
        } else {
            mealDisplay.textContent = "No meals available!";
        }
    });
});
