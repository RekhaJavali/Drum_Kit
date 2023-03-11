

for (var i=0;i<document.querySelectorAll(".drum").length; i++){

    
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        //console.log(this.style.color="green");
        druminnerHTML = this.innerHTML;
        makesound(druminnerHTML);    
        btnanimation(druminnerHTML)
    });
}

document.addEventListener("keypress", function(e) {

    //function logkey(e){
    console.log(e.key + " pressed from keyboard");
    makesound(e.key);
    btnanimation(e.key);
});

function makesound(pressed_btn){

    switch (pressed_btn){
        case 'w':                
                var sound = new Audio("./sounds/tom-1.mp3")
                sound.play();
                //console.log("w");
                break;
        case 'a':
                var sound = new Audio("./sounds/tom-2.mp3")
                sound.play();
                break;
        case 's':
                var sound = new Audio("./sounds/tom-3.mp3")
                sound.play();
                break;
        case 'd':
                 var sound = new Audio("./sounds/tom-4.mp3")
                sound.play();
                break;
        case 'j':
                var sound = new Audio("./sounds/crash.mp3")
                sound.play();
                break;
        case 'k':
                 var sound = new Audio("./sounds/kick-bass.mp3")
                sound.play();
                break;
        case 'l':
                var sound = new Audio("./sounds/snare.mp3")
                sound.play();
                break;       
        default :
                console.log(pressed_btn);
    }
}

function btnanimation(currentkey){
    var keyanimate = document.querySelector("."+currentkey)
    keyanimate.classList.add("pressed");
   setTimeout(function(){keyanimate.classList.remove("pressed")}, 100);
}

/*
document.querySelector("button").addEventListener("click", function(){
    console.log("W is clicked");
    var sound = new Audio("./sounds/tom-1.mp3")
    sound.play();
    console.log(sound);
});

for ( var i= 0; i< document.querySelectorAll("button").length; i++ ){
    var butn= document.querySelectorAll("button")[i];
    console.log(butn);
    console.log(butn.innerHTML);
   butn.addEventListener("click", function(){
        console.log("W is clicked");
        var sound = new Audio("./sounds/tom-1.mp3")
        sound.play();
        console.log(sound);
    });*/
    
