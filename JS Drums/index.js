/* linking the button variables to the ids in the html document */
const clapBtn = document.getElementById("clap-btn")
const hihatBtn = document.getElementById("hihat-btn")
const kickBtn = document.getElementById("kick-btn")
const openhatBtn = document.getElementById("openhat-btn")
const boomBtn = document.getElementById("boom-btn")
const rideBtn = document.getElementById("ride-btn")
const snareBtn = document.getElementById("snare-btn")
const tomBtn = document.getElementById("tom-btn")
const tinkBtn = document.getElementById("tink-btn")

/* linking the sound variables to the ids in the html document */
const soundA = document.getElementById("a")
const soundS = document.getElementById("s")
const soundD = document.getElementById("d")
const soundF = document.getElementById("f")
const soundG = document.getElementById("g")
const soundH = document.getElementById("h")
const soundJ = document.getElementById("j")
const soundK = document.getElementById("k")
const soundL = document.getElementById("l")

/* defining the clicked state of the buttons when they are clicked */
const clickedState = 'playing'

/* add a function handleButtonClick  to deal with the click and playing of the sound as well as ensuring the styling changes when the button is clicked and goes back to default when the sound stops playing*/
function handleButtonClick(button, sound) {
    button.addEventListener('click', function (){
        sound.currentTime = 0; // rewind the sound to the beginning
        sound.play()
        button.classList.add(clickedState)
    })

    sound.addEventListener('ended', function() {
        button.classList.remove(clickedState);
      });
}

/* adding click event listeners to the buttons*/
clapBtn.addEventListener('click', function() {
    handleButtonClick(clapBtn, soundA);
  });
hihatBtn.addEventListener('click', function() {
    handleButtonClick(hihatBtn, soundS);
});
kickBtn.addEventListener('click', function() {
    handleButtonClick(kickBtn, soundD);
});
openhatBtn.addEventListener('click', function() {
    handleButtonClick(openhatBtn, soundF);
});
boomBtn.addEventListener('click', function() {
    handleButtonClick(boomBtn, soundG);
});
rideBtn.addEventListener('click', function() {
    handleButtonClick(rideBtn, soundH);
});
snareBtn.addEventListener('click', function() {
    handleButtonClick(snareBtn, soundJ);
});
tomBtn.addEventListener('click', function() {
    handleButtonClick(tomBtn, soundK);
});
tinkBtn.addEventListener('click', function() {
    handleButtonClick(tinkBtn, soundL);
});

handleButtonClick(clapBtn, soundA);

handleButtonClick(kickBtn, soundD);
handleButtonClick(openhatBtn, soundF);
handleButtonClick(boomBtn, soundG);
handleButtonClick(rideBtn, soundH);
handleButtonClick(snareBtn, soundJ);
handleButtonClick(tomBtn, soundK);
handleButtonClick(tinkBtn, soundL);


/*clapBtn.addEventListener('click', function() {
    soundA.play();
    clapBtn.classList.add(clickedState);
  });

soundA.addEventListener('ended', function() {
    clapBtn.classList.remove(clickedState);
});

hihatBtn.addEventListener('click', function() {
    soundS.play();
    hihatBtn.classList.add(clickedState);
  });
  soundS.addEventListener('ended', function() {
    hihatBtn.classList.remove(clickedState)
  })
kickBtn.addEventListener('click', function() {
    soundD.play();
    kickBtn.classList.add('playing');   
  });
openhatBtn.addEventListener('click', function() {
    soundF.play();
    openhatBtn.classList.add('playing');   
  });
boomBtn.addEventListener('click', function() {
    soundG.play();
    boomBtn.classList.add('playing');   
  });
rideBtn.addEventListener('click', function() {
    soundH.play();
    rideBtn.classList.add('playing');   
  });
snareBtn.addEventListener('click', function() {
    soundJ.play();
    snareBtn.classList.add('playing');   
  });
tomBtn.addEventListener('click', function() {
    soundK.play();
    tomBtn.classList.add('playing');   
  });
  soundL.addEventListener('ended', function(){
    tinkBtn.classList.remove(clickedState);
});
tinkBtn.addEventListener('click', function() {
    soundL.play();
    tinkBtn.classList.add(clickedState);   
  });  
soundL.addEventListener('ended', function(){
    tinkBtn.classList.remove(clickedState);
}); */