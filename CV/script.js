//NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function(){
    const scrollTop = window.pageTOffset || /* ce code recupere la data d'un scroll top */
    this.document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){ /* si on scroll vers le bas scrollTop sera plus grand que lastScrollTop qui a sa valeur précedente */
        navbar.style.top="-50px"; /* et la navbar disparait car elle sort du cadre de l'affichage utilisateur */
    }else{
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})


//TYPED

var typed = new Typed('.typed', {
    strings: ["Bonjour à tous et à toutes, je me présente je m'appel Tom",
     "Après une carrière m'ayant fait découvrir plusieurs milieux professionnels et exercer plus de 10 métiers différents.", 
     "J'ai décidé de me lancer à fond dans l'apprentissage du code, depuis près de 3 mois je me forme à temps plein en autodidacte aux langages Front-end tels que CSS, Javascript et son framework React, et pour le Back-end Node-js, cela afin de devenir le plus rapidement possible développeur. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder. "],
    typeSpeed: 20,
  });


  //COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function(){
    const top = $('.counter').offset().top - window.innerHeight;
    if(compteur == 0 && $(window).scrollTop() > top){
        $('.counter-value').each(function(){
            let $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 10000,
                easing: 'swing',
                step: function(){
                    $this.text(Math.floor(this.countNum));
                },
                complete: function(){
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    };
});


//AOS
AOS.init();