



function AiVoice(voice){
 if(!voice)return;
 setTimeout(() => {
  voice.currentTime = 0;
  voice.play();
}, 500); // 1000ms = 1 second
}

export{AiVoice}