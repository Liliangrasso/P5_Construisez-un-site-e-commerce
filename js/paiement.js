var buy = document.getElementById('buy')
let buyValidation = document.getElementById('buyValidation')

document.getElementById('buyButton').addEventListener("click", () => {
    affichangeFormulaire()
    buy.style.opacity = '1';
})





const affichangeFormulaire = () => {
    const structureFormulaire = `
                    <div class="row">
                        <div class="col">
                            <form class="buyForm">
                                <h2 class="mt-4 mb-4 text-center">Informations de livraison</h2>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail">Email</label>
                                        <input type="email" class="form-control" name="inputEmail" id="inputEmail" placeholder="Email">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Addresse</label>
                                    <input type="text" class="form-control" name="inputAddress" id="inputAddress" placeholder="1234 Main St">
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress2">Complement d'adresse</label>
                                    <input type="text" class="form-control" name="inputAddress2" id="inputAddress2"
                                        placeholder="Apartment, studio, or floor">
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity">Ville</label>
                                        <input type="text" class="form-control" name="inputCity" id="inputCity">
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputState">Pays</label>
                                        <select name="inputState" id="inputState" class="form-control">
                                            <option selected>France</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputZip">Code postal</label>
                                        <input type="text" class="form-control" name="inputZip" id="inputZip">
                                    </div>
                                </div>
                                <div class="form-row justify-content-center">
                                    <div class="form-group col-md-6">
                                        <h2 class="mt-4 mb-4 text-center">Paiement</h2>
                                        <div class="bg-white">
                                            <div class="card-header">
                                                <strong>Credit Card</strong>
                                                <small>Entrez vos informations de paiement</small>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <div class="form-group">
                                                            <label for="name">Name</label>
                                                            <input class="form-control" id="name" type="text" placeholder="Enter your name">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <div class="form-group">
                                                            <label for="ccnumber">Credit Card Number</label>
                                                            <div class="input-group">
                                                                <input id="ccnumber" class="form-control" type="text" placeholder="0000 0000 0000 0000" autocomplete="email">
                                                                <div class="input-group-append">
                                                                    <span class="input-group-text">
                                                                        <i class="mdi mdi-credit-card"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-sm-4">
                                                        <label for="ccmonth">Month</label>
                                                        <select class="form-control" id="ccmonth">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>7</option>
                                                            <option>8</option>
                                                            <option>9</option>
                                                            <option>10</option>
                                                            <option>11</option>
                                                            <option>12</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-4">
                                                        <label for="ccyear">Year</label>
                                                        <select class="form-control" id="ccyear">
                                                            <option>2021</option>
                                                            <option>2022</option>
                                                            <option>2023</option>
                                                            <option>2024</option>
                                                            <option>2025</option>
                                                            <option>2026</option>
                                                            <option>2027</option>
                                                            <option>2028</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="form-group">
                                                            <label for="cvv">CVV/CVC</label>
                                                            <input class="form-control" id="cvv" type="text" placeholder="123">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <button id='buyValidation' class="btn btn-sm btn-success float-right" type="submit">
                                                    <i class="mdi mdi-gamepad-circle"></i> Continue</button>
                                                <button class="btn btn-sm btn-danger" type="reset">
                                                    <i class="fas fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
    `;
    document.getElementById('buy').innerHTML = structureFormulaire;
    var btnConfirmation = document.getElementById('buyValidation')
    btnConfirmation.addEventListener("click", (e) => {
        e.preventDefault();
        // Récupération de la data
        //Informations
        const informationLivraison = {
            email: document.getElementById("inputEmail").value,
            adresse: document.getElementById("inputAddress").value,
            complementAdresse: document.getElementById("inputAddress2").value,
            ville: document.getElementById("inputCity").value,
            pays: document.getElementById("inputState").value,
            zip: document.getElementById("inputZip").value     
        }
        localStorage.setItem("informationLivraison", JSON.stringify(informationLivraison))
        //Cartes Bancaires
        const informationPaiement = {
            name: document.getElementById("name").value,
            ccnumber: document.getElementById("ccnumber").value,
            ccmonth: document.getElementById("ccmonth").selectedIndex,
            ccyear: document.getElementById("ccyear").selectedIndex,
            cvv: document.getElementById("cvv").value
        }
        localStorage.setItem("informationPaiement", JSON.stringify(informationPaiement))


       // Envoie au serveur
        const formulaireDePaiement ={
            informationLivraison,
            informationPaiement
        }
        console.log(formulaireDePaiement)
    })

};



