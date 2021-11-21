import { useEffect, useState } from "react";
import { http } from "../../service/api";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    http.get("/products").then(({ data }) => setProducts(data.products));
  }, []);

  return products.map((product) => <p key={product.id}>{product.name}</p>);
}
