import {$content} from "./index";

function render() {
    const element = document.createElement('main');
  
    element.innerHTML = "<h2>About Bahn Mi Caphe</h2><p>Vietnamese favourites, made fresh and fast.</p>";
  
    return $content.appendChild(element);
}

export { render as renderAbout };