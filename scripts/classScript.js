class Countdown {
    constructor(dateEnd, conteinerCountdown, count) {
        this.conteinerCountdown = document.querySelector(conteinerCountdown);
        this.count = count;
        this.dateEnd = dateEnd;
        this.pictureCountdown(this.conteinerCountdown, this.count, this.dateEnd);
    }

    countdown(dateEnd, count) {
        let timer, days, hours, minutes, seconds;

        dateEnd = new Date(dateEnd);
        dateEnd = dateEnd.getTime();

        if (isNaN(dateEnd)) {
            return;
        }

        /* clearTimeout(calculate());*/
        clearInterval(timer);
        /* clearTimeout(timer); */
        timer = setInterval(calculate, 1000);


        function calculate() {
            let dateStart = new Date();
            dateStart = new Date(dateStart.getUTCFullYear(),
                dateStart.getUTCMonth(),
                dateStart.getUTCDate(),
                dateStart.getUTCHours(),
                dateStart.getUTCMinutes(),
                dateStart.getUTCSeconds());

            let timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

            if (timeRemaining >= 0) {
                days = parseInt(timeRemaining / 86400);
                timeRemaining = (timeRemaining % 86400);
                hours = parseInt(timeRemaining / 3600);
                timeRemaining = (timeRemaining % 3600);
                minutes = parseInt(timeRemaining / 60);
                timeRemaining = (timeRemaining % 60);
                seconds = parseInt(timeRemaining);

                //console.log(document.getElementById(`days${count}`));

                if (document.getElementById(`days${count}`) !== null) {
                    document.getElementById(`days${count}`).innerHTML = parseInt(days, 10);
                    document.getElementById(`hours${count}`).innerHTML = ("0" + hours).slice(-2);
                    document.getElementById(`minutes${count}`).innerHTML = ("0" + minutes).slice(-2);
                    document.getElementById(`seconds${count}`).innerHTML = ("0" + seconds).slice(-2);
                }

            }
            else return;
        }
        function display(days, hours, minutes, seconds) { }
    }

    pictureCountdown(conteinerCountdown, count, dateEnd) {

        /* console.log(conteinerCountdown) */
        /* console.log(count); */

        conteinerCountdown.innerHTML +=
            `<div class="countdown">
                <div class="time-section">
                    <span class="count" id="days${count}"></span>
                    <span class="units">Дней</span>
                </div>
                <div class="time-section">
                    <span class="count" id="hours${count}"></span>
                    <span class="units">Часов</span>
                </div>
                <div class="time-section">
                    <span class="count" id="minutes${count}"></span>
                    <span class="units">Минут</span>
                </div>
                    <div class="time-section">
                    <span class="count" id="seconds${count}"></span>
                    <span class="units">Секунд</span>
                </div>
            </div>`;
        this.countdown(dateEnd, count);
    }
}

class MainSlider {
    constructor(catalogAllProducts) {
        this.catalogAllProducts = catalogAllProducts;
        this.checkForAvailability();
    }

    checkForAvailability() {
        if (document.querySelector(".mainSlider") === null) {
            this.paintSlider();
        }
    }

