(function(){
    var afficherOnglet = function(a, animations){
        if(animations === undefined){
            animations = true
        }
        var li = a.parentNode
        var div = a.parentNode.parentNode.parentNode //au click on remonte jusqu'à la div parent
        var activeTab = div.querySelector('.tab-content.active')
        var aAfficher = div.querySelector(a.getAttribute('href'))
    
        if (li.classList.contains('active')){ //verif si li possede active pour empecher de cliquer sur le mm tabs
            return false // le reste de la function ne sera pas exe
        }
    
        div.querySelector('.tabs .active').classList.remove('active')
    
        li.classList.add('active')
    

        if(animations){
            activeTab.classList.add('fade')
            activeTab.classList.remove('in')
            var transitionend = function(){
                this.classList.remove('fade')
                this.classList.remove('active')
                aAfficher.classList.add('active')
                aAfficher.classList.add('fade')
                aAfficher.classList.add('in')
                activeTab.removeEventListener('transitionend',transitionend)
                aAfficher.offsetWidth
            }
            activeTab.addEventListener('transitionend',transitionend )
            activeTab.addEventListener('webkitTransitionEnd',transitionend )
        }else{
            aAfficher.classList.add('active')
            activeTab.classList.remove('active')
        }
       
       
    }
    
    
    
    
    var tabs = document.querySelectorAll('.tabs a')
    
    
    
    for (var i=0; i<tabs.length; i++){
        tabs[i].addEventListener('click', function(e){ //pour chaque i soit chaque tabs =>
            afficherOnglet(this)
           
        })
    }
    
var hashChange = function(e){
    var hash = window.location.hash
    var a = document.querySelector('a[href="' + hash + '"]') //concat pour un rendu dynamique
    if(a !== null && !a.classList.contains('active')){
        afficherOnglet(a, e !== undefined)
        
    }
}

    window.addEventListener('hashchange', hashChange)
        hashChange()
    
}) ()