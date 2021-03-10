import {$content} from "./index";

function render() {
    const element = document.createElement('main');
  
    element.innerHTML = "<h1>Bahn Mi Caphe</h1><h2>Wellington's most loved Vietnamese takeout</h2>";
  
    return $content.appendChild(element);
}

export { render as renderHome }