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
                picture.appendChild(sale);
            };

            /* let pressPicture = document.getElementById(`picture${i}`) */



            picture.appendChild(priсe);
            wrapperSwiper.appendChild(slide);
        }
        containerSwiper.appendChild(wrapperSwiper);
        containerSwiper.appendChild(paginationSlider);
        containerSwiper.appendChild(buttonNextSlider);
        containerSwiper.appendChild(buttonPrevSlider);
        sectionContainer.appendChild(containerSwiper);

        for (let i = 0; i < this.catalogAllProducts.length; i++) {
            document.getElementById(`picture${i}`).addEventListener("click", function () {
                let infoDetailedProduct = new InfoDetailedProduct(i);
            })
        };

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
            element.innerText = card.priсeProduct;
        }
        return element;
    }
    sale(i) {
        if (this.catalogAllProducts[i].sale !== undefined) {
            let priceSale = (parseInt(this.catalogAllProducts[i].price) * (Math.abs(parseInt(this.catalogAllProducts[i].sale)) / 100));
            let temp = parseInt(this.catalogAllProducts[i].price) - priceSale;
            return temp + " BYN";
        }
        else return this.catalogAllProducts[i].price;
    }

}

let mainSlider = new MainSlider(catalogProducts);

class InfoDetailedProduct {
    constructor(i){
        this.getCreateWrapperInfoProduct(i);
    }

    getCreateWrapperInfoProduct(i) {
        console.log(i);

        document.getElementById('container_carousel').style.display = 'none';
        document.getElementById('container_products').style.display = 'none';
        document.getElementById('infoProduct').style.display = 'flex';

        /* let detailProduct = document.createElement("div");
        detailProduct.setAttribute("class", "infoDetailedProduct");
        document.getElementById(`infoProduct`).innerHTML = "";
        document.getElementById(`infoProduct`).appendChild(detailProduct); */
    }

}