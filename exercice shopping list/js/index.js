var shoppingList = [];

var liste = document.getElementById("liste");
var total = 0;
var champTotal = document.getElementById("total");
var produit = document.getElementById("produit");
var error = document.getElementById("error");
var nombre = document.getElementById("nombre");
var prix = document.getElementById("prix");


function ajouterProduit() {
    //Message d'erreur
    if (produit.value == '' || nombre.value == '' || prix.value == '') {
        error.innerHTML = "<span>Veuillez remplir tous les champs !</span>";
    } else {
        error.innerHTML = "";
        shoppingList.push([produit.value, nombre.value, prix.value]);
        displayList();
    }
}

function supprimer(e) {
    shoppingList.splice(e, 1);
    displayList();
}

function displayList() {
    if (produit.value == '' || nombre.value == '' || prix.value == '' || shoppingList.length == 0) {
        liste.innerHTML = "<h3>Veuillez ajouter un artcile pour voir la liste des produits !</h3>";
    } else {
        liste.innerHTML = "";
        total = 0;
        for (i = 0; i < shoppingList.length; i++) {
            liste.innerHTML += "<li>" + shoppingList[i][0] + " - " + shoppingList[i][1] + " - " + shoppingList[i][2] + "€ <button onclick='supprimer(" + i + ")'>X</button></li>"
            total += parseFloat(shoppingList[i][2]);
        }
        champTotal.innerHTML = total;
    }
}

displayList();



