
const getAllProducts = () => {
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayProducts(data))
}

const displayProducts = (products) => {
    // console.log(products)
    if (products.length >= 10) {
        products = products.slice(0, 9)
        const allProductsHTML = products.map(product => getProductHTML(product))
        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = allProductsHTML.join(' ');
    }
}

const getProductHTML = ({ title, image, category, description, price, rating }) => {
    return `
        <div class="col-lg-4 col-md-6 col-sm-1">
            <div class="single-product bg-light rounded-3 p-4">
                <img class="img-fluid" src="${image}" alt="">
                <h5>${title.slice(0, 30)}</h5>
                <h6 class="text-capitalize">Category: ${category} </h6>
                <p class="fw-bold">Description: <span class="fw-normal">${description.slice(0, 65) + "..."}</span></p>
                <h6 class="fw-bold">Price: <span class="fw-normal">${price}</span></h6>
                <h6 class="fw-bold">Rating: <span class="fw-normal">${rating.rate}</span></h6>
            </div>
        </div>
    `;
}

const categoryProducts = () => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(json => jeweleryProducts(json))
}

const jeweleryProducts = (jeweleries) => {
    // console.log(jeweleries)
    if (jeweleries.length >= 4) {
        jeweleries = jeweleries.slice(0, 3)
        const allJeweleriesHTML = jeweleries.map(jewelery => getJeweleryHTML(jewelery))
        const jeweleryContainer = document.getElementById('jewelery-container');
        jeweleryContainer.innerHTML = allJeweleriesHTML.join(' ');
    }


}

const getJeweleryHTML = ({ image, title, description, price, rating }) => {
    return `
         <div class="col-lg-4 col-md-6 col-sm-1">
            <div class="single-product bg-light rounded-3 p-4">
                <img class="img-fluid" src="${image}" alt="">
                <h5>${title.slice(0, 30)}</h5>
                <p class="fw-bold">Description: <span class="fw-normal">${description.slice(0, 65) + "..."}</span></p>
                <h6 class="fw-bold">Price: <span class="fw-normal">${price}</span></h6>
                <h6 class="fw-bold">Rating: <span class="fw-normal">${rating.rate}</span></h6>
            </div>
        </div>
    `;
}

categoryProducts()

getAllProducts();