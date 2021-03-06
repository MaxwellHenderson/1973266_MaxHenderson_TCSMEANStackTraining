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
//Store shelf is what is currently being displayed on the screen and is used for the render function
var storeShelf = {};
//Cart represents the data that will be saved to localStorage
var cart = {};
function addItemToCart(id) {
    //Update state of current store
    storeShelf[id].addQty();
    //Update shopping cart info
    console.log(cart[id]);
    if (cart[id] == undefined) {
        cart[id] = 1;
    }
    else {
        cart[id] = cart[id] + 1;
    }
    //Save cart data
    sessionStoreCart();
    render();
}
//Takes the values that are in the current state, and renders the cards using the saved ItemCard objects
function render() {
    var shelf = document.getElementById("shelf");
    shelf.innerHTML = "";
    for (var item in storeShelf) {
        shelf.appendChild(storeShelf[item].domElement);
    }
}
function sessionStoreCart() {
    console.log("storing");
    console.log(JSON.stringify(cart));
    sessionStorage.setItem("cart", JSON.stringify(cart));
}
//Creates an ItemCard object that contains information about the store item, as well as its DOM element
//representation for the render function to use
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
    //Updates the ItemCard information
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
//This is called when the page loads. It loops through the JSON object of storeItems and creates a new
//ItemCard for each of them, storing it for this page for the render() function to use, and then
//calls the render() function.
var initializePage = (function () {
    for (var item in storeItems) {
        var itemDetails = storeItems[item];
        var itemCard = new ItemCard(itemDetails.title, itemDetails.description, itemDetails.price, itemDetails.imgUrl);
        storeShelf[itemCard.itemName] = itemCard;
    }
    render();
})();
