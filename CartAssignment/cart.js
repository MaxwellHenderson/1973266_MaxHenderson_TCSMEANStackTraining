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
var cartItems = {};
// function initializeCart() {
//     cartItems = retrieveCart();
//     renderCart();
// }
function renderCart() {
    var cartContents = document.getElementById("cartContents");
    for (var item in cartItems) {
        var curItem = new CartItem(item, cartItems[item]);
        console.log("Current item");
        console.log(curItem);
        cartContents.appendChild(curItem.domElement);
    }
}
function retrieveCart() {
    console.log("retrieving");
    console.log(JSON.parse(sessionStorage.getItem("cart")));
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
        console.log("setting title");
        console.log(items);
        console.log("id: " + this.id);
        console.log(items[this.id]);
        console.log(items[this.id].title);
        ItemName.innerHTML = items[this.id].title;
        //Body element of card
        var QtyPrice = document.createElement("small");
        QtyPrice.setAttribute("class", "card-body overflow-auto");
        QtyPrice.innerHTML = "Number of items: " + this.qty + " total: $" + this.price;
        // //Image element of the card
        // const Image = document.createElement("img");
        // Image.setAttribute("class", "card-img-top img-fluid");
        // Image.setAttribute("src", this.image)
        // //Add item button
        // const AddItemButton = document.createElement("button")
        // AddItemButton.setAttribute("class", "btn btn-primary")
        // AddItemButton.setAttribute("onclick", "addItemToCart(this.parentNode.id)")
        // AddItemButton.innerHTML = "Add item to cart"
        // //Footer to track qty in cart
        // const ItemQuantity = document.createElement("div")
        // ItemQuantity.setAttribute("class", "card-footer")
        // ItemQuantity.innerHTML = this.itemQty.toString();
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
