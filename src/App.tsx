import { FormEvent, useState } from "react";
import SearchResult from "./components/SearchResult";
function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<any>([]);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const json = await response.json();

    const totalPrice = json.reduce((total, product) => {
      return total + product.price;
    }, 0);

    setResult({ totalPrice, data: json });
  };

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <button>enviar</button>
      </form>
      {result?.data && (
        <SearchResult results={result?.data} price={result.totalPrice} />
      )}
    </div>
  );
}

export default App;
