var buy = document.getElementById('buy')
var openBuy = document.getElementById('buyButton')
var buyValidation = document.getElementById('buyValidation')

document.getElementById('buyButton').addEventListener("click", () => {
    affichangeFormulaire()
    openBuy.style.display = 'none';
    buy.style.opacity = '1';
})

const affichangeFormulaire = () => {
    const structureFormulaire = `
                    <div class="row" id="containerFormulaire">
                        <div class="col">
                            <form class="buyForm">
                                <h2 class="mt-4 mb-4 mr-2 text-center"><span class="mt-4"><i class="fas fa-truck mr-2"></i></span>Informations de livraison</h2>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="lastName">Nom</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="inputLastName" id="inputLastName" placeholder="Entrez vôtre nom">                                            
                                            <div class="input-group-append">
                                                <span class="input-group-text inputIcon">
                                                    <i class="fas fa-check-circle"></i>
                                                    <i class="fas fa-times"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputFirstName">Prénom</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="inputFirstName" id="inputFirstName" placeholder="Entrez vôtre prénom">                                         
                                            <div class="input-group-append">
                                                <span class="input-group-text inputIcon">
                                                    <i class="fas fa-check-circle"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail">Email</label>
                                        <div class="input-group">
                                            <input type="email" class="form-control" name="inputEmail" id="inputEmail" placeholder="Email">                                      
                                            <div class="input-group-append">
                                                <span class="input-group-text inputIcon">
                                                    <i class="fas fa-check-circle"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Addresse</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="inputAddress" id="inputAddress" placeholder="1234 Main St">                                    
                                        <div class="input-group-append">
                                            <span class="input-group-text inputIcon">
                                                <i class="fas fa-check-circle"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity">Ville</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="inputCity" id="inputCity">                                                                               
                                            <div class="input-group-append">
                                                <span class="input-group-text inputIcon">
                                                    <i class="fas fa-check-circle"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputState">Pays</label>
                                        <select name="inputState" id="inputState" class="form-control">
                                        <optgroup label="Europe">
                                            <option selected>France</option>
                                            <option>Belgique</option>
                                            <option>Espagne</option>
                                        </optgroup>
                                        <optgroup label="Amerique">
                                            <option>Canada</option>
                                            <option>Colombie</option>
                                        </optgroup>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputZip">Code postal</label>
                                        <div class="input-group">
                                            <input type="number" class="form-control" name="inputZip" id="inputZip">                                                                           
                                            <div class="input-group-append">
                                                <span class="input-group-text inputIcon">
                                                    <i class="fas fa-check-circle"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row justify-content-center">
                                    <div class="form-group col-md-6">
                                        <h2 class="mt-4 mb-4 mr-2 text-center"><span class="mt-4"><i class="fas fa-money-check mr-2"></i></span>Paiement</h2>
                                        <div class="bg-white">
                                            <div class="card-header">
                                                <strong>Carte de credit</strong>
                                                <small>Entrez vos informations de paiement</small>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label for="name">Nom / prénom</label>                                                        
                                                        <div class="input-group-append">
                                                            <input class="form-control" id="ccname" type="text" placeholder="Entrez vôtre nom">
                                                            <span class="input-group-text inputIcon">
                                                                <i class="fas fa-check-circle"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <div class="form-group">
                                                            <label for="ccnumber">Numero de carte de  credit</label>
                                                            <div class="input-group">
                                                                <input id="ccnumber" class="form-control" type="number" placeholder="0000 0000 0000 0000" autocomplete="email">
                                                                <div class="input-group-append">
                                                                    <span class="input-group-text">
                                                                        <i class="fas fa-credit-card"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-sm-4">
                                                        <label for="ccmonth">Mois</label>
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
                                                        <label for="ccyear">Années</label>
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
                                                            <input class="form-control" id="cvv" type="number" placeholder="123">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <a href="commande.html"><button id='buyValidation' class="btn btn-sm btn-success float-right" type="submit">
                                                    <i class="fas fa-check mr-1"></i> Validez la commande</button></a>
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
    document.getElementById('containerFormulaire').addEventListener("keydown", (e) => {
        if (e.keycode === 13) {
            e.preventDefault;
        }
    })

    //*****************Formulaire********************//
    // Email
    inputEmail.addEventListener('change', function () {
        formulaireValidation(this.id);
    });

    // Nom
    inputLastName.addEventListener('change', function () {
        formulaireValidation(this.id);
    })
    //Prénom
    inputFirstName.addEventListener('change', function () {
        formulaireValidation(this.id);
    })
    // Adresse
    inputAddress.addEventListener('change', function () {
        formulaireValidation(this.id);
    })

    // Adresse
    inputAddress.addEventListener('change', function () {
        formulaireValidation(this.id);
    })

    // Ville
    inputCity.addEventListener('change', function () {
        formulaireValidation(this.id);
    })
    //Zip
    inputZip.addEventListener('change', function () {
        formulaireValidation(this.id);
    })
/*** Paiement ***/
    // Nom Prénom
    ccname.addEventListener('change', function () {
        formulaireValidation(this.id);
    })
    ccnumber.addEventListener('change', function () {
        formulaireValidation(this.id);
    })
    ccmonth.addEventListener('change', function () {
        formulaireValidation(this.id);
    })
    ccyear.addEventListener('change', function () {
        formulaireValidation(this.id);
    })
    cvv.addEventListener('change', function () {
        formulaireValidation(this.id);
    })
    const formulaireValidation = function (idInput) {
        let regExp;
        let caseName = document.getElementById('ccname');
        switch (idInput) {
            case 'inputEmail':
                regExp = new RegExp('[a-zA-Z0-9._]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
                break;
            case 'inputLastName':
                regExp = new RegExp('[/abcdefghijklmnopqrstxyz/]$', 'g');
                break;
            case 'inputFirstName':
                regExp = new RegExp('[/abcdefghijklmnopqrstxyz/]$', 'g');
                break;
            case 'inputAddress':
                regExp = new RegExp('[0-9]+[ ]+[a-z]', 'g');
                break;
            case 'inputCity':
                regExp = new RegExp('[a-z]$', 'g');
                break;
            case 'inputZip':
                regExp = new RegExp('/^[0-9]{3,}$/', 'g');
                break;
            case 'ccname':
                regExp = new RegExp('[/abcdefghijklmnopqrstxyz/]$', 'g');
                break;
            case 'ccnumber':
                regExp = new RegExp('^4[0-9]{ 12}(?:[0 - 9]{ 3})?$', 'g')
                break;
            case 'ccmouth':
                regExp = new RegExp('^4[0-9]{ 12}(?:[0 - 9]{ 3})?$', 'g')
                break;
            case 'ccyear':
                regExp = new RegExp('^4[0-9]{ 12}(?:[0 - 9]{ 3})?$', 'g')
                break;
            case 'cvv':
                regExp = new RegExp('/^[0-9]{3,}$/', 'g')
                break;
        }
        let validationIcon = document.querySelector('.inputIcon');
        var error = document.getElementsByClassName('fa-times');
        console.log(error)
        let icon = validationIcon.childNodes;
        let input = document.getElementById(idInput);
        if (regExp.test(input.value)) {
            input.style.borderColor = '#28a745'
            input.style.borderRightColor = 'white'
            caseName.value = inputLastName.value + ' ' + inputFirstName.value;  
            validationIcon.style.borderColor = '#28a745'
            icon[1].classList.remove("invalid");
            icon[1].classList.add("validRotate");
            validationIcon.style.color = '#28a745'
            icon[1].style.opacity = '1'
        }
        else {
            input.style.borderColor = '#dc3545'
            input.style.borderRightColor = 'white'
            validationIcon.style.color = '#dc3545'
            validationIcon.style.borderColor = '#dc3545'
            icon[1].classList.remove("validRotate");
            icon[1].classList.add("invalid");  
            icon[1].style.opacity = '0'
        }
    }



    var btnConfirmation = document.getElementById('buyValidation')
    btnConfirmation.addEventListener("click", (e) => {
        e.preventDefault();
        // Récupération de la data

        //Informations
        const informationLivraison = {
            lastName: document.getElementById("inputLastName").value,
            firstName: document.getElementById("inputFirstName").value,
            email: document.getElementById("inputEmail").value,
            address: document.getElementById("inputAddress").value,
            city: document.getElementById("inputCity").value,
            pays: document.getElementById("inputState").value,
            zip: document.getElementById("inputZip").value     
        }
        //Cartes Bancaires
        const informationPaiement = {
            name: document.getElementById("ccname").value,
            ccnumber: document.getElementById("ccnumber").value,
            ccmonth: document.getElementById("ccmonth").value,
            ccyear: document.getElementById("ccyear").value,
            cvv: document.getElementById("cvv").value
        }

       // Rassemblement des infos
        const formulaireDePaiement ={
            informationLivraison,
            informationPaiement
        }
        // Création de la commande
            let idCommandes = () => {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            let panier = localStorage.getItem("panier");
            let commandes = {
                id: idCommandes(),
                itemsPanier: panier,
                info: formulaireDePaiement
            }
        localStorage.setItem("commandes", JSON.stringify(commandes))

    })

};


