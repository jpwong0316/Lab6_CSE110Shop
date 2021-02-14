// Script.js

window.addEventListener('DOMContentLoaded', () => {
  //localStorage.clear();
  if (localStorage.getItem('item1') == null) {
    fetchArray();
  } else {
    setupPage();
  } 
});

function setupPage() {
  for (let i = 1; i < 21; i++) {
    let tempData = JSON.parse(localStorage.getItem('item' + i));
    let temp = document.createElement('product-item');
    temp.shadowRoot.querySelector("img").src = tempData.image;
    temp.shadowRoot.querySelector("img").alt = tempData.title;
    temp.shadowRoot.querySelector(".title").textContent = tempData.title;
    temp.shadowRoot.querySelector(".price").textContent = '$' + tempData.price;
    let button = temp.shadowRoot.querySelector("button");
    button.addEventListener("click", buttonPress);
    document.getElementById("product-list").appendChild(temp);

    if (localStorage.getItem(tempData.title) != null) {
      button.setAttribute('onclick', "alert('Remove from Cart!')");
      button.textContent = "Remove from Cart";
      document.getElementById("cart-count").textContent =
        (Number(document.getElementById("cart-count").textContent) + 1);
    }
  }
}

function buttonPress() {
  let count = document.getElementById("cart-count");
  let title = this.parentElement.querySelector(".title").textContent;
  if (this.textContent == "Add to Cart") {
    this.setAttribute('onclick', "alert('Remove from Cart!')");
    this.textContent = "Remove from Cart";
    count.textContent = (Number(count.textContent) + 1);
    localStorage.setItem(title, "{title: " + title + " }");
  } else {
    this.setAttribute('onclick', "alert('Add to Cart!')");
    this.textContent = "Add to Cart";
    count.textContent = (Number(count.textContent) - 1);
    localStorage.removeItem(title);
  }
}

async function fetchArray() {
  let response = await fetch('https://fakestoreapi.com/products');
  if (response.ok) {
    let data = await response.json();
    for (let i = 0; i < 20; i++) {
      localStorage.setItem('item' + (i+1), JSON.stringify(data[i]));
    }
    setupPage();
  } else {
    alert("Error: " + response.status);
  }
  return;
}
