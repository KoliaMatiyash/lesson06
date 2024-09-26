const start = document.getElementById("btnStart");
const stop = document.getElementById("btnStop");
const clear = document.getElementById("btnClear");
const counter = document.getElementById("counter");
// 1.setTimeout
// Створити програму, яка буде виводити повідомлення через певний час.
// При натисканні на кнопку "Запуск", через 5 секунд на екрані має з'являтися повідомлення:
// "Час минув!". Якщо користувач натисне на кнопку "Зупинити" до завершення таймера,
// то повідомлення не повинно з'являтися.
// let timerId;
// start.addEventListener("click", () => {
//   timerId = setTimeout(() => {
//     alert("Час минув!");
//   }, 5000);
// });
// stop.addEventListener("click", () => {
//   clearTimeout(timerId);
// });
// 2.setInterval
// Створити програму, яка запускає таймер і оновлює час кожну секунду.
// При натисканні на кнопку "Запуск" таймер має почати відлік (0, 1, 2, 3 і т.д.),
// а при натисканні на кнопку "Зупинити" відлік має зупинятися.
// Якщо натиснути "Скинути", лічильник має обнулитися.
// let value = 0;
// let timerId;
// counter.textContent = value;
// start.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     value++;
//     counter.textContent = value;
//   }, 1000);
// });
// stop.addEventListener("click", () => {
//   clearInterval(timerId);
//   timerId = null;
// });
// clear.addEventListener("click", () => {
//   value = 0;
//   counter.textContent = value;
// });
// 3.document
// Створити програму, яка змінює колір фону сторінки при натисканні на кнопку.
// Кожне натискання змінює фон на випадковий колір.
// const colors = [
//   "#FF5733",
//   "#33FF57",
//   "#3357FF",
//   "#F1C40F",
//   "#9B59B6",
//   "#1ABC9C",
// ];
// function randomColor() {
//   const random = Math.floor(Math.random() * colors.length);
//   return colors[random];
// }
// start.addEventListener("click", () => {
//   document.body.style.backgroundColor = randomColor();
// });
// 4.document
// Створити програму, яка при натисканні на кнопку приховує або показує текст на сторінці.
// counter.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quibusdam
//       numquam. Voluptatibus, voluptatum sapiente amet ea ducimus enim in
//       blanditiis. Amet animi inventore cumque praesentium nobis voluptas et
//       tenetur nam. Nesciunt natus ut repellendus modi rem minus placeat autem!
//       Quaerat earum tempora est obcaecati explicabo ut. Laboriosam, minus id?
//       Beatae harum exercitationem ab itaque perferendis vero quidem impedit,
//       aliquid ducimus. Minus assumenda accusantium quod, alias est doloribus
//       odio voluptas? Cumque error nesciunt quibusdam ab iure. Cumque, distinctio
//       autem et fugit exercitationem totam rerum maxime sit ad accusantium
//       molestiae dolorum quidem?`;
// start.addEventListener("click", () => {
//   if (counter.style.display === "none") {
//     counter.style.display = "block";
//   } else {
//     counter.style.display = "none";
//   }
// });
// 5.document
// Створити програму, яка рахує кількість натискань на кнопку і показує результат на сторінці.
// let value = 0;
// start.addEventListener("click", () => {
//   value++;
//   counter.textContent = value;
// });
// 6.document+setInterval
// Створити програму, яка буде змінювати колір тексту заголовка кожні 500 мілісекунд.
// При натисканні на кнопку "Зупинити миготіння", зміна кольорів має зупинятися.
// const colors = [
//   "#FF5733",
//   "#33FF57",
//   "#3357FF",
//   "#F1C40F",
//   "#9B59B6",
//   "#1ABC9C",
// ];
// let timerId;
// stop.textContent = "Зупинити миготіння";
// counter.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quibusdam
//       numquam. Voluptatibus, voluptatum sapiente amet ea ducimus enim in
//       blanditiis. Amet animi inventore cumque praesentium nobis voluptas et
//       tenetur nam. Nesciunt natus ut repellendus modi rem minus placeat autem!
//       Quaerat earum tempora est obcaecati explicabo ut. Laboriosam, minus id?
//       Beatae harum exercitationem ab itaque perferendis vero quidem impedit,
//       aliquid ducimus. Minus assumenda accusantium quod, alias est doloribus
//       odio voluptas? Cumque error nesciunt quibusdam ab iure. Cumque, distinctio
//       autem et fugit exercitationem totam rerum maxime sit ad accusantium
//       molestiae dolorum quidem?`;
// start.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     const random = Math.floor(Math.random() * colors.length);
//     counter.style.color = colors[random];
//   }, 500);
// });
// stop.addEventListener("click", () => {
//   clearInterval(timerId);
//   timerId = null;
// });