    paintSlider() {
        let sectionContainer = document.getElementById("container_carousel");
        let containerSwiper = document.createElement("div");
        containerSwiper.setAttribute("class", "swiper-container mainSlider");
        let wrapperSwiper = document.createElement("div");
        wrapperSwiper.setAttribute("class", "swiper-wrapper introMainSlider");

        let paginationSlider = document.createElement("div");
        paginationSlider.setAttribute("class", "swiper-pagination");
        let buttonNextSlider = document.createElement("div");
        buttonNextSlider.setAttribute("class", "swiper-button-next");
        let buttonPrevSlider = document.createElement("div");
        buttonPrevSlider.setAttribute("class", "swiper-button-prev");

        for (let i = 0; i < this.catalogAllProducts.length; i++) {
            let slide = this.getCreateElem({
                nameTag: "div",
                nameClass: `swiper-slide`,
                id: `picture${i}`,
            });
            let picture = this.getCreateElem({
                nameTag: "div",
                nameClass: `picture`,
                backgroundImg: `url('${this.catalogAllProducts[i].image}')`,
            });
            let text = this.getCreateElem({
                nameTag: "p",
                nameProduct: this.catalogAllProducts[i].name,
            });

            let wrapperSalePrice = document.createElement("div");
            wrapperSalePrice.setAttribute("class", "wrapperSalePrice");

            let sale = this.getCreateElem({
                nameTag: "div",
                nameClass: `sale`,
                saleProduct: this.catalogAllProducts[i].sale,
            });
            let priсe = this.getCreateElem({
                nameTag: "div",
                nameClass: `priсe`,
                priсeProduct: this.sale(i),
            });

            slide.appendChild(picture);
            picture.appendChild(text);

            if (this.catalogAllProducts[i].sale !== undefined) {
                wrapperSalePrice.appendChild(sale);
            };

            picture.appendChild(wrapperSalePrice);
            wrapperSalePrice.appendChild(priсe);
            wrapperSwiper.appendChild(slide);
        }
        containerSwiper.appendChild(wrapperSwiper);
        containerSwiper.appendChild(paginationSlider);
        containerSwiper.appendChild(buttonNextSlider);
        containerSwiper.appendChild(buttonPrevSlider);
        sectionContainer.appendChild(containerSwiper);

        var swiper1 = new Swiper(".mainSlider", {
            direction: "horizontal",
            slidesPerView: 1,

            /* grabCursor : true, */
            /* loop: true, */
            /* mousewheel: true, */
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
        });

        for (let i = 0; i < this.catalogAllProducts.length; i++) {
            document.getElementById(`picture${i}`).addEventListener("click", function () {
                /* console.log(swiper1.clickedIndex);
                console.log(swiper1.clickedSlide); */


                //console.log(mainSlider.catalogAllProducts);
                //console.log(mainSlider.catalogAllProducts[i].imageSlider);

                let infoDetailedProduct = new InfoDetailedProduct(mainSlider.catalogAllProducts, i, mainSlider.catalogAllProducts[i].imageSlider);
            })
        };

        for (let i = 0; i < catalogProducts.length; i++) {
            if (catalogProducts[i].timeSale !== undefined && catalogProducts[i].timeSale !== "") {
                let countdown = new Countdown(catalogProducts[i].timeSale, `#picture${i}`, i);
            }
        }
    }
    getCreateElem(card) {
        let element = document.createElement(card.nameTag);
        if ("nameClass" in card) {
            element.setAttribute("class", card.nameClass);
        }
        if ("id" in card) {
            element.id = card.id;
        }
        if ("backgroundImg" in card) {
            element.style.backgroundImage = card.backgroundImg;
        }
        if ("nameProduct" in card) {
            element.innerText = card.nameProduct;
        }
        if ("sale" in card) {
            element.setAttribute("class", card.nameClass);
        }
        if ("saleProduct" in card) {
            element.innerText = card.saleProduct;
        }
        if ("priсeProduct" in card) {
            element.innerText = card.priсeProduct + " BYN";
        }
        return element;
    }
    sale(i) {
        if (this.catalogAllProducts[i].sale !== undefined && this.catalogAllProducts[i].sale !== "") {
            let priceSale = (parseInt(this.catalogAllProducts[i].price) * (Math.abs(parseInt(this.catalogAllProducts[i].sale)) / 100));
            let temp = parseInt(this.catalogAllProducts[i].price) - priceSale;
            return temp;
        }
        else return this.catalogAllProducts[i].price;
    }
}

let mainSlider = new MainSlider(catalogProducts);

class MainPage{
    constructor() {
        this.printMainInfoSyte();
    }

