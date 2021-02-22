
const search = window.location.search
const param = new URLSearchParams(search)
const id = param.get('id')
fetch('http://localhost:3000/api/cameras/' + id)
    .then(response => response.json())
    .then(response => {
        populateProduct(response);
    })
    .catch(error => alert(error));


function populateProduct(response) {

    const product = `
        <div class="text-center card mt-3">
            <img src=${response.imageUrl} class="img-fluid card-img-top">
            <div class="card-body ">
                <h5 class="card-title bg-secondary text-center">${response.name}</h5>
                <div class="containerRating mt-3 mb-2 ml-3">
                    <span class="fa fa-star text-warning"></span>
                    <span class="fa fa-star text-warning"></span>
                    <span class="fa fa-star text-warning"></span>
                    <span class="fa fa-star text-warning"></span>
                    <span class="fa fa-star-o"></span>
                </div>
                <p class="text-center card-text mt-2">${response.description}</p>
                <p class="font-weight-bold text-center ">${response.price}€</p>
            </div>            
            <div class="card-footer">
                <div class=" row justify-content-center">
                    <a href="#" class="card-link btn btn-md cardBottum">
                        <span class="fa fa-shopping-cart fa-lg"></span>
                    </a>
                    <a href="#" class="card-link btn btn-md cardBottum">
                        <span class="fa fa-heart fa-lg"></span>
                    </a>
                </div>
            </div>
        </div>
      ` 
    document.getElementById('product').innerHTML = product;
}