// Import stylesheets
import "./style.css";
import renderList from "./listRenderer";
import { debounce } from "./util";

// Write Javascript code!
const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};
const onScroll = e => {
  // do something
  const { clientHeight, scrollTop, scrollHeight } = e.target.scrollingElement;
  console.log(clientHeight);
  if (scrollTop + clientHeight === scrollHeight) {
    fetchMore();
  }
};

document.addEventListener("scroll", debounce(onScroll, 300));
fetchMore();
