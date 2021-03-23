//JSON object storing all the items available in the store
var storeItems = {
    "Eggs": {
        "title": "Eggs",
        "description": "From a chicken",
        "price": 2.50,
        "imgUrl": "./images/eggs.jpg",
        "itemQty": 0
    },
    "Peas": {
        "title": "Peas",
        "description": "Green Goodness",
        "price": 5.40,
        "imgUrl": "./images/peas.jpg",
        "itemQty": 0
    },
    "Bread": {
        "title": "Bread",
        "description": "Goes well with butter",
        "price": 7.24,
        "imgUrl": "./images/bread.jpg",
        "itemQty": 0
    }
};
var storeShelf = {};
function addItemToCart(id) {
    console.log("adding qty");
    storeShelf[id].addQty();
    console.log(storeShelf[id]);
    console.log(storeItems);
    render();
}
function render() {
    var shelf = document.getElementById("shelf");
    shelf.innerHTML = "";
    for (var item in storeShelf) {
        shelf.appendChild(storeShelf[item].domElement);
    }
}
function sessionStoreCart() {
}
var ItemCard = /** @class */ (function () {
    function ItemCard(itemName, itemDescription, itemPrice, image, itemQty) {
        if (image === void 0) { image = "../images/missingImage.png"; }
        if (itemQty === void 0) { itemQty = 0; }
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemPrice = itemPrice;
        this.image = image;
        this.itemQty = itemQty;
        this.createItemCard();
    }
    ItemCard.prototype.addQty = function () {
        this.itemQty++;
        this.createItemCard();
    };
    ItemCard.prototype.createItemCard = function () {
        //Create the container div for the item
        var ele = document.createElement("div");
        ele.setAttribute("class", "card col-md-3");
        ele.setAttribute("id", this.itemName);
        //Title element of card
        var Title = document.createElement("h1");
        Title.setAttribute("class", "card-title");
        Title.innerHTML = this.itemName;
        //Body element of card
        var Body = document.createElement("div");
        Body.setAttribute("class", "card-body overflow-auto");
        Body.innerHTML = this.itemDescription;
        //Image element of the card
        var Image = document.createElement("img");
        Image.setAttribute("class", "card-img-top img-fluid");
        Image.setAttribute("src", this.image);
        //Add item button
        var AddItemButton = document.createElement("button");
        AddItemButton.setAttribute("class", "btn btn-primary");
        AddItemButton.setAttribute("onclick", "addItemToCart(this.parentNode.id)");
        AddItemButton.innerHTML = "Add item to cart";
        //Footer to track qty in cart
        var ItemQuantity = document.createElement("div");
        ItemQuantity.setAttribute("class", "card-footer");
        ItemQuantity.innerHTML = this.itemQty.toString();
        //Append all elements to the post
        ele.append(Title, Body, Image, AddItemButton, ItemQuantity);
        this.domElement = ele;
    };
    return ItemCard;
}());
var initializePage = (function () {
    var shelf = document.getElementById("shelf");
    for (var item in storeItems) {
        var itemDetails = storeItems[item];
        var itemCard = new ItemCard(itemDetails.title, itemDetails.description, itemDetails.price, itemDetails.imgUrl);
        storeShelf[itemCard.itemName] = itemCard;
        // shelf.appendChild(itemCard.domElement)
    }
    render();
})();
