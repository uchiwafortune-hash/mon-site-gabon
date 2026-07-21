/* =========================
   QUIZ ASTRONOMIE
========================= */


let questions = [

{
question:"Quelle est la planète la plus proche du Soleil ?",

reponses:[
"Mercure",
"Mars",
"Jupiter",
"Terre"
],

correct:"Mercure"

},


{
question:"Combien y a-t-il de planètes dans le Système solaire ?",

reponses:[
"5",
"8",
"10",
"12"
],

correct:"8"

},


{
question:"Quelle planète est surnommée la planète rouge ?",

reponses:[
"Vénus",
"Mars",
"Saturne",
"Neptune"
],

correct:"Mars"

},


{
question:"Quel objet permet d'observer les étoiles lointaines ?",

reponses:[
"Un microscope",
"Un télescope",
"Une fusée",
"Un satellite"
],

correct:"Un télescope"

},


{
question:"Quel est le nom de notre galaxie ?",

reponses:[
"Andromède",
"Voie lactée",
"Orion",
"Jupiter"
],

correct:"Voie lactée"

}

];


let numeroQuestion = 0;

let score = 0;



function afficherQuestion(){


let question = questions[numeroQuestion];


document.getElementById("question").innerHTML = question.question;


let boutons = document.querySelectorAll("#quiz button");


boutons.forEach(function(bouton,index){


bouton.innerHTML = question.reponses[index];


});


}



function verifier(reponse){


let bonneReponse = questions[numeroQuestion].correct;


if(reponse === bonneReponse){


score++;


document.getElementById("resultat").innerHTML =
"✅ Bonne réponse !";


}

else{


document.getElementById("resultat").innerHTML =
"❌ Mauvaise réponse. La bonne réponse est : "
+ bonneReponse;


}


numeroQuestion++;


if(numeroQuestion < questions.length){


setTimeout(afficherQuestion,1500);


}

else{


setTimeout(function(){


document.getElementById("resultat").innerHTML =

"🎉 Quiz terminé ! Ton score : "
+ score + "/" + questions.length;


},1500);


}


}



window.onload=function(){


afficherQuestion();


};/* =========================
   BOUTON RETOUR EN HAUT
========================= */


let boutonHaut = document.createElement("button");

boutonHaut.innerHTML = "⬆️";

boutonHaut.id = "haut";


document.body.appendChild(boutonHaut);



boutonHaut.style.display = "none";



window.addEventListener("scroll", function(){


if(window.scrollY > 400){


boutonHaut.style.display="block";


}

else{


boutonHaut.style.display="none";


}


});



boutonHaut.addEventListener("click",function(){


window.scrollTo({

top:0,

behavior:"smooth"

});


});



/* =========================
   ANIMATION AU DEFILEMENT
========================= */


let elements = document.querySelectorAll("section");



let observer = new IntersectionObserver(function(entries){


entries.forEach(function(entry){


if(entry.isIntersecting){


entry.target.style.opacity="1";


entry.target.style.transform="translateY(0)";


}


});


});



elements.forEach(function(element){


element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="0.8s";


observer.observe(element);


});



/* =========================
   MESSAGE D'ACCUEIL
========================= */


console.log(

"Bienvenue sur AstroVision - Site créé par ENGOUANG FORTUNE 🌌"

);
