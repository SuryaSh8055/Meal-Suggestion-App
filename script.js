document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("suggestMeal");
    let mealDisplay = document.getElementById("mealDisplay");
    let mealTypeSelect = document.getElementById("MealType");
    
    button.addEventListener("click", function() {
        let selectedType = mealTypeSelect.value;

        if(meals[selectedType] && meals[selectedType].length > 0) {
            const randomMeal = meals[selectedType][Math.floor(Math.random() * meals[selectedType].length)];
            mealDisplay.textContent = `How about: <span>${randomMeal}</span>?`;
        } else {
            mealDisplay.textContent = "No meals available!";
        }
    });
});
