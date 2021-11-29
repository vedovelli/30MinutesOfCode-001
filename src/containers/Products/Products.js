import { http } from "../../service/api";
import { Card } from "./Card";
import { Header, Spinner } from "../../components";
import { useQuery } from "react-query";

export default function Products() {
  const { isLoading, isError, data } = useQuery(
    "todos",
    () => http.get("/products").then(({ data }) => data.products) // http container baseURL with `/api`
  );

  if (isLoading) return <Spinner message="Loading Products" variant="orange" />;
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