    printMainInfoSyte(){
        document.getElementById('mainPage').innerHTML = 
        `<div class="buttonCatalogProducts">
            <button id="buttonCatalogProducts"><i class="fas fa-th-list"></i><span>Показать весь каталог</span></button>
        </div>`;
    }
}

let mainPage = new MainPage();

class InfoDetailedProduct {
    constructor(catalogAllProducts, i, imageSlider) {
        this.catalogAllProducts = catalogAllProducts;
        this.imageSlider = imageSlider;
        this.getCreateWrapperInfoProduct(i, imageSlider);
        this.pressPictureSlide(imageSlider);
    }

    getCreateWrapperInfoProduct(i, imageSlider) {
        if (this.imageSlider !== undefined && this.imageSlider.length !== 0) {
            let sectionInfoProduct = document.getElementById('infoProduct');

            document.getElementById('container_carousel').innerHTML = '';
            document.querySelector('.mainPage').innerHTML = "";
            //document.getElementById('container_products').style.display = 'none';
            sectionInfoProduct.style.display = 'flex';

            sectionInfoProduct.appendChild(this.getNameProduct(i));

            let detailProduct = document.createElement('div');
            detailProduct.setAttribute("class", "detailProduct");
            sectionInfoProduct.appendChild(detailProduct);

            let posterProduct = document.createElement('div');
            posterProduct.setAttribute("class", "posterProduct");
            detailProduct.appendChild(posterProduct);

            let fastInfoProduct = document.createElement('div');
            fastInfoProduct.setAttribute("class", "fastInfoProduct");
            detailProduct.appendChild(fastInfoProduct);

            let bigImage = document.createElement('div');
            bigImage.setAttribute("class", "bigImage");
            bigImage.setAttribute("id", "bigImage");
            posterProduct.appendChild(bigImage);

            let sliderImage = document.createElement('div');
            sliderImage.setAttribute("class", "sliderImage");
            /* console.log(this.getPaintSliderProduct(sliderImage)); */

            let detailFullProduct = document.createElement('div');
            detailFullProduct.setAttribute("class", "detailFullProduct");
            sectionInfoProduct.appendChild(detailFullProduct);

            posterProduct.appendChild(this.getPaintSliderProduct(sliderImage));

            for (let i = 0; i < this.imageSlider.length; i++) {
                document.getElementById(`sliderImage${i}`).style.backgroundImage = `url('${imageSlider[i]}')`;
            }

            this.paintFastInfoProduct(i);

            var swiper3 = new Swiper(".infoProductSlider", {
                direction: "horizontal",
                slidesPerView: 3,
                observer: true,
                observeParents: true,
                spaceBetween: 5,
                /* loop: true, */
                mousewheel: true,
                /* autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                }, */
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                /*pagination: {
                    el: ".swiper-pagination",
                    dynamicBullets: true,
                }, */
            });
        }
    }
    getNameProduct(i) {
        let nameProduct = document.createElement('div');
        nameProduct.setAttribute("class", "nameProduct");
        nameProduct.innerHTML +=
            `<p>${this.catalogAllProducts[i].name}</p>`;
        return nameProduct;
    }
    getPaintSliderProduct(sliderImage) {
        /* console.log(sliderImage); */

        let infoProductSliderWrapper = document.createElement('div');
        infoProductSliderWrapper.setAttribute("class", "swiper-wrapper infoProductSliderWrapper");

        let infoProductSlider = document.createElement('div');
        infoProductSlider.setAttribute("class", "swiper-container infoProductSlider");
        infoProductSlider.appendChild(infoProductSliderWrapper);

        let buttonNextSlider = document.createElement("div");
        buttonNextSlider.setAttribute("class", "swiper-button-next");
        let buttonPrevSlider = document.createElement("div");
        buttonPrevSlider.setAttribute("class", "swiper-button-prev");

        infoProductSlider.appendChild(buttonNextSlider);
        infoProductSlider.appendChild(buttonPrevSlider);

        for (let i = 0; i < this.imageSlider.length; i++) {
            let sliderPicture = document.createElement('div');
            sliderPicture.setAttribute("class", "swiper-slide sliderImage");
            sliderPicture.setAttribute("id", `sliderImage${i}`);
            infoProductSliderWrapper.appendChild(sliderPicture);
        }

        sliderImage.appendChild(infoProductSlider);

        return sliderImage;
    }

