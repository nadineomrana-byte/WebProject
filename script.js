
let panier = [];
let total = 0;
function ajouterAuPanier(item, prix) {
    panier.push({ nom: item, prix: prix });
    total += prix;
    mettreAJourPanier();
}
function mettreAJourPanier() {
    const liste = document.getElementById('liste-panier');
    liste.innerHTML = '';
    panier.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element.nom + ' - ' + element.prix + ' DHS';
        liste.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}
function commander() {
    if (panier.length === 0) {
        alert('Votre panier est vide !');
    } else {
        alert('Commande confirmée ! Total : ' + total + ' DHS. Nous vous contacterons bientôt.');
        panier = [];
        total = 0;
        mettreAJourPanier();
    }
}