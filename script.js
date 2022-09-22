let count = 0;
let countEl = document.querySelector(".count-el");
let prevEl = document.querySelector(".prev-el");
function increment() {
  count += 1;
  countEl.textContent = count;
}
function save() {
  if (count === 0) return;
  prevEl.textContent += ` ${count} - `;
  count = 0;
  countEl.textContent = count;
}