const envelope = document.querySelector(".envelope-wrapper");
const audio = document.querySelector("audio");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");

  if (envelope.classList.contains("flap")) {
    // Unmute and play the audio when the envelope is clicked
    audio.muted = false;
    audio.play();
  }
});
