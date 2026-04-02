// Modern Design JavaScript for MAPLE CHARM LLC

// Product data
const products = [
    {
        id: 1,
        name: "Vanilla Bliss Candle",
        price: 24.99,
        originalPrice: 34.99,
        image: "Products/1/main-image-1.jpeg",
        images: [
            "Products/1/main-image-1.jpeg",
            "Products/1/main-image-2.jpeg",
            "Products/1/main-image-3.jpeg",
            "Products/1/main-image-4.jpeg"
        ],
        description: "Experience the warm and comforting aroma of vanilla with our premium scented candle.",
        variants: ["Small (8oz)", "Medium (12oz)", "Large (16oz)"],
        category: "Classic",
        rating: 4.9,
        reviews: 127
    },
    {
        id: 2,
        name: "Lavender Dreams",
        price: 28.99,
        originalPrice: 38.99,
        image: "Products/2/main-image-1.jpeg",
        images: [
            "Products/2/main-image-1.jpeg",
            "Products/2/main-image-2.jpeg",
            "Products/2/main-image-3.jpeg",
            "Products/2/main-image-4.jpeg"
        ],
        description: "Relax and unwind with the calming scent of lavender fields in bloom.",
        variants: ["Small (8oz)", "Medium (12oz)", "Large (16oz)"],
        category: "Relaxing",
        rating: 4.8,
        reviews: 95
    },
    {
        id: 3,
        name: "Citrus Burst",
        price: 22.99,
        originalPrice: 32.99,
        image: "Products/3/main-image-1.jpeg",
        images: [
            "Products/3/main-image-1.jpeg",
            "Products/3/main-image-2.jpeg",
            "Products/3/main-image-3.jpeg",
            "Products/3/main-image-4.jpeg"
        ],
        description: "Energize your space with the refreshing blend of citrus fruits.",
        variants: ["Small (8oz)", "Medium (12oz)", "Large (16oz)"],
        category: "Energizing",
        rating: 4.7,
        reviews: 82
    },
    {
        id: 4,
        name: "Sandalwood Serenity",
        price: 32.99,
        originalPrice: 42.99,
        image: "Products/4/main-image-1.jpeg",
        images: [
            "Products/4/main-image-1.jpeg",
            "Products/4/main-image-2.jpeg",
            "Products/4/main-image-3.jpeg",
            "Products/4/main-image-4.jpeg"
        ],
        description: "Find your inner peace with the earthy, woody scent of sandalwood.",
        variants: ["Small (8oz)", "Medium (12oz)", "Large (16oz)"],
        category: "Meditative",
        rating: 4.9,
        reviews: 156
    },
    {
        id: 5,
        name: "Rose Garden",
        price: 29.99,
        originalPrice: 39.99,
        image: "Products/5/main-image-1.jpeg",
        images: [
            "Products/5/main-image-1.jpeg",
            "Products/5/main-image-2.jpeg",
            "Products/5/main-image-3.jpeg",
            "Products/5/main-image-4.jpeg"
        ],
        description: "Indulge in the romantic aroma of fresh roses in full bloom.",
        variants: ["Small (8oz)", "Medium (12oz)", "Large (16oz)"],
        category: "Romantic",
        rating: 4.8,
        reviews: 103
    },
    {
        id: 6,
        name: "Ocean Breeze",
        price: 26.99,
        originalPrice: 36.99,
        image: "Products/6/main-image-1.jpeg",
        images: [
            "Products/6/main-image-1.jpeg",
            "Products/6/main-image-2.jpeg",
            "Products/6/main-image-3.jpeg",
            "Products/6/main-image-4.jpeg"
        ],
        description: "Bring the fresh, clean scent of the ocean into your home.",
        variants: ["Small (8oz)", "Medium (12oz)", "Large (16oz)"],
        category: "Fresh",
        rating: 4.6,
        reviews: 78
    }
];

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
        
        // Add animation when count changes
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}

