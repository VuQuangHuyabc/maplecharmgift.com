# MAPLE CHARM LLC - E-commerce Website

A complete e-commerce website for selling premium scented candle jars, built with HTML, CSS, Bootstrap, and JavaScript.

## Features

### 🛒 Shopping Cart Functionality
- **Add to Cart**: Fully functional add to cart buttons on all product pages
- **Cart Management**: View, update quantities, and remove items from cart
- **Persistent Cart**: Cart data saved in localStorage
- **Real-time Updates**: Cart count updates automatically across all pages

### 📱 Responsive Design
- Mobile-friendly layout using Bootstrap 5
- Adaptive navigation menu
- Responsive product grids
- Touch-friendly interface elements

### 🎨 Modern UI/UX
- Clean, professional design
- Smooth animations and transitions
- Hover effects on interactive elements
- Toast notifications for user feedback

### 📦 Product Management
- **Product Catalog**: 6 premium scented candle products
- **Product Details**: Individual product pages with multiple images
- **Variant Selection**: Size options for each product
- **Image Gallery**: Main image with thumbnail navigation
- **Related Products**: Suggestions on product detail pages

### 📄 Complete Website Pages
1. **Home Page** (`index.html`) - Hero section, featured products
2. **Products Page** (`products.html`) - Full product catalog
3. **Product Detail** (`product-detail.html`) - Individual product information
4. **Shopping Cart** (`cart.html`) - Cart management and checkout
5. **About Us** (`about.html`) - Company information and story
6. **Contact Us** (`contact.html`) - Contact form and FAQ
7. **Privacy Policy** (`privacy.html`) - Privacy protection policy
8. **Shipping Policy** (`shipping.html`) - Shipping information
9. **Terms & Conditions** (`terms.html`) - Website terms of use
10. **Returns & Refunds** (`returns.html`) - Return policy

## Product Information

### Available Products
1. **Vanilla Bliss Candle** - $24.99 (was $34.99)
2. **Lavender Dreams** - $28.99 (was $38.99)
3. **Citrus Burst** - $22.99 (was $32.99)
4. **Sandalwood Serenity** - $32.99 (was $42.99)
5. **Rose Garden** - $29.99 (was $39.99)
6. **Ocean Breeze** - $26.99 (was $36.99)

### Product Features
- Multiple size options (Small 8oz, Medium 12oz, Large 16oz)
- High-quality product images from Products/ folder
- Detailed product descriptions
- Sale pricing with original prices shown

## Company Information

- **Company Name**: MAPLE CHARM LLC
- **Website**: maplecharmgift.com
- **Email**: contact@rosellethreadstudio.com
- **Address**: 1001 S MAIN ST STE 600 KALISPELL, MT 59901-1498
- **Business Hours**: 9 AM - 5 PM (Monday - Friday)
- **Currency**: USD
- **Language**: English

## Technical Implementation

### Technologies Used
- **HTML5**: Semantic markup and structure
- **Bootstrap 5**: Responsive framework and components
- **CSS3**: Custom styling and animations
- **JavaScript ES6+**: Interactive functionality and cart management
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Playfair Display & Source Sans Pro)

### Key JavaScript Features
- Shopping cart management with localStorage
- Dynamic product rendering
- Image gallery functionality
- Quantity selectors
- Toast notification system
- Form validation and submission

### File Structure
```
maplecharmgift/
├── index.html                 # Home page
├── products.html              # Products catalog
├── product-detail.html        # Product details
├── cart.html                  # Shopping cart
├── about.html                 # About us
├── contact.html               # Contact page
├── privacy.html               # Privacy policy
├── shipping.html              # Shipping policy
├── terms.html                 # Terms and conditions
├── returns.html               # Returns and refunds
├── styles.css                 # Custom CSS styles
├── script.js                  # JavaScript functionality
├── README.md                  # Documentation
└── Products/                  # Product images
    ├── 1/                     # Product 1 images
    ├── 2/                     # Product 2 images
    ├── 3/                     # Product 3 images
    ├── 4/                     # Product 4 images
    ├── 5/                     # Product 5 images
    └── 6/                     # Product 6 images
```

## How to Use

1. **Open the Website**: Open `index.html` in a web browser to start
2. **Browse Products**: Navigate to the Products page to see all available items
3. **View Details**: Click on any product to see detailed information
4. **Add to Cart**: Use the "Add to Cart" button to add items to your shopping cart
5. **Manage Cart**: View and modify your cart from the Cart page
6. **Contact**: Use the Contact page for inquiries

## Shopping Cart Features

### Adding Items
- Click "Add to Cart" on any product
- Items are automatically added with default quantity of 1
- Toast notification confirms successful addition

### Managing Cart
- Update quantities using + and - buttons
- Remove items with the trash icon
- Cart persists across browser sessions
- Real-time price calculations

### Cart Summary
- Subtotal calculation
- Shipping costs (free over $50)
- Total amount display
- Checkout button

## Responsive Design

The website is fully responsive and works on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## Browser Compatibility

- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)

## Customization

### Adding New Products
1. Add product images to the Products/ folder
2. Update the products array in script.js
3. Follow the existing product structure

### Modifying Styles
- Edit styles.css for visual changes
- Use CSS variables for consistent theming
- Bootstrap classes can be customized as needed

### Business Information
- Update company details in HTML files
- Modify contact information
- Customize policies as needed

## Notes

- All images are properly referenced from the Products/ folder
- No image repetition or distortion
- Images are sized appropriately for their containers
- All buttons and interactive elements are fully functional
- Cart data persists using localStorage
- Responsive design ensures proper display on all devices

## Support

For any questions or issues with the website, please contact:
- Email: contact@rosellethreadstudio.com
- Website: maplecharmgift.com
