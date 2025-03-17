const progressCircle = document.getElementById("progress-circle");
const radius = 15;
const circumference = 2 * Math.PI * radius;

let progress = 0;
function setProgress(value) {
  const playdeckBridgeInstance = playDeckBridge();
  progress = Math.min(Math.max(value, 0), 100);
  playdeckBridgeInstance?.setLoadingProgress(progress);
  const offset = circumference - (progress / 100) * circumference;
  progressCircle.style.strokeDasharray = `${circumference - offset} ${circumference}`;
}
function ApplicationLaunched() {
  setProgress(75);
}
function ApplicationLoaded() {
  setProgress(100);
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("unity-container").style.display = "block";
  }, 1000);
}