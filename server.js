const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML Pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public', 'about.html')));
app.get('/pets', (req, res) => res.sendFile(path.join(__dirname, 'public', 'pets.html')));
app.get('/shop', (req, res) => res.sendFile(path.join(__dirname, 'public', 'shop.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public', 'contact.html')));
app.get('/cart', (req, res) => res.sendFile(path.join(__dirname, 'public', 'cart.html')));
app.get('/faq', (req, res) => res.sendFile(path.join(__dirname, 'public', 'faq.html')));
app.get('/success-stories', (req, res) => res.sendFile(path.join(__dirname, 'public', 'success-stories.html')));
app.get('/training-tips', (req, res) => res.sendFile(path.join(__dirname, 'public', 'training-tips.html')));
app.get('/blog', (req, res) => res.sendFile(path.join(__dirname, 'public', 'blog.html')));
app.get('/pet-care', (req, res) => res.sendFile(path.join(__dirname, 'public', 'pet-care.html')));
app.get('/pet-resources', (req, res) => res.sendFile(path.join(__dirname, 'public', 'pet-resources.html')));
app.get('/sponsorship', (req, res) => res.sendFile(path.join(__dirname, 'public', 'sponsorship.html')));

// API Routes
// Fetching pet data
app.get('/api/pets', (req, res) => {
    const pets = [
        { id: 1, name: "Coco", type: "dog", image: "/images/coco_dog.jpg" },
        { id: 2, name: "Lily", type: "cat", image: "/images/lily_cat.jpg" },
        { id: 3, name: "Simba", type: "dog", image: "/images/simba_dog.jpg" },
        { id: 4, name: "Sheru", type: "dog", image: "/images/sheru_dog.jpg" }
    ];
    res.json(pets);
});

// Contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact form submitted by: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ status: 'success', message: 'Thank you for reaching out!' });
});

// Cart endpoints (add items, view cart, etc.)
app.post('/api/cart/add', (req, res) => {
    const { id, name, price, quantity } = req.body;
    console.log(`Added to cart: ${name}, Quantity: ${quantity}, Price: ${price}`);
    res.json({ status: 'success', message: `${name} added to cart.` });
});

app.get('/api/cart', (req, res) => {
    const cart = [
        { id: 1, name: "Premium Dog Food", price: 29.99, quantity: 1 },
        { id: 2, name: "Interactive Cat Toy", price: 12.99, quantity: 2 }
    ];
    res.json(cart);
});

// Sponsor endpoint
app.post('/api/sponsor', (req, res) => {
    const { petId, sponsorAmount } = req.body;
    console.log(`Sponsorship received for pet ID: ${petId} with amount: $${sponsorAmount}`);
    res.json({ status: 'success', message: 'Thank you for your sponsorship!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
