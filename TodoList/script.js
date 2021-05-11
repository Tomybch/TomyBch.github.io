const list = document.getElementById('list');
const form = document.querySelector('form');// car pas d id
const item = document.getElementById('item');

let storageContent = window.localStorage.todoList;//on créee un variable pour notre key todoList

form.addEventListener('submit', (e) =>{
    e.preventDefault(); // sans cela le text s'affiche dans list mais disparait quand on valide car la page se rafraichit
    list.innerHTML += `<li>${item.value}</li>`;//ajoute l'item entré dans un input par l user à la liste puis sera stocké dans todoList
    storage();// actualise storage quand on ajoute une liste
    item.value = '';//libere l'input pour le prochain ajout
});

list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('checked')){ // une boucle qui enleve et ajoute checked à notre li ciblé
        e.target.remove();
        storage();// actualise storage quand on enleve une liste
    }else{
        e.target.classList.add('checked');
    } 
});



function storage(){//permet de stocker les list
    window.localStorage.todoList = list.innerHTML; // on stock les list dans la nouvell key todoList =>inspecteur=>application=>local Storage
};

function getValue(){
    if(!storageContent){//si il est vide
        list.innerHTML = '<li>Cliquez sur un todo pour le supprimer</li>'; //ajoute un li 
    }else{
        list.innerHTML = storageContent;
    }
};    
getValue();