    pressPictureSlide(imageSlider) {
        document.getElementById('bigImage').style.backgroundImage = `url('${imageSlider[0]}')`;
        for (let i = 0; i < imageSlider.length; i++) {
            document.getElementById(`sliderImage${i}`).addEventListener("click", function () {
                document.getElementById('bigImage').style.backgroundImage = `url('${imageSlider[i]}')`;
            })
        };
    }

    paintFastInfoProduct(i) {

        /* console.log(i); */

        /*  document.querySelector(".fastInfoProduct").innerHTML =
         `<div class="x"></div>`; */
        if (catalogProducts[i].timeSale !== undefined && catalogProducts[i].timeSale !== "") {
            document.getElementById('container_carousel').innerHTML = '';
            document.querySelector(".fastInfoProduct").innerHTML += `<h3>СКИДКА НА ИГРУ ЗАКАНЧИВАЕТСЯ ЧЕРЕЗ</h3>`;
            let countdown = new Countdown(catalogProducts[i].timeSale, `.fastInfoProduct`, i);
        }

        let products = [];
        let textButton = "Купить";
        products = JSON.parse(localStorage.getItem("StoreProducts"));
        for (let a = 0; a < products.length; a++) {
            //console.log(products[a]);
            if (products[a] === catalogProducts[i].id) {
                textButton = "В корзине!";
            }
        }

        if (true) {
            document.querySelector(".fastInfoProduct").innerHTML +=
                `<div class="wraperInfoPrice">
                <div class="infoPrice">
                    <div>
                        <div class="realPrice">${catalogProducts[i].price} BYN</div>
                        <div class="sale">${catalogProducts[i].sale}</div>
                    </div>
                    <div class="price">${mainSlider.sale(i)} BYN</div>
                </div>
                <div>
                    <div class="saving">Экономия: ${parseInt(this.catalogAllProducts[i].price) * (Math.abs(parseInt(this.catalogAllProducts[i].sale)) / 100)} BYN</div>
                    <div class="pay"><button id="inBasket">${textButton}</button></div>
                </div>
            </div>
            <div class="wraperinfo">
                <ul>
                    <li><p>Платформа: <span>${catalogProducts[i].platformOS}</span></p></li>
                    <li><p>Жанр: <span>${catalogProducts[i].genre}</span></p></li>
                    <li><p>Издатель: <span>${catalogProducts[i].publisher}</span></p></li>
                    <li><p>Дата выхода: <span>${catalogProducts[i].releaseDate}</span></p></li>
                </ul>
            </div>`;
        }
        this.paintDtailFullProduct(i);

        document.getElementById('inBasket').addEventListener('click', function () {
            if (textButton === "В корзине!") {
                basket.opacityDiv();
                basket.workCart();
            }
            else {
                products.push(catalogProducts[i].id);
                localStorage.setItem("StoreProducts", JSON.stringify(products));
                document.getElementById('counter_products').innerHTML = products.length;
                textButton = "В корзине!";
                document.getElementById('inBasket').innerHTML = textButton;
            }
        });
    }

