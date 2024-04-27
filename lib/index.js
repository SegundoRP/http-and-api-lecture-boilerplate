// TODO - Fetch an activity with the Bored API - Let's psuedocode!

// const button = document.querySelector(".btn-warning");
// button.addEventListener("click", (event) => {
//   const options = ["Read a book!", "Do your flashcards!", "Go for a walk!"]
//   const randomNumber = Math.floor(Math.random() * 3);
//   // Callback
//   event.currentTarget.innerText = options[randomNumber];
//   event.currentTarget.setAttribute("disabled", "");
// });

// 1. Ubicar los elementos del DOM que necesitamos
const button = document.querySelector(".btn-warning");
const paragraph = document.querySelector("#activity");
const url = 'https://www.boredapi.com/api/activity/';

// 2. Gatillar un callback cuando suceda un evento click
button.addEventListener("click", () => {
  // 3. Consumir API
  fetch(url)
    .then(response => response.json())
    .then(data => setActivity(data))
});

// 4. Actualizar el DOM con la información que recibimos de la API
const setActivity = (data) => {
  paragraph.innerText = data.activity;
};
