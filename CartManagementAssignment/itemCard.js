"use strict";
exports.__esModule = true;
exports.createItemCard = exports.ItemCard = void 0;
var ItemCard = /** @class */ (function () {
    function ItemCard(itemName, itemDescription, itemPrice, image, itemQty) {
        if (image === void 0) { image = "../images/missingImage.png"; }
        if (itemQty === void 0) { itemQty = 0; }
        this.elementData = createItemCard(itemName, itemDescription, itemPrice, image, itemQty);
    }
    return ItemCard;
}());
exports.ItemCard = ItemCard;
function createItemCard(itemName, itemDescription, itemPrice, image, itemQty) {
    if (image === void 0) { image = "../images/missingImage.png"; }
    if (itemQty === void 0) { itemQty = 0; }
    //Create the container div for the item
    var ItemCard = document.createElement("div");
    ItemCard.setAttribute("class", "card col-md-3");
    ItemCard.setAttribute("id", itemName);
    //Title element of card
    var Title = document.createElement("h1");
    Title.setAttribute("class", "card-title");
    Title.innerHTML = itemName;
    //Body element of card
    var Body = document.createElement("div");
    Body.setAttribute("class", "card-body overflow-auto");
    Body.innerHTML = itemDescription;
    //Image element of the card
    var Image = document.createElement("img");
    Image.setAttribute("class", "card-img-top img-fluid");
    Image.setAttribute("src", image);
    //Append all elements to the post
    ItemCard.append(Title, Body, Image);
    return ItemCard;
}
exports.createItemCard = createItemCard;
