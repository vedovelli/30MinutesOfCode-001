import { http } from "../../service/api";
import { Card } from "./Card";
import { Header } from "../../components/Header/Header";
import { useQuery } from "react-query";

export default function Products() {
  const { isLoading, isError, data } = useQuery("todos", () =>
    http.get("/products").then(({ data }) => data.products)
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <>
      <Header>Products</Header>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
