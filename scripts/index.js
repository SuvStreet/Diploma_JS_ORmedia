document.getElementById('logo').addEventListener('click', () => {
    document.getElementById('container_authorization').style.display = 'none';
    document.getElementById('infoProduct').style.display = 'none';
    document.getElementById('container_carousel').style.display = 'flex';
    //swiper1.destroy();

    mainSlider = new MainSlider(catalogProducts);


    /* swiper1.params.init = false; */
    /* swiper1.params.init = true; */
    /* swiper1.init(); 
    swiper1.update();
    console.log(1); */

    document.getElementById('container_products').style.display = 'flex';
    document.getElementById('infoProduct').innerHTML = '';
});



for (let i = 0; i < catalogProducts.length; i++) {
    /* document.getElementById(`picture${i}`).innerHTML = `<p>${catalogProducts[i].name}</p>`; */
}

/* document.getElementById('container_carousel').style.display = 'none';
document.getElementById('container_products').style.display = 'none'; */
/* document.getElementById('infoProduct').style.height = "500px"; */