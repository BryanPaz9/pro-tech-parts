'use strict'
function getGaming(){
    let products = document.getElementById('products');
    let nombre_producto='';
    let subcategoria='';
    let img1 = '';
    let precio = '';
    let precio_anterior = '';
    let item='';
    let imgURL = '';
    let html ='<div class="row" id="products">';

    let enddiv = '</div>';
    fetch('../categorias/gaming/gaming.json')
    .then(response => response.json())
    .then(data => {
        data.gaming.forEach(e => {
            nombre_producto = e.nombre;
            subcategoria = e.subcategoria;
            img1 = e.img1;
            precio = e.precio;
            precio_anterior = e.precio_anterior;
            imgURL = e.imgURL;

            item = `<div class="col-md-4 col-xs-6">
            <div class="product">
                <div class="product-img">
                    <img src="./img/gaming/${subcategoria}/${imgURL}/${img1}" alt="">
                    <div class="product-label">
                    </div>
                </div>
                <div class="product-body">
                    <p class="product-category">${subcategoria}</p>
                    <h3 class="product-name"><a href="#">${nombre_producto}</a></h3>
                    <h4 class="product-price">${precio} <del class="product-old-price">${precio_anterior}</del></h4>
                    <div class="product-btns">
                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">Favorito</span></button>
                        
                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">ver producto</span></button>
                    </div>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> lo quiero</button>
                </div>
            </div>
        </div>
        `
            html+=item;
        })
            html+=enddiv;
            products.innerHTML = html;
    })
}

// 'use strict'
// function getGaming(){
//     let products = document.getElementById('products');
//     let product;
//     fetch('../categorias/gaming/gaming.json')
//     .then(response => response.json())
//     .then(data => {
//       data.forEach(e => {
//         product = e.img1;
        
//         products.innerHTML = `<li>${}</li>`;
//       });
//       console.log(data);
//     });

// }