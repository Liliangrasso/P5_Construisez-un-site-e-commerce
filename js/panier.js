
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
        <div class="text-center card mt-3">
            <img src=${items.imageUrl} class="img-fluid card-img-top">
            <div class="card-body ">
                <h5 class="card-title bg-secondary text-center">${items.name}</h5>
                <div class="containerRating mt-3 mb-2 ml-3">
                    <p>${panier.lenses}</p>
                </div>
                <p class="text-center card-text mt-2">${items.description}</p>
                <p class="font-weight-bold text-center " id="price">${items.price}€</p>
            </div>            
            <div class="card-footer">
                <div class=" row justify-content-center">
                    <button type="button" class="btn btn-danger delete-items" data-id="${index}">Supprimer l'article</button>
                </div>
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
    console.log(buttons)
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

