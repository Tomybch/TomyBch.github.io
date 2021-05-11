class Question {
    constructor(text, choices, answer){ // Le constructeur attend 3 valeurs pour la class Questions
        this.text = text; // ici on stock les valeurs
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) { // on créé un function booleen
        return this.answer === choice;
    }
}
let questions = [
    // on se lie au constructeur par new Question, on doit ensuite donner 3 valeurs séparé par une virgule :
    new Question("Quelle méthode Javascript permet de filtrer les éléments d'un tableau", // ici le text
     ["indexOf()", "map()", "filter()", "reduce()"],// les choices dans un [tableau]
      "filter()"),     // la reponse exact

    new Question("Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
     ["isNaN()","includes()", "findIndex()", "isOdd()"],
      "includes()"),

    new Question("Quelle méthode transforme du JSON en un objet Javascript ?", 
    ["JSON.parse()","JSON.stringify()", "JSON.object()", "JSON.toJS"],
     "JSON.parse()"),

    new Question("Quel objet Javascript permet d'arrondir à l'entier le plus proche",
     ["Math.ceil()","Math.floor()", "Math.round()", "Math.random()"],
      "Math.round()")
  ];

  class Quiz{
      constructor(questions){ // ou sont stockées les 4 questions précédentes, on a ainsi 4 class Questions dans une class Quiz
          this.score = 0; //stock les variables ici qui seront incrémentées par la suite 
          this.questions = questions;
          this.currentQuestionIndex = 0;
      }

      getCurrentQuestion(){ //  on appel les questions 
          return this.questions[this.currentQuestionIndex]; 
      }

      guess(answer){
          if (this.getCurrentQuestion().isCorrectAnswer(answer)){ // on verifie si la reponse est bonne
              this.score++; // si c est le cas on incrémente
          }
          this.currentQuestionIndex++; // et dans tout les cas on passe à la question suivante
      }

      hasEnded(){ //verifie quand le quizz fini, des lors que toutes les questions sont posées, on attendra une reponse boléen
          return this.currentQuestionIndex >= this.questions.length; 
      }
  }


  const display = {
    ElementShown: function(id, text){ // commande tres interessante car elle permet d'eviter les repétitions en rendant dynamique id et text
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function(){
        let endQuizHTML = `
        <h1>Quiz terminé !</h1> 
        <h3>Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
        this.ElementShown("question", endQuizHTML); //this fais référence à display, question à l'id dans html et endQuizHTML à text
    },
    Question: function(){
        this.ElementShown("question", quiz.getCurrentQuestion().text);//appel la function qui fait référence au tableau [question] et on veux text
    },
    choices: function(){
        let choices = quiz.getCurrentQuestion().choices; //stock les choix des questions

        guessHandler = (id, guess) => { //function(id, guess)
            document.getElementById(id).onclick = function(){  // au click on recup l id
                quiz.guess(guess); // appel quiz.guess qui vérifie si c est la bonne reponse et incrémente le score et l avancé des questions
                quizApp(); // on appel quizApp qui gere l'affichage du quizz par rapport à l avancement
            }
        }
        for(let i = 0; i < choices.length; i++){ //affiche chaque choix
            this.ElementShown("choice" + i, choices[i]); //  recup chaques id(choice0,choice1... in html) et ecrit dans chaque <p> les choix
            guessHandler("guess" + i, choices[i]);//same for guess (parcourt guess0,guess1...),et vérifie si c est la bonne reponse
        }
    },
    progress: function(){
        let currentQuestionNumber = quiz.currentQuestionIndex + 1; //il faut add 1 à cause du decalage à 0 des tab js
        this.ElementShown('progress', "Question " + currentQuestionNumber + " sur " + quiz.questions.length);// affiche ce msg dans id progress
    }
  }

  quizApp = () => {
      if(quiz.hasEnded()){ // on vérifie si c'est TRUE et que le compteur de question a depasser le nbr de questions
        
        display.endQuiz(); //on affiche le msg de fin de quizz et le score
          
      }else{
        display.Question(); //on affiche la question
        display.choices();
        display.progress();
      }
    }


  let quiz = new Quiz(questions); // on stock la class quizz avec les 4 questions
  quizApp();
  console.log(quiz);