const data = {
    'E': {sound: 'media/sounds/drum1.mp3'},//un tableau data avec des  clefs/valeurs
    'R': {sound: 'media/sounds/drum2.mp3'},// letter => objet
    'T': {sound: 'media/sounds/beat1.mp3'},//clefs => sounds
    'D': {sound: 'media/sounds/beat2.mp3'},// valeurs => src
    'F': {sound: 'media/sounds/beat3.mp3'},
    'G': {sound: 'media/sounds/lindrum.mp3'},
    'C': {sound: 'media/sounds/percu1.mp3'},
    'V': {sound: 'media/sounds/electro1.mp3'},
    'B': {sound: 'media/sounds/electro2.mp3'},
  };

  function construct(){
      for(const letter in data){ // parcout tt les elements du tableau data soit toute les lettres
        const keyDiv = document.createElement('div');
        keyDiv.classList.add('drum');

        let h2 = document.createElement('h2');
        h2.textContent = letter; 

        keyDiv.appendChild(h2); //on ajoute h2 à keyDiv

        document.getElementById('musicBox').appendChild(keyDiv); //et on injecte keyDiv à musicBox

        keyDiv.addEventListener('click', function(event){
            let letter = event.currentTarget.querySelector('h2').textContent; //au clique on recupere le textContent 
            playDrum(letter); // et au click on appel playDrum avc letter en paramètre
            
        });
      };
  };
  construct();

  function playDrum(letter){
      const audio = new Audio() // L'Audio() constructeur crée
      // et renvoie un nouveau HTMLAudioElement qui peut être attaché à un document pour que l'utilisateur interagisse et / ou écoute
      audio.src = data[letter].sound; // injecte le src, on recupere dans la variable data le sound de la lettre selectionnée
      audio.play();
  };

  



  let drums = document.querySelectorAll(".drum");
  
  window.addEventListener('keypress', onPress); // lorsque qu on appuie sur une touche cela active la function ci dessous
      function onPress(event){
        playDrum(event.key.toUpperCase()); // key fais reférance au touche de clavier
          drums.forEach(drum => { 
                drum.classList.add("active");            
          });
        };

  window.addEventListener('keyup', offPress); //lorsque qu on relache  une touche cela active la function ci dessous
    function offPress(event){
      playDrum(event.key.toUpperCase()); // key fais reférance au touche de clavier
        drums.forEach(drum => { 
              drum.classList.remove("active");        
        });
    };

    

    