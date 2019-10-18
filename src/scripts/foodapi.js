/* Practice: Displaying Foods

https://github.com/nashville-software-school/client-side-mastery/blob/master/book-2-the-neophyte/chapters/FETCH_INTRO.md

Once you have retrieved all of the foods from your own Food API, display each one of them in the DOM. Create an HTML representation of each food which will display the name of the food, its type, and its ethnicity. */

// 1) Create a DOM element in your index.html with a class of foodList.

const foodList = document.querySelector(".foodList");

/* 2) Create a function which returns a string template. The template is the HTML representation for a food item, and
3) Create a function that inserts an HTML representation of a food into the DOM */

const asdf = function foodAsHTML(food) {
return `
    ${food.name}
    ${food.category}
    ${food.ethnicity}`
};

function createFoodElement(food) { //The function executes receiving "foodObj" from where it was called (which came from forEach which came from parsedFoods which came from "foods" which came from the fetch) and now calls that info "food"
    const putFoodInDiv = //a variable is declared...
    document.createElement("div"); //That creates a div on the DOM
    putFoodInDiv.innerText = asdf(food); //and runs a function that will put the result in the newly-created div
    foodList.appendChild(putFoodInDiv); //the asdf function takes foodList and adds the food list to that
}

// const foodAsHTML = foodFactory(food) {

fetch("http://localhost:8088/food") //Fetch gets the API (in this case, we're using json-server to create a local "API" based on the dataset we have in our database.json file. We run json-server from that location locally in the terminal (but it could be from anywhere), get the HTTP address it provides, and use it in here in the FETCH command )
    .then(foods => foods.json()) //Take the content we got back (in this case database.json, put it in a variable called foods and then turn the content into javascript)
    .then(parsedFoods => { //The above stuff is passed to pasedFoods ...
        parsedFoods.forEach(foodObj => { //... the forEach method looks at each item in the food array and for each and puts each item into foodObj and runs a function...
            createFoodElement(foodObj) // The function createFoodElement takes what is passed to it (foodObj) and executes on line 21.
        })
    })
/* Example fetch call using functions

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
        })
    }) */


    // Use Flexbox row direction so that you have a horizontal list of items.























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