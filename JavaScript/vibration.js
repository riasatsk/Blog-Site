const vibrateButton = document.getElementById("openMenu");

vibrateButton.addEventListener("click", () => {
  if ("vibrate" in navigator) {
    // Vibrate for 200 milliseconds
    navigator.vibrate(200);
  } else {
    console.log("Vibration not supported in this browser.");
  }
});
