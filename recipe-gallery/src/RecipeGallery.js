import React from 'react'

const RecipeGallery = () => {
    const recipes = [
        {
            id: 1,
            title: "Spaghetti Carbonara",
            ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
            image: "https://thefoodcharlatan.com/wp-content/uploads/2023/04/Spaghetti-Sauce-Recipe-6.jpg"
    
        },
        {
            id: 2,
            title: "Mystery Pie",
            ingredients: ["Pal Syrup", "Iron Dust", "Pokemon Meat"],
            image: "https://i.pinimg.com/originals/86/22/4b/86224b6db78fee30509864f6ca861825.jpg"
        }
    ];

    const recipeCards = recipes.map(item => (
        <div key={item.id}>
            <h2>{item.title}</h2>
            <ul>
                {item.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <img
             src={item.image}
             alt={item.title}
             style={{ maxWidth: '300px', maxHeight: '200px' }} />
        </div>
    ));

    return (
        <div>
            {recipeCards}
        </div>
    );
};



export default RecipeGallery;