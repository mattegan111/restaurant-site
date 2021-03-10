import {$content} from "./index";

function render() {
    const element = document.createElement('footer');

    element.innerHTML = "<p>Call 03 348 5425 now to place an order or make a reservation</p>";

    return $content.appendChild(element);
}
export { render as renderFooter};