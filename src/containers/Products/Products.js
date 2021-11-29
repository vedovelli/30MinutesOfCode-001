import { http } from "../../service/api";
import { Card } from "./Card";
import { Header } from "../../components";
// import { useQuery } from "react-query";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await http.get("/products");
      setProducts(data?.products ?? []);
    };
    fetchProducts();
  }, []);
  // const { isLoading, isError, data } = useQuery(
  //   "todos",
  //   () => http.get("/products").then(({ data }) => data.products) // http container baseURL with `/api`
  // );

  // if (isLoading) return <Spinner message="Loading Products" variant="orange" />;
  // if (isError) return <p>Error</p>;

  return (
    <>
      <Header>Products</Header>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