    paintDtailFullProduct(i) {
        document.querySelector(".detailFullProduct").innerHTML =
            `<div>
                <h2>Описание</h2>
                <div class="description">
                    ${catalogProducts[i].description}
                </div>
                <h2>Системные требования</h2>
                <div class="systemRequirements">
                    <ul>
                        <li><p>ОС: <span>${catalogProducts[i].systemRequirements.os}</span></p></li>
                        <li><p>Процессор: <span>${catalogProducts[i].systemRequirements.cpu}</span></p></li>
                        <li><p>Оперативная память: <span>${catalogProducts[i].systemRequirements.ram}</span></p></li>
                        <li><p>Видеокарта: <span>${catalogProducts[i].systemRequirements.videoCard}</span></p></li>
                        <li><p>Жесткий диск: <span>${catalogProducts[i].systemRequirements.hdd}</span></p></li>
                    </ul>
                </div>
            </div>
            <div class="reviews">
                <h2>Отзовы пользователей</h2>
                <form class="reviewsForm">
                    <input placeholder="Ваш коментарий" type="" />
                        <button type="submit">
                            <i class="fas fa-comment-dots"></i>
                        </button>
                    </form>
            </div>`
        ;
    }
}

//let infoDetailedProduct = new InfoDetailedProduct(catalogProducts, 0, catalogProducts[0].imageSlider);



/* let countdown = new Countdown("9/5/2020 00:00:00 AM", "#picture1", 1); */
/* let countdown1 = new Countdown("9/5/2020 00:00:00 AM", "#conteiner_countdown", 1); */

class Basket {
    constructor() {
        this.pressBasket();
        //this.getArrCart();
    }

    getArrCart() {
        let productsInCart = store.getProducts();/* JSON.parse(localStorage.getItem("StoreProducts")); */
        let arrCart = [];
        for (let i = 0; i < productsInCart.length; i++) {
            for (let j = 0; j < catalogProducts.length; j++) {
                if (productsInCart[i] === catalogProducts[j].id) {
                    arrCart.push(catalogProducts[j]);
                }
            }
        }
        return arrCart;
    }

    pressBasket() {
        document.getElementById('basket').addEventListener('click', function () {
            basket.opacityDiv();
            if (document.querySelector(".wrapperCartProduct") === null) {
                basket.workCart();
            }
        });
        document.getElementById('basket2').addEventListener('click', function () {
            basket.opacityDiv();
            if (document.querySelector(".wrapperCartProduct") === null) {
                basket.workCart();
            }
        });
    }

    opacityDiv() {
        document.getElementById('container_carousel').innerHTML = "";
        //document.getElementById('container_products').style.display = 'none';
        //document.querySelector('.container_products').innerHTML = "";
        document.querySelector('.mainPage').innerHTML = "";
        //document.querySelector('.products_vert').innerHTML = "";
        document.getElementById('infoProduct').innerHTML = "";
        document.getElementById('container_authorization').style.display = "none";
        document.getElementById('catalog_products').innerHTML = '';
    }


    workCart() {
        let products = this.getArrCart();

        //console.log(products);

        let cart = document.getElementById('cart');
        let total = document.createElement("div");

        //console.log(productsInCart.length);

        if (localStorage.getItem("StoreProducts") !== "[]") {

            //console.log("Корзина не пуста");

            let wrapperCartProduct;
            let summ = 0;

            for (let i = 0; i < products.length; i++) {

                wrapperCartProduct = document.createElement('div');
                wrapperCartProduct.setAttribute("class", "wrapperCartProduct");

                //console.log(products[i].image);
                wrapperCartProduct.innerHTML =
                    `<div class="wrapperImg" id="wrapperImg_${products[i].id}">
                        <img src="${products[i].image}" />
                    </div>
                    <p>${products[i].name}</p>
                    <div class="divPriceProduct">
                        <div class="addProductSubtract">
                            <div class="plus" id="plus_${products[i].id}"><i class="fas fa-plus-square" data-articul="${products[i].id}"></i></div>
                            <div><span id="quantity_${products[i].id}">${products[i].quantity}</span></div>
                            <div class="minus" id="minus_${products[i].id}"><i class="fas fa-minus-square" data-articul="${products[i].id}"></i></div>
                        </div>
                        <div class="priceCartProduct" id="price_${products[i].id}">${products[i].price} BYN</div>
                        <div class="del" id="del_${products[i].id}"><i class="fas fa-times-circle" data-id="del_${products[i].id}"></i></div>
                    </div>`;

                total.setAttribute("class", "total");
                total.innerHTML = `Итого: <span id="summ">${summ += products[i].price}</span> BYN`

                cart.appendChild(wrapperCartProduct);
            }
            cart.appendChild(total);
            this.pressPlusMinus(products);
        }
        else {
            //console.log("Корзина пуста");
            cart.innerHTML = `<div class="emptyBasket"><h2>Ваша корзина пуста.</h2></div>`;
        }
        //console.log(products);

        this.pressProductCard(products);
    }

