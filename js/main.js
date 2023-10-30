const btnCategoria = document.getElementsByClassName("btn-categoria");
const productos = document.getElementById("productos");



const añadirAlHtml = ({ nombre, precio }) => {
    productos.innerHTML += `<div class="producto">
    <div>
        <img src="./assets/cafedoble.jpg" alt="cardImg" class="card-img">
    </div>
    <div class="descripcion">
        <div class="desc-text">
            <p>${nombre}</p>
            <p>Codigo</p>
        </div>
        <divclass="desc-text">
            <p>${precio}</p>
            <p>Descripción</p>
            </divclass=>
    </div>
</div>`

}
const renderProducts = (categoria) => {
    console.log(categoria);
    if (!categoria) {
        prods.forEach(producto => añadirAlHtml(producto))
    }
    if (categoria === "All") {
        prods.forEach(producto => añadirAlHtml(producto))

    } else {

        const productosFiltrados = prods.filter(prod => prod.categoria === categoria);
        productos.innerHTML = "";
        productosFiltrados.forEach(producto => {
            añadirAlHtml(producto);
        })
    }

}
const renderProductsAll = (array) => {
    if (array) {
        array.forEach(producto => {
            añadirAlHtml(producto);
        })
    } else {
        return
    }



}


function init() {
    window.addEventListener("DOMContentLoaded", () => {
        renderProductsAll(prods)

    })


    for (const btn of btnCategoria) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const categoria = e.target.dataset.categoria;
            renderProducts(categoria)
        })

    }


};

init();


