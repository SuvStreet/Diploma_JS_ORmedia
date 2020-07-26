document.getElementById('logo').addEventListener('click', () => {
    document.getElementById('container_authorization').style.display = 'none';
    //document.getElementById('infoProduct').style.display = 'none';
    //document.getElementById('container_carousel').style.display = 'flex';
    document.getElementById('infoProduct').innerHTML = '';
    let mainSlider = new MainSlider(catalogProducts);
    document.getElementById('catalog_products').style.display = 'none';
    let mainPage = new MainPage();
    let catalog = new Catalog();
    document.getElementById('cart').innerHTML = "";
});



for (let i = 0; i < catalogProducts.length; i++) {
    /* document.getElementById(`picture${i}`).innerHTML = `<p>${catalogProducts[i].name}</p>`; */
}

/* document.getElementById('container_carousel').style.display = 'none';
document.getElementById('container_products').style.display = 'none'; */
/* document.getElementById('infoProduct').style.height = "500px"; */