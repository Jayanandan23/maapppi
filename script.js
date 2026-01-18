let count = 0;
let startTime = null;

const countEl = document.getElementById("count");
const popup = document.getElementById("popup");
const timeSpentEl = document.getElementById("timeSpent");

function increase() {
  if (!startTime) startTime = new Date(); // start timer on first click

  count++;
  countEl.textContent = count;

  // Check for multiples of 50
  if (count % 50 === 0) {
    showPopup();
  }
}

function showPopup() {
  const currentTime = new Date();
  const timeSpent = Math.floor((currentTime - startTime) / 1000); // in seconds

  timeSpentEl.textContent = timeSpent + " seconds";
  popup.classList.add("visible");
}

function closePopup() {
  popup.classList.remove("visible");
}
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("my-app-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js"
      ]);
    })
  );
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker Registered"));
}
