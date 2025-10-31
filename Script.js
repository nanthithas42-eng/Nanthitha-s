const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 299, img: "https://via.placeholder.com/200" },
  { id: 2, name: "Laptop", category: "electronics", price: 899, img: "https://via.placeholder.com/200" },
  { id: 3, name: "T-Shirt", category: "fashion", price: 25, img: "https://via.placeholder.com/200" },
  { id: 4, name: "Sofa", category: "home", price: 450, img: "https://via.placeholder.com/200" },
  { id: 5, name: "Microwave", category: "home", price: 120, img: "https://via.placeholder.com/200" },
  { id: 6, name: "Jeans", category: "fashion", price: 60, img: "https://via.placeholder.com/200" },
  { id: 7, name: "Headphones", category: "electronics", price: 75, img: "https://via.placeholder.com/200" },
  { id: 8, name: "Watch", category: "fashion", price: 150, img: "https://via.placeholder.com/200" }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const searchBox = document.getElementById("searchBox");

function displayProducts(items) {
  productList.innerHTML = "";
  if (items.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }
  items.forEach(p => {
    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">$${p.price}</p>
      <p>${p.category}</p>
    `;
    productList.appendChild(product);
  });
}

function filterProducts() {
  let filtered = products;
  const category = categoryFilter.value;
  const price = priceFilter.value;
  const search = searchBox.value.toLowerCase();

  if (category !== "all") filtered = filtered.filter(p => p.category === category);
  if (price !== "all") {
    filtered = filtered.filter(p => {
      if (price === "low") return p.price < 100;
      if (price === "medium") return p.price >= 100 && p.price <= 500;
      if (price === "high") return p.price > 500;
    });
  }
  if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
  
  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
searchBox.addEventListener("input", filterProducts);

displayProducts(products);
