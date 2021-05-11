const searchInput = document.getElementById('search');
const results = document.getElementById('results');

let countries;
let searchTerm = '';


const fetchCountries = async () => { //ici on créee un function async qui va renvoyer une promise lorsqu elle sera appelée
    countries = await fetch( // await permet d'attendre la reception de la data pour poursuivre
                            // fetch qui procure un moyen facile et logique de récupérer des ressources à travers le réseau de manière asynchrone.
        'https://restcountries.eu/rest/v2/all?fields=name;population;flag').then(res => res.json());
        //.then recupère la promise(data) et (res => res.json()) la traduit en json qui est un language textuel lisible par l user (key/value)
        
};

const showCountries = async() => {
    await fetchCountries(); // on attend la promise de fetchCountries pour poursuivre

    results.innerHTML = ( 
        countries
            .filter(country => country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
            //filter permet de cibler chaque elements de countries, => represente le filtre, donc on veux pour chaque country de countries
            // qu ils soient en lowerCase et includes verifie si le pays est présent dans la liste, cette fonction renvois un boleen.

            .map(country => ( //recupere les données sous forme de (key,value) exemple => (France,66 millions)
            //on ecrit ensuite du HTML pour creer des balises qui stockerons nos infos récupérés précédemment

                ` 
                <li class="country-item">
                    <img class="country-flag" src="${country.flag}" />
                    <h3 class="country-name">${country.name}</h3>
                    <div class="country-info">
                        <h2 class="country-population">${numberWithSpace(country.population)}</h2>
                        <h5 class="country-population-text">Habitants</h5>
                    </div>    
                </li>
                `
            )).join('') // join supprime la virgule => (France 66 millions)
    );
};



searchInput.addEventListener('input', (e) => {searchTerm = e.target.value; // recupere ce qu'on tape dans l'input pour le stocker dans searchTerm
    showCountries(); // permet à chaques lettre tapé de lancer la function afin d'avoir un effet prévisualisation.
});


function numberWithSpace(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' , '); // affiche de maniere plus lisible le nbr d'habitants 1000000 => 1,000,000 
}