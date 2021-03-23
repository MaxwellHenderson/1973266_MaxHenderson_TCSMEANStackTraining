//JSON object storing all the items available in the store
let storeItems = {
    "Eggs": {
        "title": "Eggs",
        "description": "From a chicken",
        "price": 2.50,
        "imgUrl": "./images/eggs.jpg",
        "itemQty" : 0
    },
    "Peas": {
        "title": "Peas",
        "description": "Green Goodness",
        "price": 5.40,
        "imgUrl": "./images/peas.jpg",
        "itemQty" : 0
    },
    "Bread": {
        "title": "Bread",
        "description": "Goes well with butter",
        "price": 7.24,
        "imgUrl": "./images/bread.jpg",
        "itemQty" : 0
    }
};

let storeShelf = {}
let cart = {}

function addItemToCart(id: string) {
    //Update state of current store
    storeShelf[id].addQty();

    //Update shopping cart info
    console.log(cart[id]);
    if (cart[id] == undefined) {
        cart[id] = 1
    } else {
        cart[id] = cart[id] + 1;
    }

    //Save cart data
    sessionStoreCart()
    render()
}


//Takes the values that are in the current state, and renders the cards
function render() {
    const shelf = document.getElementById("shelf")
    shelf.innerHTML =""
    for (let item in storeShelf) {
        shelf.appendChild(storeShelf[item].domElement)
    }
}

function sessionStoreCart() {
    console.log("storing");
    console.log(JSON.stringify(cart));
    sessionStorage.setItem("cart", JSON.stringify(cart))
}

class ItemCard {
    domElement: Element

    public itemName: string
    itemDescription: string
    itemPrice: number
    image: string
    itemQty: number

    constructor(itemName: string, itemDescription: string, itemPrice: number, image: string = "../images/missingImage.png", itemQty: number = 0){ 
        
        this.itemName = itemName
        this.itemDescription = itemDescription
        this.itemPrice = itemPrice
        this.image = image
        this.itemQty = itemQty

        this.createItemCard()
    }

    addQty() {
        this.itemQty++;
        this.createItemCard();
    }

    createItemCard(){
        //Create the container div for the item
        let ele = document.createElement("div");
        ele.setAttribute("class", "card col-md-3");
        ele.setAttribute("id", this.itemName)

        //Title element of card
        const Title = document.createElement("h1");
        Title.setAttribute("class", "card-title");
        Title.innerHTML = this.itemName;

        //Body element of card
        const Body = document.createElement("div")
        Body.setAttribute("class", "card-body overflow-auto");
        Body.innerHTML = this.itemDescription;

        //Image element of the card
        const Image = document.createElement("img");
        Image.setAttribute("class", "card-img-top img-fluid");
        Image.setAttribute("src", this.image)

        //Add item button
        const AddItemButton = document.createElement("button")
        AddItemButton.setAttribute("class", "btn btn-primary")
        AddItemButton.setAttribute("onclick", "addItemToCart(this.parentNode.id)")
        AddItemButton.innerHTML = "Add item to cart"

        //Footer to track qty in cart
        const ItemQuantity = document.createElement("div")
        ItemQuantity.setAttribute("class", "card-footer")
        ItemQuantity.innerHTML = this.itemQty.toString();


        //Append all elements to the post
        ele.append(Title, Body, Image, AddItemButton, ItemQuantity)

        this.domElement = ele

    }
}
var initializePage = (function () {
    const shelf = document.getElementById("shelf")
    for (let item in storeItems) {
        let itemDetails = storeItems[item]
        let itemCard = new ItemCard(itemDetails.title, itemDetails.description, itemDetails.price, itemDetails.imgUrl)
        storeShelf[itemCard.itemName] = itemCard
        // shelf.appendChild(itemCard.domElement)
    }
    render()
})();

