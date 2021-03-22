export class ItemCard {
    elementData: Element;

    constructor(itemName: string, itemDescription: string, itemPrice: number, image: string = "../images/missingImage.png", itemQty: number = 0) {
        this.elementData = createItemCard(itemName, itemQty, itemDescription, image)
    }
}

const createItemCard = (itemName: string, itemQty: number = 0, itemDescription: string, image: string = "../images/missingImage.png") => {
    //Create the container div for the item
    const ItemCard = document.createElement("div");
    ItemCard.setAttribute("class", "card col-md-3");
    ItemCard.setAttribute("id", itemName)

    //Title element of card
    const Title = document.createElement("h1");
    Title.setAttribute("class", "card-title");
    Title.innerHTML = itemName;

    //Body element of card
    const Body = document.createElement("div")
    Body.setAttribute("class", "card-body overflow-auto");
    Body.innerHTML = itemDescription;

    //Image element of the card
    const Image = document.createElement("img");
    Image.setAttribute("class", "card-img-top img-fluid");
    Image.setAttribute("src", image)


    //Append all elements to the post
    ItemCard.append(Title, Body, Image)

    return ItemCard;
}


