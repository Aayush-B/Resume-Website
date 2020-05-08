"use strict" ;

var navBarLinks=document.getElementsByClassName('nav-bar-links') ;

for(let i=0;i<navBarLinks.length;i++){
    navBarLinks[i].addEventListener('click',function(event){
        event.preventDefault() ;
    }) ;
} 

for(let i=0;i<navBarLinks.length;i++){
    navBarLinks[i].addEventListener('click',function(event){
        var currPos=window.pageYOffset ;
        var targetPos=document.getElementById(event.target.getAttribute('data-section')).getBoundingClientRect().y ;
        setInterval(function(){
            if(currPos>=targetPos){
                clearInterval(scroller) ;
                return ; 
            }
    
            window.scrollBy(0,20) ;
            currPos+=20 ;
        },5) ;
    }) ;
}



