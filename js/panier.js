
function domReady() {
    const search = window.location.search
    const param = new URLSearchParams(search)
    fetch('http://localhost:3000/api/cameras')
        .then(response => response.json())
        .then(response => {
            const panier = JSON.parse(localStorage.getItem('panier'))
            if (panier === null) {
                const panierVide = `<div class="row">
                    <div class="col">
                        <p>Le panier est vide</p>
                    </div>
                </div>`;
                panierList.innerHTML = panierVide
            } else {
                populatePanier(panier)
            }

        })
        .catch(error => alert(error));
}
document.addEventListener('DOMContentLoaded', domReady);


function populatePanier(panier) {
 
    let listOfPanier = '';

    panier.forEach((items, index) =>
        listOfPanier += `
        <div class="row mt-4 productContainer">
            <div class="productImg col-lg-7">
                <img src=${items.imageUrl} alt="image du produit" class="img-fluid">
            </div>
            <div class="product-description col-lg-4">
                <div class="productTitle">
                    <h1>${items.name}</h1>
                </div>
                <div class="productInfo">
                    <div class="description">
                    <hr class="text-secondary" aria-hidden="true">
                        <p>${items.description}</p>
                    </div>
                </div>
                <div class="productCustom">
                <hr class="text-secondary" aria-hidden="true">
                <p>Vôtre lentille<p>
                </div>
                <div class="productPrice">
                    <hr class="text-secondary" aria-hidden="true">
                    <p class="font-weight-bold">${items.price}€</p>
                </div>
                <hr class="text-secondary" aria-hidden="true">
                <button type="button" class="btn btn-danger delete-items mb-1" data-id="${index}">Supprimer l'article</button>
            </div>
        </div>
      `   )
    document.getElementById('panierList').innerHTML = listOfPanier;
    // Suppression du panier //
    document.getElementById('delete-card').addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });
    // Suppression d'un items du panier //
    const buttons = document.getElementsByClassName('delete-items')
        Array.prototype.forEach.call(buttons, button => {
            button.addEventListener("click", (e) => {
                const panier = JSON.parse(localStorage.getItem('panier'))
                const id = parseInt(e.target.dataset.id)
                panier.splice(id, 1)
                localStorage.setItem('panier', JSON.stringify(panier))
                window.location.reload();
            })
    })
    
    // Calcule le total du panier //
    let totalCardCalcul = [];

    for (let m = 0; m < panier.length; m++){
        let cardPrice = panier[m].price
        totalCardCalcul.push(cardPrice)
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const totalPrice = totalCardCalcul.reduce(reducer, 0);
    const affichageTotalPrice = `
    <span>
    ${totalPrice}€
    </span>`
    document.getElementById('totalCard').innerHTML = affichageTotalPrice;

}

