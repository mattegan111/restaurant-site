import { renderNav } from "./navbar";
import { renderFooter } from "./footer";
import { renderHome } from "./home-main";
import { renderMenu } from "./menu-main";
import { renderAbout } from "./about-main";

const $content = document.getElementById("content");


function home() {
  $content.innerHTML = "";
  renderNav()
  renderHome();
  renderFooter();
}

function menu() {
  $content.innerHTML = "";
  renderNav()
  renderMenu();
  renderFooter();
}

function about() {
  $content.innerHTML = "";
  renderNav()
  renderAbout();
  renderFooter();
}
  

document.addEventListener("click", (e) => {
  const target = e.target.innerText;

  if (target === "HOME") home();
  if (target === "MENU") menu();
  if (target === "ABOUT") about();
});

home();

export { $content };