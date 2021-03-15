

const commande = JSON.parse(localStorage.getItem('commandes'))
document.getElementById('numeroCommande').innerHTML = commande.id;