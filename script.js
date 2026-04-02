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
        category: "Classic"
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
        category: "Relaxing"
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
        category: "Energizing"
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
        category: "Meditative"
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
        category: "Romantic"
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
        category: "Fresh"
    }
];

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// Show toast notification
function showToast(message, type = 'success') {
    const toastContainer = document.querySelector('.toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = `custom-toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger'}"></i>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
}

// Add to cart function
function addToCart(productId, variant = null, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId && item.variant === variant);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            variant: variant,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${product.name} added to cart!`);
}

// Remove from cart function
function removeFromCart(productId, variant = null) {
    cart = cart.filter(item => !(item.id === productId && item.variant === variant));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    showToast('Item removed from cart');
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

// Render products on homepage
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const featuredProducts = products.slice(0, 3);
    container.innerHTML = featuredProducts.map(product => `
        <div class="col-lg-4 col-md-6">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                        $${product.price.toFixed(2)}
                    </div>
                    <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
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
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="text-muted">${product.description}</p>
                    <div class="product-price">
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                        $${product.price.toFixed(2)}
                    </div>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary w-100 mb-2">
                        View Details
                    </a>
                    <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render cart
function renderCart() {
    const container = document.getElementById('cartItems');
    const summaryContainer = document.getElementById('cartSummary');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <h3>Your cart is empty</h3>
                <p class="text-muted">Add some products to get started!</p>
                <a href="products.html" class="btn btn-primary">Continue Shopping</a>
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
                    <h5>${item.name}</h5>
                    ${item.variant ? `<p class="text-muted">${item.variant}</p>` : ''}
                </div>
                <div class="col-md-2">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, '${item.variant || ''}', ${item.quantity - 1})">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateCartQuantity(${item.id}, '${item.variant || ''}', parseInt(this.value))">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, '${item.variant || ''}', ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <div class="col-md-2">
                    <h5>$${(item.price * item.quantity).toFixed(2)}</h5>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id}, '${item.variant || ''}')">
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
            <h4>Order Summary</h4>
            <div class="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between mb-3">
                <h5>Total:</h5>
                <h5>$${total.toFixed(2)}</h5>
            </div>
            <button class="btn btn-primary w-100">Proceed to Checkout</button>
            <a href="products.html" class="btn btn-outline-primary w-100 mt-2">Continue Shopping</a>
        `;
    }
}

// Product detail page functions
function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Update main image
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }
    
    // Update product info
    const productName = document.getElementById('productName');
    const productPrice = document.getElementById('productPrice');
    const productDescription = document.getElementById('productDescription');
    
    if (productName) productName.textContent = product.name;
    if (productPrice) {
        productPrice.innerHTML = `
            <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
            $${product.price.toFixed(2)}
        `;
    }
    if (productDescription) productDescription.textContent = product.description;
    
    // Render thumbnails
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    if (thumbnailContainer) {
        thumbnailContainer.innerHTML = product.images.map((img, index) => `
            <img src="${img}" alt="${product.name} ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
        `).join('');
    }
    
    // Render variants
    const variantContainer = document.getElementById('variantContainer');
    if (variantContainer) {
        variantContainer.innerHTML = product.variants.map((variant, index) => `
            <button class="variant-btn ${index === 0 ? 'active' : ''}" onclick="selectVariant(this, '${variant}')">${variant}</button>
        `).join('');
    }
    
    // Render related products
    renderRelatedProducts(productId);
}

function renderRelatedProducts(currentProductId) {
    const relatedContainer = document.getElementById('relatedProducts');
    if (!relatedContainer) return;
    
    const relatedProducts = products.filter(p => p.id !== currentProductId).slice(0, 3);
    relatedContainer.innerHTML = relatedProducts.map(product => `
        <div class="col-lg-4 col-md-6">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                        $${product.price.toFixed(2)}
                    </div>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary w-100 mb-2">
                        View Details
                    </a>
                    <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

function selectVariant(button, variant) {
    // Update active variant
    document.querySelectorAll('.variant-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    
    // Store selected variant
    window.selectedVariant = variant;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
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
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            showToast('Thank you for subscribing!');
            this.reset();
        });
    }
    
    // Add to cart on product detail page
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = parseInt(urlParams.get('id'));
            const quantity = parseInt(document.getElementById('quantityInput').value);
            const variant = window.selectedVariant || document.querySelector('.variant-btn.active')?.textContent;
            
            addToCart(productId, variant, quantity);
        });
    }
});

// Quantity controls for product detail page
function decreaseQuantity() {
    const input = document.getElementById('quantityInput');
    if (input && parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function increaseQuantity() {
    const input = document.getElementById('quantityInput');
    if (input) {
        input.value = parseInt(input.value) + 1;
    }
}
