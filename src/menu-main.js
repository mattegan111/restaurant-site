import {$content} from "./index";

function render() {
    const element = document.createElement('main');
  
    element.innerHTML = "<h2>Menu</h2><p>Banh Mi</p><p>Pho</p><p>Spring Roll</p>";
  
    return $content.appendChild(element);
}

export { render as renderMenu };