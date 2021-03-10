import {$content} from "./index";

function render() {
    const element = document.createElement('nav');
  
    element.innerHTML = '<ul><li>HOME</li><li>MENU</li><li>ABOUT</li></ul>';
  
    return $content.appendChild(element);
  }

export { render as renderNav };
