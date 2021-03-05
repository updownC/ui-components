const DELAY = 400;

// 1
let inside1 = document.querySelector(".inside-1");
let thing1 = document.querySelector(".thing-1");
let count1 = document.querySelector(".count-1");
inside1.addEventListener("scroll", event => {
  count1.textContent = event.target.scrollTop;
});

// 2
let throtTimer;
let inside2 = document.querySelector(".inside-2");
let thing2 = document.querySelector(".thing-2");
let count2 = document.querySelector(".count-2");
inside2.addEventListener("scroll", event => {
  if (!throtTimer) {
    throtTimer = setTimeout(() => {
      throtTimer = null;
      count2.textContent = event.target.scrollTop;
    }, DELAY);
  }
});

// 3
let debounceTimer;
let inside3 = document.querySelector(".inside-3");
let thing3 = document.querySelector(".thing-3");
let count3 = document.querySelector(".count-3");
inside3.addEventListener("scroll", event => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
  debounceTimer = setTimeout(() => {
    count3.textContent = event.target.scrollTop;
  }, DELAY);
});
