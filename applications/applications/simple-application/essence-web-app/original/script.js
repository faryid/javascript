document.getElementById("set").addEventListener("click", set);

let elements = document.getElementsByName("css-property");

let div = document.getElementById("banner");

function set() {
  let cssProperty, cssValue;

  for(element of elements) {
    cssProperty = element.getAttribute("id");

    cssValue = element.value;

    div.style[cssProperty] = cssValue;
  }
}
