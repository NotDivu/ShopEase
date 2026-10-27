let cart = [];

function addToCart(name, price) {
    let found = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == name) {
            cart[i].quantity++;
            found = true;
            break;
        }
    }

    if (found == false) {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    showCart();
}

function showCart() {
    let items = document.getElementById("cart-items");
    let total = 0;

    items.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];

        items.innerHTML +=
            "<p>" + product.name +
            " - ₹" + product.price +
            " <button onclick='changeQty(" + i + ", -1)'>−</button>" +
            " " + product.quantity + " " +
            "<button onclick='changeQty(" + i + ", 1)'>+</button>" +
            " <button onclick='removeFromCart(" + i + ")'>Remove</button></p>";

        total += product.price * product.quantity;
    }

    document.getElementById("total").innerHTML =
        "Total: ₹" + total;
}

function changeQty(index, change) {
    if (cart[index].quantity + change >= 1) {
        cart[index].quantity += change;
    }

    showCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
}