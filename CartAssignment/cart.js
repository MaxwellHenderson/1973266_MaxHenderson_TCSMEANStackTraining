//JSON object storing all the items available in the store
var items = {
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
//Used for the renderCart() function
var cartItems = {};
//Loops through the cartItems and creates CartItem objects, adding them to the DOM
//Not the most efficient as it makes new objects every time
function renderCart() {
    var cartContents = document.getElementById("cartContents");
    for (var item in cartItems) {
        var curItem = new CartItem(item, cartItems[item]);
        cartContents.appendChild(curItem.domElement);
    }
}
//Retrieves the JSON of the cart items
function retrieveCart() {
    return JSON.parse(sessionStorage.getItem("cart"));
}
var CartItem = /** @class */ (function () {
    function CartItem(id, qty) {
        this.price = qty * items[id].price;
        this.id = id;
        this.qty = qty;
        this.createCartItem();
    }
    CartItem.prototype.createCartItem = function () {
        //Create the container div for the item
        var ele = document.createElement("div");
        ele.setAttribute("class", "list-group-item");
        ele.setAttribute("id", this.id);
        //Title element of card
        var ItemName = document.createElement("h5");
        ItemName.setAttribute("class", "mb-1");
        ItemName.innerHTML = items[this.id].title;
        //Body element of card
        var QtyPrice = document.createElement("small");
        QtyPrice.setAttribute("class", "card-body overflow-auto");
        QtyPrice.innerHTML = "Number of items: " + this.qty + " total: $" + this.price;
        //Append all elements to the post
        ele.append(ItemName, QtyPrice);
        this.domElement = ele;
    };
    return CartItem;
}());
var initializeCart = (function () {
    cartItems = retrieveCart();
    renderCart();
})();