    pressProductCard(products) {
        for (let i = 0; i < products.length; i++) {
            document.getElementById(`wrapperImg_${products[i].id}`).addEventListener("click", function () {
                //console.log(products[i].id);
                for (let j = 0; j < catalogProducts.length; j++) {
                    if (products[i].id === catalogProducts[j].id) {
                        //console.log(products[i].id);
                        //console.log(catalogProducts[j].id);

                        let infoDetailedProduct = new InfoDetailedProduct(catalogProducts, j, catalogProducts[j].imageSlider);
                        document.getElementById('cart').innerHTML = '';
                    }
                }
            })
        };
    }

    pressPlusMinus(products) {

        for (let i = 0; i < products.length; i++) {
            document.querySelector(`#plus_${products[i].id}`).addEventListener('click', (event) => {
                if (event.target.classList.contains("fa-plus-square")) {
                    basket.plus(event.target.dataset.articul, products);
                }
            })

            document.querySelector(`#minus_${products[i].id}`).addEventListener('click', (event) => {
                if (event.target.classList.contains("fa-minus-square")) {
                    basket.minus(event.target.dataset.articul, products);
                }
            })

            document.querySelector(`#del_${products[i].id}`).addEventListener('click', (event) => {
                //console.log(event.target.classList.contains("fa-times-circle"));
                if (event.target.classList.contains("fa-times-circle")) {
                    basket.deleteCart(event.target.dataset.id.slice(4), products);
                }
            })
        }
    }

    plus(id, products) {
        let sum = 0;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                if (products[i].quantity !== 5) {
                    products[i].quantity += 1;
                }
                document.getElementById(`price_${products[i].id}`).innerText = `${products[i].price * products[i].quantity} BYN`;
                document.getElementById(`quantity_${id}`).innerText = `${products[i].quantity}`;
            }
        }
        for (let i = 0; i < products.length; i++) {
            sum += products[i].price * products[i].quantity;
        }
        document.getElementById(`summ`).innerText = sum;
    }

    minus(id, products) {
        let sum = 0;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                if (products[i].quantity !== 1) {
                    products[i].quantity -= 1;
                }
                document.getElementById(`price_${products[i].id}`).innerText = `${products[i].price * products[i].quantity} BYN`;
                document.getElementById(`quantity_${id}`).innerText = `${products[i].quantity}`;
            }
        }
        for (let i = 0; i < products.length; i++) {
            sum += products[i].price * products[i].quantity;
        }
        document.getElementById(`summ`).innerText = sum;
    }

    deleteCart(id, products) {
        let temp = [];
        for (let i = 0; i < products.length; i++) {
            temp.push(products[i].id);
        }
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === id) {
                temp.splice(i, 1);
            }
        }
        localStorage.setItem("StoreProducts", JSON.stringify(temp));
        document.getElementById('counter_products').innerHTML = temp.length;
        document.querySelector('#cart').innerHTML = "";
        basket.workCart();
    }
}

let basket = new Basket();

class Catalog{
    constructor(){
        this.printCatalog();
    }

    printCatalog(){
        document.getElementById('buttonCatalogProducts').addEventListener('click', () => {
            document.getElementById('container_carousel').innerHTML = "";
            document.getElementById('mainPage').innerHTML = "";
            document.getElementById('catalog_products').style.display = 'flex';

            let allProducts = new AllProducts(
                ".catalog_products",
                catalogProducts,
                ".counter_products"
            );
        })
    }
}

let catalog = new Catalog();