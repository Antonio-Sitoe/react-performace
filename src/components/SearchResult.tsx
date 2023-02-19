import { useMemo } from "react";
import ProductItem from "./ProductItem";

type Props = {
  results: {
    price: number;
    id: number;
    title: string;
  }[];
};
// useMemo - evita que alguma coisa que ocupe muito processamento
// seja refeito toda vez que o componente renderizar
function SearchResult({ results }: Props) {
  const totalPrices = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);
  return (
    <ul>
      <h2>{totalPrices}</h2>
      {results.map((result) => {
        return <ProductItem product={result} key={result.id} />;
      })}
    </ul>
  );
}

export default SearchResult;
