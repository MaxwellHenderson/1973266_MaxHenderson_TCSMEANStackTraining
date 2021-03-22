"use strict";
exports.__esModule = true;
var itemCard_1 = require("./itemCard");
var storeItems = {
    "eggs": {
        "title": "Eggs",
        "description": "From a chicken",
        "price": 2.50,
        "imgUrl": "../images/eggs.jpg"
    },
    "peas": {
        "title": "Peas",
        "description": "Green Goodness",
        "price": 5.40,
        "imgUrl": "../images/peas.jpg"
    },
    "bread": {
        "title": "Bread",
        "description": "Goes well with butter",
        "price": 7.24,
        "imgUrl": "../images/bread.jpg"
    }
};
function intializeStoreFront() {
    var itemContainer = document.getElementById("itemContainerRow");
    for (var item in storeItems) {
        console.log("adding item");
        var entry = storeItems[item];
        var card = new itemCard_1.ItemCard(entry.title, entry.description, entry.price, entry.imgUrl, 0);
        itemContainer.appendChild(card.elementData);
    }
}
