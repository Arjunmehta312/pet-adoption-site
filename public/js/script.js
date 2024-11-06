document.addEventListener('DOMContentLoaded', function() {
    // FAQ Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.querySelector('h3').addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Shopping Cart Functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const totalAmount = document.getElementById('total-amount');
        
        if (cartItems && totalAmount) {
            cartItems.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: $${item.price}</p>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                `;
                cartItems.appendChild(cartItem);
                total += item.price * item.quantity;
            });

            totalAmount.textContent = total.toFixed(2);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Add to Cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            updateCart();
            alert(`${name} added to cart!`);
        });
    });

    // Remove from Cart
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('remove-item')) {
            const id = e.target.getAttribute('data-id');
            cart = cart.filter(item => item.id !== id);
            updateCart();
        }
    });

    // Checkout
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert('Thank you for your purchase!');
            cart = [];
            updateCart();
        });
    }

    // Sponsorship
    const sponsorButtons = document.querySelectorAll('.sponsor-button');
    sponsorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const amount = button.getAttribute('data-amount');
            alert(`Thank you for sponsoring ${name} with $${amount}!`);
        });
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Initialize cart on page load
    updateCart();
});