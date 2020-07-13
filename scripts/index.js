document.getElementById('logo').addEventListener('click', () => {
    document.getElementById('container_authorization').style.display = 'none';
    document.getElementById('container_carousel').style.display = 'flex';
    document.getElementById('container_products').style.display = 'flex';
});

for(let i = 0; i < catalogProducts.length; i++){
    /* document.getElementById(`picture${i}`).innerHTML = `<p>${catalogProducts[i].name}</p>`; */
}

