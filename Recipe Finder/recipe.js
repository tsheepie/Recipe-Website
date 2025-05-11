const recipes = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        description: "A Classic Italian pasta dish.",
        ingredients: [
            { name: "Spaghetti", image: "Web images/Spaghetti (1).jpg"}, 
            { name: "Eggs", image: "Web images/Eggs.jpg"}, 
            { name: "Parmesan cheese", image: "Web images/Parmesan Cheese.jpg"}, 
            { name: "Pancetta", image: "Web images/Pancetta.jpg"}, 
            { name: "Pepper", image: "Web images/Black Pepper.jpg"}
            
            ],
    
            steps: [
            "Boil the spaghetti.",
            "Cook the pancetta until crisp.",
            "Mix eggs and cheese in a bowl.",
            "Combine spaghetti with pancetta and remove from heat.",
            "Stir in the egg mixture and serve."
        ],
        image: "Web images/Spaghetti Carbonara(1).jpg"
    },
    {
        id: 2,
        title: "Chicken Curry",
        description: "A flavorful chicken curry.",
        ingredients: [
            { name: "Chicken", image: "Web images/Chicken Breasts.jpg"}, 
            { name: "Onions", image: "Web images/Onions.jpg"}, 
            { name: "Tomatoes", image: "Web images/Tomatoes.jpg"}, 
            { name: "Garlic", image: "Web images/Garlic.jpg"}, 
            { name: "Spices", image: "Web images/Spices.jpg"}
        ],

        steps: [
            "Saute onions and garlic.",
            "Add spices and cook until fragrant.",
            "Add chicken and brown.",
            "Add tomatoes and simmer until chicken is cooked.",
            "Serve with rice."
        ],
        image: "Web images/Chicken Curry (1).jpg"
    },
    {
        id: 3,
        title: "Best homemade brownies",
        description: "Home made brownies.",
        ingredients: [
            { name: "Eggs", image: "Web images/Eggs.jpg"}, 
            { name: "Powdered sugar", image: "Web images/powdered sugar.jpg"}, 
            { name: "Unsweetened cocoa powder", image: "Web images/Cocoa Powder.jpg"}, 
            { name: "Oil", image: "Web images/Oil.jpg"}, 
            { name: "Vanilla Extract", image: "Web images/Vanilla Extract(1).jpg"}
        ],

        steps: [
            "Mix together the dry and wet ingredients in two separate bowls.",
            "Combine the wet and dry ingredients.",
            "Pour the batter into an 8×8 inch baking pan lined with parchment paper.",
            "Transfer the pan to a 325-degree oven and bake for 40 to 45 minutes."
        ],
        image: "Web images/the-best-brownies.jpg"
    }
];

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(query));
    displayRecipeList(filteredRecipes);
});

function displayRecipeList(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';
    recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" style="width: 100px; height: 100px; object-fit: cover;">
            <span>${recipe.title}: ${recipe.description}</span>
        `;
        li.addEventListener('click', () => displayRecipeDetails(recipe));
        recipeList.appendChild(li);
    });
}

function displayRecipeDetails(recipe) {
    const recipeDetails = document.getElementById('recipe-details');
    recipeDetails.innerHTML = `
        <h3>${recipe.title}</h3>
        <img class="recipe-main-image" src="${recipe.image}" alt="${recipe.title}">
        <h4>Ingredients</h4>
        <div class="ingredients-container">
            ${recipe.ingredients.map(ingredient => `
                <div class="ingredient">
                    <img src="${ingredient.image}" alt="${ingredient.name}">
                    <p>${ingredient.name}</p>
                </div>
                `).join('')}
        </div>
        <h4>Steps</h4>
        <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
        <button id="print-button" class="print-button">Print Recipe</button>
    `;
    

    document.querySelectorAll('#recipe-details .ingredient').forEach(div => {
        div.addEventListener('click', () => {
            div.classList.toggle('purchased');
        });
    });
    document.getElementById('print-button').addEventListener('click', () => {
        window.print();
    });

    //scroll to recipe details
    setTimeout(() => {
        const headerOffset = 60
        const recipeDetailsPosition = recipeDetails.getBoundingClientRect().top;
        const offsetPosition = recipeDetailsPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }, 100);
}

document.addEventListener('DOMContentLoaded', function(){
    const homeButton = document.getElementById('home-button');
    if (homeButton) {
        homeButton.addEventListener('click', function(){

            //clears the search bar
            const searchBar = document.getElementById('search-bar');
            if (searchBar) {
                searchBar.value = '';
            }

            //clears the recipe details
            const recipeDetails = document.getElementById('recipe-details');
            if (recipeDetails) {
                recipeDetails.innerHTML = '';
            }

            const recipeList = document.getElementById('recipe-list');
            if (recipeList) {
                recipeList.innerHTML = '';
            }

            //scroll to the top of the page
            window.scrollTo(0,0);
        })
    }
})