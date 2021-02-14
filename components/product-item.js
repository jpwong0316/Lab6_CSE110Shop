// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({mode: 'open'});
    let style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;

    let li = document.createElement('li');
    li.setAttribute('class', 'product');

    let img = document.createElement('img');
    img.width = "200";
    li.appendChild(img);

    let p1 = document.createElement('p');
    p1.setAttribute('class', 'title');
    li.appendChild(p1);

    let p2 = document.createElement('p');
    p2.setAttribute('class', 'price');
    li.appendChild(p2);

    let button = document.createElement('button');
    button.setAttribute('onclick', "alert('Add to Cart!')");
    button.textContent = "Add to Cart";
    
    li.appendChild(button);

    shadow.appendChild(style);
    shadow.appendChild(li);
  }
}

customElements.define('product-item', ProductItem);