class AllProducts {
    constructor(containerProducts, catalogAllProducts, containerCounter) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogAllProducts = catalogAllProducts;
        this.containerCounter = document.querySelector(containerCounter);
        this.createProducts();
    }

    /* <div class="item">
          <div class="img"></div>
          <div class="name">Product1</div>
          <div class="price">199</div>
          <button class="btn">В корзину</button>
        </div> */

    createProducts() {
        let wrapper = document.createElement("slot");
        let products = store.getProducts();

        for (let i = 0; i < this.catalogAllProducts.length; i++) {
            let index = products.indexOf(this.catalogAllProducts[i].id);
            let activeText;
            this.containerCounter.innerHTML = products.length;

            if (index === -1) {
                activeText = "Добавить в корзину";
            } else {
                activeText = "Удалить из корзины";
            }

            let item = this.getProductItem({
                nameTag: "div",
                nameClass: "item",
            });
            let bgImg = this.getProductItem({
                nameTag: "div",
                nameClass: "img",
                backgroundImg: `url('${this.catalogAllProducts[i].image}')`,
            });
            let name = this.getProductItem({
                nameTag: "div",
                nameClass: "name",
                contentText: this.catalogAllProducts[i].name,
            });

            let price = this.getProductItem({
                nameTag: "div",
                nameClass: "price",
                contentText: this.catalogAllProducts[i].price,
            });
            let btn = this.getProductItem({
                nameTag: "button",
                nameClass: "btn",
                contentText: activeText,
                id: this.catalogAllProducts[i].id,
            });

            btn.addEventListener("click", function () {
                let id = this.getAttribute("id");
                let result = store.putProduct(id);

                allProducts.containerCounter.innerHTML = result.products.length;

                if (result.statusProduct) {
                    this.innerHTML = "Удалить из корзины";
                } else {
                    this.innerHTML = "Добавить в корзину";
                }
            });

            item.appendChild(bgImg);
            item.appendChild(name);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.containerProducts.appendChild(wrapper);
    }

    getProductItem(card) {
        let element = document.createElement(card.nameTag);
        if ("nameClass" in card) {
            element.setAttribute("class", card.nameClass);
        }
        if ("contentText" in card) {
            element.innerText = card.contentText;
        }
        if ("backgroundImg" in card) {
            element.style.backgroundImage = card.backgroundImg;
        }
        if ("id" in card) {
            element.id = card.id;
        }
        return element;
    }
}

let allProducts = new AllProducts(
    ".container_products",
    catalogProducts,
    ".counter_products"
);


