// fetch('https://dummyjson.com/docs/carts')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//     });




//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
// fetch('https://dummyjson.com/carts')
//     .then(value => value.json())
//     .then(cartsArray => {
//         console.log(cartsArray)
//         let {carts} = cartsArray
//         let containerDiv = document.createElement('div');
//         containerDiv.classList.add('container');
//
//         for (const cart of carts) {
//
//             let cartDiv = document.createElement('div');
//             let cartTitle = document.createElement('h3');
//             cartDiv.append(cartTitle)
//             cartTitle.innerText = `Cart number - ${cart.id}`
//
//
//             for (const product of cart.products) {
//                 let productDiv = document.createElement('div')
//                 let productTitle = document.createElement('p');
//                 productTitle.innerText = `ID: ${product.id} \n Thing: ${product.title} $= ${product.price}$ >>> SALLE: ${product.discountPercentage}%`
//                 let productTitleAmount = document.createElement('p');
//                 productTitleAmount.innerText = `Product amount - ${product.quantity} \n Total price: ${product.total}$ >>> Total price with discount: ${product.discountedTotal}$`
//                 let productImg = document.createElement('img');
//                 productImg.src = `${product.thumbnail}`
//                 productDiv.classList.add('product-style')
//                 productDiv.append(productTitle,productTitleAmount,productImg)
//                 let hr = document.createElement('hr');
//                 cartDiv.append(hr,productDiv)
//             }
//             containerDiv.appendChild(cartDiv)
//
//
//         }
//         document.body.appendChild(containerDiv)
//     });

//- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch(' https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipesArray => {
        let {recipes} = recipesArray
        let containerDiv = document.createElement('div');
        containerDiv.classList.add('container');

        for (const recipe of recipes) {
            let divRecipe = document.createElement('div');
            let recipeTitle = document.createElement('h3');
            recipeTitle.innerText = `${recipe.id} - ${recipe.name} - ${recipe.mealType}`
            let userTxt = document.createElement('h5')
            userTxt.innerText = `User information : `
            let userInfo = document.createElement('p');
            userInfo.innerText = `User ID : ${recipe.userId}\n  User rating : ${recipe.rating}\n User reviewer : ${recipe.reviewCount}`
            let titleText = document.createElement('h5');
            titleText.innerText = 'For cook in you need :'

            let recipeImage = document.createElement('img');
            recipeImage.src = `${recipe.image}`


            divRecipe.append(recipeTitle,recipeImage,userTxt,userInfo,titleText)

            
            for (const ingredient of recipe.ingredients) {

                let ingredientList = document.createElement('li');
                ingredientList.innerText = `${ingredient}`
                divRecipe.append(ingredientList);
            }
            let instructionTitle = document.createElement('h5')
            instructionTitle.innerText = 'Instruction : '
            divRecipe.appendChild(instructionTitle);

            for (const instruction of recipe.instructions) {
                let instructionText =  document.createElement('li');
                instructionText.innerText = `${instruction}`
                divRecipe.appendChild(instructionText);

            }

            let mealInfo = document.createElement('h5');
            mealInfo.innerText = `Meal Information : `
            let mealInfoTxt = document.createElement('p');
            mealInfoTxt.innerText = `Prepare time : ${recipe.prepTimeMinutes}min\n Cooking time : ${recipe.cookTimeMinutes}min\n Serving : ${recipe.servings}\n Difficulty : ${recipe.difficulty}\n Cuisine : ${recipe.cuisine}\n Calories/PerServing : ${recipe.caloriesPerServing}`

            let tagInfo = document.createElement('h5');
            tagInfo.innerText = `Tags : `
            divRecipe.appendChild(tagInfo);

            for (const tag of recipe.tags) {

                let tagTxt = document.createElement('li');
                tagTxt.innerText = `${tag}`
                divRecipe.appendChild(tagTxt);

            }

            containerDiv.append(divRecipe,mealInfo,mealInfoTxt)
        }
        document.body.appendChild(containerDiv)
    });