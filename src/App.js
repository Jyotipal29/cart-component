import React, { useState } from "react";

const products = ["book", "tops", "jeans"];
const Style = {
  width: "70%",
  height: "10vh",
  border: "1px solid black",
  fontWeight: "bold",
  padding: "0.1em 0.5em",
  margin: ".5rem 0",
  backgroundColor: "gray",
  borderRadius: "0.5rem"
};

function Cart() {
  const [currCart, updateCart] = useState({
    allProducts: products.map((prd) => ({ name: prd, count: 0 }))
  });

  const add = (a) => a + 1;
  const sub = (a) => (a > 0 ? a - 1 : 0);

  function clickHandler(prName, op) {
    updateCart((prevCart) => ({
      allProducts: prevCart.allProducts.map((product) =>
        product.name === prName
          ? {
              ...product,
              count: op === "add" ? add(product.count) : sub(product.count)
            }
          : product
      )
    }));
  }
  return (
    <div className="component">
      <label style={{ fontWeight: "bold", fontSize: "2rem" }}>
        Add to Cart:
      </label>
      <ul style={{ listStyle: "none" }}>
        {currCart.allProducts.map((product, index) => {
          return (
            <li key={index} style={Style}>
              {product.name}
              <div style={{ display: "inline-block", float: "right" }}>
                <button onClick={() => clickHandler(product.name, "add")}>
                  add
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <label style={{ fontWeight: "bold", fontSize: "2rem" }}>Cart:</label>
      <ul style={Style} style={{ listStyle: "none" }}>
        {currCart.allProducts.map((product, index) => {
          if (product.count > 0) {
            return (
              <li key={index} style={Style}>
                {product.name}
                <div style={{ display: "inline-block", float: "right" }}>
                  {product.count}
                  <button onClick={() => clickHandler(product.name, "sub")}>
                    remove
                  </button>
                </div>
              </li>
            );
          }
          return "";
        })}
        <li style={{ ...Style }}>
          Total Items:
          <div style={{ display: "inline-block", float: "right" }}>
            {currCart.allProducts.map((el) => el.count).reduce((a, b) => a + b)}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Cart;
