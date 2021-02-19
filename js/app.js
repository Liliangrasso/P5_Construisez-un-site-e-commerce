function domReady() {
    fetch('http://localhost:3000/api/cameras')
        .then(response => response.json())
        .then(response => {
            populateTableList(response);

        })
        .catch(error => alert(error));
}
document.addEventListener('DOMContentLoaded', domReady);


function populateTableList(response) {
    let listOfProducts = '';

    response.forEach(items =>
        listOfProducts += `
        <div class="text-center card mt-3">
            <img src=${items.imageUrl} class="img-fluid card-img-top">
            <div class="card-body ">
                <h5 class="card-title bg-secondary text-center">${items.name}</h5>
                <div class="containerRating mt-3 mb-2 ml-3">
                    <span class="fa fa-star text-warning"></span>
                    <span class="fa fa-star text-warning"></span>
                    <span class="fa fa-star text-warning"></span>
                    <span class="fa fa-star text-warning"></span>
                    <span class="fa fa-star-o"></span>
                </div>
                <p class="text-center card-text mt-2">${items.description}</p>
                <p class="font-weight-bold text-center ">${items.price}€</p>
            </div>            
            <div class="card-footer">
                <div class=" row justify-content-center">
                    <a href="#" class="card-link btn btn-md cardBottum">
                        <span class="fa fa-shopping-cart fa-lg"></span>
                    </a>
                    <a href="./pages/produit.html?id=${items._id}" class="card-link btn btn-md cardBottum">
                        <span class="fa fa-plus-circle fa-lg"></span>
                    </a>
                    <a href="#" class="card-link btn btn-md cardBottum">
                        <span class="fa fa-heart fa-lg"></span>
                    </a>
                </div>
            </div>
        </div>
      `   )
    document.getElementById('productList').innerHTML = listOfProducts;
}
