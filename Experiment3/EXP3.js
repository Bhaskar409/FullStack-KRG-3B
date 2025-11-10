const products = [
      { id: 1, name: "iPhone 15", category: "Mobile", price: 1200 },
      { id: 2, name: "Samsung Galaxy S23", category: "Mobile", price: 1100 },
      { id: 3, name: "MacBook Pro", category: "Laptop", price: 2500 },
      { id: 4, name: "Dell XPS 13", category: "Laptop", price: 1800 },
      { id: 5, name: "Sony Headphones", category: "Accessories", price: 200 },
      { id: 6, name: "Logitech Mouse", category: "Accessories", price: 50 },
    ];

    const productContainer = document.getElementById("productContainer");
    const categoryFilter = document.getElementById("categoryFilter");

  
    function renderProducts(productList) {
      if (productList.length === 0) {
        productContainer.innerHTML = '<p class="no-products">No products found!</p>';
        return;
      }

      productContainer.innerHTML = productList
        .map(
          (product) => `
          <div class="product-card">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
          </div>
        `
        )
        .join("");
    }

   
    renderProducts(products);

   
    categoryFilter.addEventListener("change", () => {
      const selectedCategory = categoryFilter.value;

      const filteredProducts =
        selectedCategory === "All"
          ? products
          : products.filter((product) => product.category === selectedCategory);

      renderProducts(filteredProducts);
    });
