// Practice: Displaying Foods

// Once you have retrieved all of the foods from your own Food API, display each one of them in the DOM. Create an HTML representation of each food which will display the name of the food, its type, and its ethnicity.

// Create a DOM element in your index.html with a class of foodList.
// Create a function which returns a string template. The template is the HTML representation for a food item.
// Create a function that inserts an HTML representation of a food into the DOM
// Example fetch call using functions

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             const foodAsHTML = foodFactory(food)
//             addFoodToDom(foodAsHTML)
//         })
//     })
// Use Flexbox row direction so that you have a horizontal list of items.

// food items layout

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food)
            // addFoodToDom(foodAsHTML)
            console.log(foodAsHTML)
        })
    })

const foodFactory = function(object) {
    return `<li>${object.name}</li>`; //Use string literals to get the food object properties
} 

// const addFoodToDom = function(htmlElement) {
//     console.log(htmlElement); //Query the DOM, append HTML element data to what was already in there, and then update the DOM
// }























// console.log("1. Before fetch call console log")

// function displayFood(food) {
//     console.log("2. displayFood", food)
// }

// //making a call to database.json
// fetch("http://localhost:8088/food")
//     .then(foods => {
//         console.log("3. foods", foods)
//         //parse body of response as json
//         return foods.json()
//     })
//     .then(function (parsedFoods) {
//         //display json data in the console
//         console.log("4.")
//         console.table(parsedFoods)
//         parsedFoods.forEach(food => {
//             //call function that is defined on line 5
//             displayFood(food)
//         })
//     });


// console.log("5. After fetch call console log")