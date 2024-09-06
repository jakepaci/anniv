const audio = new Audio('audio/kiss me.ogg');

document.querySelector('.envelope-wrapper').addEventListener('click', () => {
  audio.play();  // Trigger the audio playback when the user clicks on the envelope
});
