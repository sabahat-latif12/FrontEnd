import { useEffect, useState } from "react";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // Ensure products is declared here
  const [searchedProducts, setSearchedProducts] = useState([]); // Ensure products is declared here
  const [userInput, setuserInput] = useState("");
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data); // Update state with the fetched products
      setSearchedProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);
  const searchHandler = (e) => {
    const userInput = e.target.value;
    const searchResult = products.filter((item, index) => {
      if (item.title.toLowerCase().includes(userInput.toLowerCase())) {
        return true;
      }
    });
    setSearchedProducts(searchResult);
    console.log(searchResult);
  };
  const deleteItem = (id) => {
    const updatedItems = products.filter((currentProduct) => {
      return currentProduct.id !== id;
      <>
        <h1>no data found</h1>
      </>;
    });
    setProducts(updatedItems);
    setSearchedProducts(updatedItems);
    setuserInput(userInput);
  };
  return (
    <div>
      <h1>Products</h1>
      <input onChange={searchHandler} placeholder="search"></input>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {searchedProducts.map(
          (
            ///filter always return true and wich arry returen true ill show result
            product // Use products from state here
          ) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                margin: "16px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h2 style={{ fontSize: "16px" }}>{product.title}</h2>
              <p style={{ fontSize: "11px", color: "#666", margin: "15px" }}>
                {product.discription}
              </p>
              <p>${product.price}</p>
              <button
                onClick={() => {
                  deleteItem(product.id);
                }}
              >
                Delete
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