// Modern toast notification
function showToast(message, type = 'success') {
    const toastContainer = document.querySelector('.toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = `custom-toast toast-${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    const iconColor = type === 'success' ? 'text-success' : 'text-danger';
    
    toast.innerHTML = `
        <i class="fas ${icon} ${iconColor}"></i>
        <div>
            <strong>${type === 'success' ? 'Success!' : 'Error!'}</strong>
            <div>${message}</div>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
}

// Add to cart with enhanced feedback
function addToCart(productId, variant = null, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId && item.variant === variant);
    
    if (existingItem) {
        existingItem.quantity += quantity;
        showToast(`${product.name} quantity updated in cart!`);
    } else {
        cart.push({
            ...product,
            variant: variant,
            quantity: quantity
        });
        showToast(`${product.name} added to cart successfully!`);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Add cart animation
    animateCartIcon();
}

function animateCartIcon() {
    const cartIcon = document.querySelector('.nav-link[href="cart.html"]');
    if (cartIcon) {
        cartIcon.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            cartIcon.style.animation = '';
        }, 500);
    }
}

// Remove from cart
function removeFromCart(productId, variant = null) {
    const product = cart.find(item => item.id === productId && item.variant === variant);
    if (product) {
        cart = cart.filter(item => !(item.id === productId && item.variant === variant));
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showToast(`${product.name} removed from cart`);
        renderCart();
    }
}

// Update cart quantity
function updateCartQuantity(productId, variant, newQuantity) {
    const item = cart.find(item => item.id === productId && item.variant === variant);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId, variant);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            renderCart();
        }
    }
}

// Render featured products with modern design
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const featuredProducts = products.slice(0, 3);
    container.innerHTML = featuredProducts.map(product => `
        <div class="col-lg-4 col-md-6">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    <span class="product-badge">SALE</span>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-rating">
                        <div class="stars">
                            ${generateStars(product.rating)}
                        </div>
                        <small class="text-muted">(${product.reviews} reviews)</small>
                    </div>
                    <div class="product-price">
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                        $${product.price.toFixed(2)}
                    </div>
                    <div class="d-grid gap-2">
                        <a href="product-detail.html?id=${product.id}" class="btn-modern btn-outline-modern">
                            <i class="fas fa-eye"></i>
                            View Details
                        </a>
                        <button class="btn-modern btn-primary-modern" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Render all products
function renderAllProducts() {
    const container = document.getElementById('allProducts');
    if (!container) return;
    
    container.innerHTML = products.map(product => `
        <div class="col-lg-4 col-md-6">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    <span class="product-badge">SALE</span>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="text-muted small">${product.description}</p>
                    <div class="product-rating">
                        <div class="stars">
                            ${generateStars(product.rating)}
                        </div>
                        <small class="text-muted">(${product.reviews} reviews)</small>
                    </div>
                    <div class="product-price">
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                        $${product.price.toFixed(2)}
                    </div>
                    <div class="d-grid gap-2">
                        <a href="product-detail.html?id=${product.id}" class="btn-modern btn-outline-modern">
                            <i class="fas fa-eye"></i>
                            View Details
                        </a>
                        <button class="btn-modern btn-primary-modern" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render cart with modern design
function renderCart() {
    const container = document.getElementById('cartItems');
    const summaryContainer = document.getElementById('cartSummary');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5">
                <div class="mb-4">
                    <i class="fas fa-shopping-cart fa-4x text-muted"></i>
                </div>
                <h3>Your cart is empty</h3>
                <p class="text-muted mb-4">Add some products to get started!</p>
                <a href="products.html" class="btn-modern btn-primary-modern">
                    <i class="fas fa-shopping-bag"></i>
                    Continue Shopping
                </a>
            </div>
        `;
        if (summaryContainer) {
            summaryContainer.innerHTML = '';
        }
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-md-2">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                </div>
                <div class="col-md-4">
                    <h5 class="mb-2">${item.name}</h5>
                    ${item.variant ? `<p class="text-muted small mb-2">${item.variant}</p>` : ''}
                    <div class="product-rating">
                        <div class="stars small">
                            ${generateStars(item.rating || 4.5)}
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, '${item.variant || ''}', ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateCartQuantity(${item.id}, '${item.variant || ''}', parseInt(this.value))">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, '${item.variant || ''}', ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-2">
                    <h5 class="fw-bold">$${(item.price * item.quantity).toFixed(2)}</h5>
                    <small class="text-muted">$${item.price.toFixed(2)} each</small>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-danger btn-sm rounded-circle" onclick="removeFromCart(${item.id}, '${item.variant || ''}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    if (summaryContainer) {
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const shipping = subtotal > 50 ? 0 : 9.99;
        const total = subtotal + shipping;
        
        summaryContainer.innerHTML = `
            <h4 class="mb-4">Order Summary</h4>
            <div class="mb-3">
                <div class="d-flex justify-content-between mb-2">
                    <span>Subtotal (${cart.reduce((total, item) => total + item.quantity, 0)} items)</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                    <span>Shipping</span>
                    <span>${shipping === 0 ? '<span class="text-success">FREE</span>' : '$' + shipping.toFixed(2)}</span>
                </div>
                ${shipping > 0 ? '<small class="text-success d-block mb-2">Free shipping on orders over $50</small>' : ''}
            </div>
            <hr>
            <div class="d-flex justify-content-between mb-4">
                <h5>Total</h5>
                <h5>$${total.toFixed(2)}</h5>
            </div>
            <div class="d-grid gap-2">
                <button class="btn-modern btn-primary-modern">
                    <i class="fas fa-credit-card"></i>
                    Proceed to Checkout
                </button>
                <a href="products.html" class="btn-modern btn-outline-modern">
                    <i class="fas fa-arrow-left"></i>
                    Continue Shopping
                </a>
            </div>
        `;
    }
}

// Navbar scroll effect
function initNavbarScroll() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Fade in animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Newsletter form submission
function initNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            showToast('Thank you for subscribing! Check your email for a special offer.');
            this.reset();
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    initNavbarScroll();
    initScrollAnimations();
    initNewsletterForm();
    
    // Page-specific initialization
    if (document.getElementById('featuredProducts')) {
        renderFeaturedProducts();
    }
    
    if (document.getElementById('allProducts')) {
        renderAllProducts();
    }
    
    if (document.getElementById('cartItems')) {
        renderCart();
    }
    
    if (window.location.pathname.includes('product-detail.html')) {
        renderProductDetail();
    }
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 60%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        80% { transform: translateY(-5px); }
    }
    
    @keyframes slideOut {
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
