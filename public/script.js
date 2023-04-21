const audio = document.getElementById("my-audio");
window.onload = function () {
  audio.play();
};
// Set a timeout to mute the audio after 8 seconds
setTimeout(function () {
  audio.muted = true;
}, 11000);
