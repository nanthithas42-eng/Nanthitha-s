---

🧮 Data Source

You can use:

A mock JSON file (e.g., products.json)

A public API (e.g., Fake Store API)

A custom backend serving product data


Example products.json:

[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "category": "Electronics",
    "price": 99.99,
    "rating": 4.5,
    "image": "/images/headphones.jpg"
  },
  {
    "id": 2,
    "name": "Running Shoes",
    "category": "Sportswear",
    "price": 79.99,
    "rating": 4.2,
    "image": "/images/shoes.jpg"
  }
]


---

🧩 Folder Structure

product-catalogue-filters/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── Filters.jsx
│   │   └── SearchBar.jsx
│   ├── data/
│   │   └── products.json
│   ├── pages/
│   │   └── Catalogue.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles/
│       └── styles.css
├── package.json
└── README.md


---

🧠 How It Works

1. All products are fetched from the API or local JSON file.


2. The filter component tracks the user’s filter selections (e.g., category, price).


3. The product list dynamically updates based on applied filters.


4. Search queries further refine visible results.


5. Sorting and pagination (if implemented) enhance usability.




---

🧪 Example Filter Logic (React)

const filteredProducts = products
  .filter(p => (selectedCategory ? p.category === selectedCategory : true))
  .filter(p => p.price >= minPrice && p.price <= maxPrice)
  .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));


---

🖼️ Screenshots

(Add screenshots of your catalogue UI here)


---

🗺️ Future Enhancements

🛒 Add “Add to Cart” and “Wishlist” features

🌐 Integrate with a live backend API

📊 Add analytics and user tracking

🔁 Implement advanced filters (multi-category, color, brand)



---

🤝 Contributing

Contributions are welcome!

1. Fork the repo


2. Create a new branch (feature/filter-enhancements)


3. Commit your changes


4. Push and open a Pull Request
Name:(S.Nanthitha)
Email:(nanthithas42@gmail.com)
github:(https://github.com/Nanthitha752/product-catalogue.git)



---

🪪 License

This project is licensed under the MIT License – see the LICENSE file for details.


---
