document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cartPopup = document.getElementById('cart-popup');
    const closeCartButton = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    let cart = [];

    cartButton.addEventListener('click', () => {
        cartPopup.classList.toggle('open');
    });

    closeCartButton.addEventListener('click', () => {
        cartPopup.classList.remove('open');
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));

            const cartItem = cart.find(item => item.product === product);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({ product, price, quantity: 1 });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product} x${item.quantity} - ₸${item.price * item.quantity}`;
            cartItemsContainer.appendChild(li);

            total += item.price * item.quantity;
        });

        cartTotalElement.textContent = total.toFixed(2);
    }
});
