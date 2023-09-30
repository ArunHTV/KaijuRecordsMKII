$(document).ready(function () {
    var cart = [];

    
    $(".addToCart").click(function () {
        var productName = $(this).data("name");
        var productPrice = $(this).data("price");
        cart.push({ name: productName, price: productPrice });

        
        updateCartModal();
    });

    
    function updateCartModal() {
        var cartItems = $("#cart-items");
        cartItems.empty();

        if (cart.length === 0) {
            cartItems.append("<p>Your cart is empty.</p>");
        } else {
            $.each(cart, function (index, item) {
                cartItems.append("<p>" + item.name + " - $" + item.price.toFixed(2) + "</p>");
            });
        }
    }
});