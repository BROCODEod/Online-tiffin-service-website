
const productsData = [
    { name: "Chocolate Pastry", description: "Delicious chocolate pastry.", price: "$30", image: "552392-Pastry-Dessert.jpg" },
    { name: "Vanilla Pastry", description: "Tasty vanilla pastry.", price: "$15", image: "OIP (2).jpg" },
    { name: "Samosa", description: "Odisha's tasty masala samosa.", price: "$2", image: "vegetarian-traditional-street-food-india_57665-7879.jpg" },
    { name: "Rasgulla", description:"Pure made in Odisha tasty mati handi rasgulla", price: "$5", image: "ae33f9c9c959d51a752f4a5dd83e2921.png"},
    { name: "Chenapoda", description: "Pure made in Odisha tasty chenapoda", price: "$5", image: "maxresdefault.jpg"},
    { name: "Jallebi", description: "Tasty made in INDIA jallebi", price: "$6", image: "R.jpg"},
    { name: "Chicken Peri Peri", description: "Delecious Chicken Peri peri", price: "$8", image: "KFC-style-peri-peri-chicken-strips-recipe-.jpg"},
    { name: "Chicken Butter Pizza", description: "Delecious Chicken Butter Pizza S/M/L", price: "$8", image: "750116709d22b66f510f52cd234b1f70.jpg"},
];


function generateProductCards() {
    const productsContainer = document.querySelector('.products-grid');
    let html = '';
    productsData.forEach(product => {
        html += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">Price: ${product.price}</p>
                <a href="#" class="btn">Add to Cart</a>
            </div>
        `;
    });
    productsContainer.innerHTML = html;
}


document.addEventListener('DOMContentLoaded', generateProductCards);
