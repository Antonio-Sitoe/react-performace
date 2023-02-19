import { useMemo } from "react";
import ProductItem from "./ProductItem";

type Props = {
  results: {
    price: number;
    id: number;
    title: string;
  }[];
  price: number;
};
// useMemo - evita que alguma coisa que ocupe muito processamento
// seja refeito toda vez que o componente renderizar

// usar o useMemo:

// 1. Calculos pesados
// 2. Igualdade referencial - quando repassamos a informacao a um componente filho.
function SearchResult({ results, price }: Props) {
  return (
    <ul>
      <h2>{price}</h2>
      {results.map((result) => {
        return <ProductItem product={result} key={result.id} />;
      })}
    </ul>
  );
}

export default SearchResult;
