let soundKeys = document.querySelectorAll('#key');
let mobilePlay = document.querySelectorAll('.playaudio');
const hiHat = document.querySelector('.hihat');
const drumRoll = document.querySelector('.drumroll');
const drumSnares = document.querySelector('.snares');
const drumKick = document.querySelector('.kick');

//looping through each key and assigning an event listener
soundKeys.forEach(function (key) {
    key.addEventListener('keydown', (e) => {
        playSound();
    });
});



window.addEventListener('keydown', (e) => {
    playSound(e.key);
});

function playSound(key) {

if (key == 'A' || key == 'a'){
    hiHat.play() 
        
}

else{
    hiHat.pause();
}

 if (key == 'D' || key == 'd'){
    drumRoll.play()  
}

else{
    drumRoll.pause();
}

 if (key == 'S' || key == 's'){ 
    drumSnares.play()    
 }


 else{
    drumSnares.pause();
}


if (key == 'K' || key == 'k'){ 
    drumKick.play()    
 }

 
 else{
    drumKick.pause();
}

 

}


//for Mobile

/*
created an array for the sounds and assigned sounds to each button element
according to their index
*/
const audios = [hiHat, drumRoll, drumSnares, drumKick];

mobilePlay.forEach(function(mplay, mplayIndex) {
    mplay.addEventListener('click', function() {
        audios[mplayIndex].play();
    });
});
;
