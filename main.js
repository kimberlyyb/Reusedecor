document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const cartTab = document.getElementById('cart-tab');
    const closeCartButton = document.getElementById('close-cart');
    const listCart = document.getElementById('list-cart');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');

    let cart = [];

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function calculateSubtotal() {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    function calculateTotal() {
        const subtotal = calculateSubtotal();
        const total = subtotal; // Adicione outras taxas, descontos, etc. se necessário
        return total;
    }

    function renderCart() {
        listCart.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>${item.name}</div>
                <div class="quantity">
                    <span class="decrease">-</span>
                    <span>${item.quantity}</span>
                    <span class="increase">+</span>
                </div>
                <div>R$ ${(item.price * item.quantity).toFixed(2)}</div>
                <span class="remove">x</span>
            `;
            listCart.appendChild(cartItem);

            cartItem.querySelector('.decrease').addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cart = cart.filter(cartItem => cartItem !== item);
                }
                updateCart();
            });

            cartItem.querySelector('.increase').addEventListener('click', () => {
                item.quantity++;
                updateCart();
            });

            cartItem.querySelector('.remove').addEventListener('click', () => {
                cart = cart.filter(cartItem => cartItem !== item);
                updateCart();
            });
        });

        const subtotal = calculateSubtotal().toFixed(2);
        const total = calculateTotal().toFixed(2);
        cartSubtotal.textContent = subtotal;
        cartTotal.textContent = total;
    }

    function updateCart() {
        updateCartCount();
        renderCart();
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const item = e.target.closest('.offer__item');
            const name = item.querySelector('.offer__desc p').textContent;
            const price = parseFloat(item.querySelector('.offer__price span').textContent.replace('R$', '').replace(',', '.'));
            const image = item.querySelector('.offer__img img').src;

            const existingItem = cart.find(cartItem => cartItem.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }
            updateCart();
        });
    });

    cartIcon.addEventListener('click', () => {
        cartTab.classList.toggle('open');
    });

    closeCartButton.addEventListener('click', () => {
        cartTab.classList.remove('open');
    });
});
