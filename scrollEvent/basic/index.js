const DELAY_TIME = 300;

// normal
document.querySelector("#input_normal").addEventListener("input", event => {
  console.log("πβ κΈ°λ³Έ μ΄λ²€νΈ: ", event.target.value);
});

// debouncing
let debouncingTimer;
document.querySelector("#input_debounce").addEventListener("input", event => {
  if (debouncingTimer) {
    clearTimeout(debouncingTimer);
  }
  debouncingTimer = setTimeout(() => {
    console.log("πββοΈ λλ°μ΄μ€ μ΄λ²€νΈ: ", event.target.value);
  }, DELAY_TIME);
});

// throttling
let throttlingTimer;
document.querySelector("#input_throt").addEventListener("input", event => {
  if (!throttlingTimer) {
    throttlingTimer = setTimeout(() => {
      throttlingTimer = null;
      console.log("πββοΈ μ€λ‘νλ§ μ΄λ²€νΈ: ", event.target.value);
    }, DELAY_TIME);
  }
});
