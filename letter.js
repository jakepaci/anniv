const envelope = document.querySelector(".envelope-wrapper");
const audio = document.querySelector("audio");
const polaroid = document.querySelector(".hidden-polaroid");
const button = document.querySelector(".hidden-button");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
  
  if (envelope.classList.contains("flap")) {
    // Play the audio when the envelope is opened
    audio.play();
    
    // Show the polaroid after 3 seconds
    setTimeout(() => {
      polaroid.classList.add("show");
    }, 3000); 

    // Show the button after 9 seconds
    setTimeout(() => {
      button.classList.add("show-button");
    }, 9000); 
  } else {
    polaroid.classList.remove("show");
    button.classList.remove("show-button");
  }
});
