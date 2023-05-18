'use strict'

// consumir 
// function getProductosDestacados(){
//     let componente1 = document.getElementById('componente1');
//     let componente2 = document.getElementById('componente2');
//     let destacados3 = document.getElementById('destacados3');
//     let destacados4 = document.getElementById('destacados4');
//     let destacados5 = document.getElementById('destacados5');
//     let img1 = '';
//     let imgURL = '';
//     let nombre_producto = '';
//     let subcategoria = '';
//     let precio = '';
//     let precio_anterior = '';
//     let html = ``;
//     let endddiv = ``;
//     let item = '';
//     let item1 = '';
//     let item2 = '';
//     let item3 = '';
//     let item4 = '';
//     let item5 = '';
//     let categoria = '';
//     let productos = '';
//     let gaming = '../js/gaming.json';
//     let componentes = '../js/componentes.json';
//     let accesorios = '../js/accesorios.json';


//     // OBTENER ACCESORIOS
//     // let accesorios_aleatorios = [];
//     // fetch(accesorios)
//     // .then(response => response.json())
//     // .then(data=>{
//     //     console.log(data);
//     //     productos = data.accesorios;
//     //     categoria = 'accesorios';
//     //     while(accesorios_aleatorios.length<1){
//     //         const indice_aleatorio = Math.floor(Math.random()* productos.length);
//     //         accesorios_aleatorios.push(productos[indice_aleatorio]);
//     //     }
//     //     accesorios_aleatorios.forEach(e=>{
//     //         img1 = e.img1;
//     //         imgURL = e.imgURL;
//     //         nombre_producto = e.nombre;
//     //         subcategoria = e.subcategoria;
//     //         precio = e.precio;
//     //         precio_anterior = e.precio_anterior;
//     //         item1=`
//     //         <div class="product-img">
//     //             <img src="./img/${categoria}/${subcategoria}/${imgURL}/${img1}" alt="" width="200px">
//     //         </div>
//     //         <div class="product-body">
//     //             <p class="product-category">${categoria}</p>
//     //             <h3 class="product-name"><a href="#">${nombre_producto}</a></h3>
//     //             <h4 class="product-price">${precio} <del class="product-old-price">${precio_anterior}</del></h4>
//     //             <div class="product-btns">
//     //                 <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">Favorito</span></button>
                    
//     //                 <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rápida</span></button>
//     //             </div>
//     //         </div>
//     //         <div class="add-to-cart">
//     //             <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> lo quiero</button>
//     //         </div>`;
//     //     })
//     //     // destacados1.innerHTML = item1;
//     //     console.log(item1);
        
//     // })

    
//     // OBTENER COMPONENTES
//     let componentes_aleatorios = [];
//     fetch(accesorios)
//     .then(response => response.json())
//     .then(data=>{
//         console.log(data);
//         productos = data.accesorios;
//         categoria = 'accesorios';
//         item = 0;
//         while(componentes_aleatorios.length<1){
//             const indice_aleatorio = Math.floor(Math.random()* productos.length);
//             componentes_aleatorios.push(productos[indice_aleatorio]);
//         }
//         componentes_aleatorios.forEach(e=>{
//             img1 = e.img1;
//             imgURL = e.imgURL;
//             nombre_producto = e.nombre;
//             subcategoria = e.subcategoria;
//             precio = e.precio;
//             precio_anterior = e.precio_anterior;
//             if(item == 0){
//                 item2=`<div class="product-img">
//                         <img src="./img/accesorios/${subcategoria}/${imgURL}${img1}" alt="">
//                     </div>
//                     <div class="product-body">
//                         <p class="product-category">${categoria}</p>
//                         <h3 class="product-name"><a href="#">${nombre_producto}</a></h3>
//                         <h4 class="product-price">${precio} <del class="product-old-price">${precio_anterior}</del></h4>
//                     </div>`;   
//                 componente1.innerHTML = item2;
//                 console.log(item2);
//             }else{
//                 item3 = `<div class="product-img">
//                 <img src="./img/componentes/${subcategoria}/${imgURL}${img1}" alt="">
//             </div>
//             <div class="product-body">
//                 <p class="product-category">${categoria}</p>
//                 <h3 class="product-name"><a href="#">${nombre_producto}</a></h3>
//                 <h4 class="product-price">${precio} <del class="product-old-price">${precio_anterior}</del></h4>
//             </div>`;  
//             componente2.innerHTML = item3;
//             console.log(item3);
//             }
//             item++;
//         })
//     })

//     // // OBTENER GAMING
//     // let gaming_aleatorios = [];
//     // fetch(gaming)
//     // .then(response => response.json())
//     // .then(data=>{
//     //     console.log(data);
//     //     productos = data.gaming;
//     //     categoria = 'gaming';
//     //     item = 0;
//     //     while(gaming_aleatorios.length<2){
//     //         const indice_aleatorio = Math.floor(Math.random()* productos.length);
//     //         gaming_aleatorios.push(productos[indice_aleatorio]);
//     //     }
//     //     gaming_aleatorios.forEach(e=>{
//     //         img1 = e.img1;
//     //         imgURL = e.imgURL;
//     //         nombre_producto = e.nombre;
//     //         subcategoria = e.subcategoria;
//     //         precio = e.precio;
//     //         precio_anterior = e.precio_anterior;
//     //         if(item == 0){
//     //             item4=`<div class="product-img">
//     //                 <img src="./img/${categoria}/${subcategoria}/${imgURL}/${img1}" alt="">
//     //             </div>
//     //             <div class="product-body">
//     //                 <p class="product-category">${categoria}</p>
//     //                 <h3 class="product-name"><a href="#">${nombre_producto}</a></h3>
//     //                 <h4 class="product-price">${precio} <del class="product-old-price">${precio_anterior}</del></h4>
//     //                 <div class="product-btns">
//     //                     <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">Favorito</span></button>
                        
//     //                     <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rápida</span></button>
//     //                 </div>
//     //             </div>
//     //             <div class="add-to-cart">
//     //                 <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> lo quiero</button>
//     //             </div>`;   
//     //             // destacados4.innerHTML = item4;
//     //             console.log(item4);
//     //         }else{
//     //             item5 = `<div class="product-img">
//     //             <img src="./img/${categoria}/${subcategoria}/${imgURL}/${img1}" alt="">
//     //         </div>
//     //         <div class="product-body">
//     //             <p class="product-category">${categoria}</p>
//     //             <h3 class="product-name"><a href="#">${nombre_producto}</a></h3>
//     //             <h4 class="product-price">${precio} <del class="product-old-price">${precio_anterior}</del></h4>
//     //             <div class="product-btns">
//     //                 <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">Favorito</span></button>
                    
//     //                 <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rápida</span></button>
//     //             </div>
//     //         </div>
//     //         <div class="add-to-cart">
//     //             <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> lo quiero</button>
//     //         </div>`;  
//     //         // destacados5.innerHTML = item5;
//     //         console.log(item5);
//     //         }
//     //         item++;
//     //     })
//     // })
// }