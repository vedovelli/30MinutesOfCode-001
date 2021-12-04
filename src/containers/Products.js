import { http } from "../service/api";
import { Spinner } from "../components";
import { useQuery } from "react-query";
import { Products } from "../features/Products/Products";

export default function ProductsContainer() {
  const { isLoading, isError, data } = useQuery("todos", () =>
    http.get("/products").then(({ data }) => data.products)
  );

  if (isLoading) return <Spinner message="Loading Products" variant="orange" />;
  if (isError) return <p>Error</p>;

  return <Products products={data} />;
}
