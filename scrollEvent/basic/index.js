const DELAY_TIME = 300;

// normal
document.querySelector("#input_normal").addEventListener("input", event => {
  console.log("🏄‍ 기본 이벤트: ", event.target.value);
});

// debouncing
let debouncingTimer;
document.querySelector("#input_debounce").addEventListener("input", event => {
  if (debouncingTimer) {
    clearTimeout(debouncingTimer);
  }
  debouncingTimer = setTimeout(() => {
    console.log("🏄‍♂️ 디바운스 이벤트: ", event.target.value);
  }, DELAY_TIME);
});

// throttling
let throttlingTimer;
document.querySelector("#input_throt").addEventListener("input", event => {
  if (!throttlingTimer) {
    throttlingTimer = setTimeout(() => {
      throttlingTimer = null;
      console.log("🏄‍♀️ 스로틀링 이벤트: ", event.target.value);
    }, DELAY_TIME);
  }
});
