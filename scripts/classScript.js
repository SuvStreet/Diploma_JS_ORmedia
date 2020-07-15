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

            picture.appendChild(priсe);
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
            loop: true,
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
                console.log(swiper1.clickedIndex);	
                console.log(swiper1.clickedSlide);
                let infoDetailedProduct = new InfoDetailedProduct(mainSlider.catalogAllProducts, i, mainSlider.catalogAllProducts[i].imageSlider);
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
    constructor(catalogAllProducts, i, imageSlider){
        this.catalogAllProducts = catalogAllProducts;
        this.imageSlider = imageSlider;
        this.getCreateWrapperInfoProduct(i, imageSlider);
        this.pressPictureSlide(imageSlider);
    }

    getCreateWrapperInfoProduct(i, imageSlider) {
        if (this.imageSlider !== undefined && this.imageSlider.length !== 0){
            let sectionInfoProduct = document.getElementById('infoProduct');

            document.getElementById('container_carousel').style.display = 'none';
            document.getElementById('container_products').style.display = 'none';
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
    
            posterProduct.appendChild(this.getPaintSliderProduct(sliderImage));
    
            for (let i = 0; i < this.imageSlider.length; i++) {
                document.getElementById(`sliderImage${i}`).style.backgroundImage = `url('${this.imageSlider[i]}')`;
            }

            var swiper3 = new Swiper(".infoProductSlider", {
                direction: "horizontal",
                slidesPerView: 3,
                observer: true,
                observeParents: true,
                spaceBetween : 5,
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
    getNameProduct(i){
        let nameProduct = document.createElement('div');
        nameProduct.setAttribute("class", "nameProduct");
        
        nameProduct.innerHTML +=
        `<p>${this.catalogAllProducts[i].name}</p>`

        return nameProduct;
    }
    getPaintSliderProduct(sliderImage){
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
    pressPictureSlide(imageSlider){
        document.getElementById('bigImage').style.backgroundImage = `url('${this.imageSlider[0]}')`;
        for (let i = 0; i < imageSlider.length; i++) {
            document.getElementById(`sliderImage${i}`).addEventListener("click", function () {
                document.getElementById('bigImage').style.backgroundImage = `url('${imageSlider[i]}')`; 
            })
        };
    }

}

//let infoDetailedProduct = new InfoDetailedProduct(catalogProducts, 0, catalogProducts[0].imageSlider);

class Countdown{
    constructor(dateEnd){
        this.dateEnd = dateEnd;
        this.countdown(dateEnd);
    }
    
    countdown(dateEnd){
        let timer, days, hours, minutes, seconds;

        dateEnd = new Date(dateEnd);
        dateEnd = dateEnd.getTime();

        if (isNaN(dateEnd)){
            return;
        }

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

            if (timeRemaining >= 0){
                days = parseInt(timeRemaining / 86400);
                timeRemaining = (timeRemaining % 86400);
                hours = parseInt(timeRemaining / 3600);
                timeRemaining = (timeRemaining % 3600);
                minutes = parseInt(timeRemaining / 60);
                timeRemaining = (timeRemaining % 60);
                seconds = parseInt(timeRemaining);

                document.getElementById('days').innerHTML = parseInt(days, 10);
                document.getElementById('hours').innerHTML = ("0" + hours).slice(-2);
                document.getElementById('minutes').innerHTML = ("0" + minutes).slice(-2);
                document.getElementById('seconds').innerHTML = ("0" + seconds).slice(-2);
            }
            else return;
        }
        function display(days, hours, minutes, seconds) {}
    }
}

let countdown = new Countdown("9/5/2020 00:00:00 AM");