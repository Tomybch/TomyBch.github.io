const  searchInput = document.getElementById('searchInput');
const  results = document.getElementById('results');
const  randomMeal = document.getElementById('randomMeal');

let search = ''; //stock les value de la function searchInput

const fetchSearch = async(url)=>{
    meals = await fetch( //  attend que la requete soit http soit terminé avant de continuer et renvois une promise
        `https://www.themealdb.com/api/json/v1/1/${url}`) // API en dynamique
        .then(res=>res.json()) // the prévious promise is transform in json data text for its easily read by user
        .then(res=>res.meals)
};


const searchDisplay = async()=>{ //empeche searchdisplay tant que fetchSearch n'est pas fini
    await fetchSearch(search);

    if(meals === null){
        results.innerHTML = '<span class="noResult">Aucun resultat</span>';
    }

    results.innerHTML = (
        meals.map(meal =>(//recupere chaques recettes si il y en a plusieurs et donne les paramètres d'affichages => nom,zone,category,img et video de la recette
            `<div class="searchContainer">
                <h2>${meal.strMeal}</h2> 
                <div class="infos">
                <div>origin : ${meal.strArea}</div> 
                <div>category : ${meal.strCategory}</div>
                </div>
                <img src='${meal.strMealThumb}' /></br>
                <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>`
        )).join('')  //permet de séparer les maps par un espace au lieu de la virgule par defaut
    );
};


searchInput.addEventListener('input',(e)=>{
    search = `search.php?s=${e.target.value}` ; //  recupere ce que tape l user
    searchDisplay();
});


const randomMealDisplay = async()=>{
    await fetchSearch('random.php')// => www.themealdb.com/api/json/v1/1/random.php

    results.innerHTML = (
        meals.map(meal=> ( //mm parametre que plus haut, il y aura qu'une recette mais cela nous permet de reucp les données en dynamique
           `<div class="randomContainer">
            <h2>${meal.strMeal}</h2>
            <div class="infos">
              <div>origin : ${meal.strArea}</div>
              <div>catégory : ${meal.strCategory}</div>
            </div>
            <img src='${meal.strMealThumb}' />
            <p>${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
            </div> `


        ))
    );
};

randomMeal.addEventListener('click',randomMealDisplay); // au click du button
randomMealDisplay(); //affiche un plat au hasard au chargement de la page 