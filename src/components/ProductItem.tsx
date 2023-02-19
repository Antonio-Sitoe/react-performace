import React from "react";

interface produtctItemProps {
  product: {
    price: number;
    id: number;
    title: string;
  };
}

function ProductItem({ product }: produtctItemProps) {
  return (
    <li>
      <h1>{product.title}</h1>
      <p>Preco: {product.price}</p>
    </li>
  );
}
// O memo evita que a o nosso componente entre no fluxo de
// renderizacao se a condicao que for colocarada nao for satisfeita
// podemos comparar usando um ===
// Em qual situacao eu posso usar o React.memo()
// a comparacao tem custo.

// 1.  Componentes Puros - usamos o memo quando os componentes sao puros - componentes apenas para
// sempre que passar.
// 2. Compoentes que renderizam muito
// 3  Quando o componente renderiza muitas vezes com a mesma props.
// 4. Ganha muito mais performace quando o componente for Medio e grande porte
export default React.memo(ProductItem, (previStates, nextStates) =>
  Object.is(previStates.product, nextStates.product)
);
