const passwordOutput = document.getElementById('password-output');
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn".split(''); // split('') affiche les elements du tableau espacé 
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN".split(''); 
const dataNumbers = "0123456789".split(''); 
const dataSymbols = "!§:/;.,?*%£|\-_~$¨^=+°<>@`'#&".split('');

function generatePassword(){
  const data = [].concat(    //ici on crée un tableau data qui va regroupé tout les tableaux précedents
    lowercase.checked ? dataLowercase : [], // l'id lowercase de la checkbox en html SI il est check ALORS on add dataLowercase SINON tableau vide
    uppercase.checked ? dataUppercase : [],
    numbers.checked ? dataNumbers : [],
    symbols.checked ? dataSymbols : []
  );
  
  let passwordLength = parseInt(document.getElementById('display-password-length').value);
  //parsInt recupere une valeur numérique, on recupere la value de "display-password-length"
  let newPassword = ''; // en attente pour stocker des valeurs

  if(data.length === 0){ // on demande à cocher une case 
    passwordOutput.innerHTML = "Générateur de mot de passe"; 
    alert('veillez sélectionner des critères');
    return;
  }

  for(let i = 0; i < passwordLength; i++) {
    newPassword += data[Math.floor(Math.random() * data.length)];
    // tant que le newpassword ne fait pas la length de la value de la range, on fait un tour de boucle :
    // newpassword se construit lettre par lettre, et réprésente à chaque fois une lettre de plus (+=)
    // donc on additione newpassword + data qui devra => floor => random(0=>9)*data.length qui correspond aux cases cochées.
  }
  passwordOutput.value = newPassword;

  passwordOutput.select(); // le surligne/selectionne sur notre page web
  document.execCommand('copy'); // copy ce qui est selectionné
  generateButton.innerHTML = 'Copié !'; 
  setTimeout( function() {generateButton.innerHTML = "générer mot de passe"}, 3000); // au bout de 3s affiche ce msg à la place

  
}