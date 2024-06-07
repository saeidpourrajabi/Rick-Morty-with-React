import { useEffect, useState } from "react";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://rickandmortyapi.com/api/character?name=${query}`)
      .then(({ data }) => {
        setCharacters(data.results);
      })
      .catch((err) => {
        setCharacters([]);
        toast.error(err.response.data.error);
      })
      .finally(() => setIsLoading(false));
  }, [query]);

  const handleSelectCharacter = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg-slate-800 grid grid-cols-2">
      <Toaster />
      <Navbar numResult={characters.length} query={query} setQuery={setQuery} />
      <Main characters={characters}>
        <CharacterList
          characters={characters}
          isLoading={isLoading}
          onSelectCharacter={handleSelectCharacter}
          selectedId={selectedId}
        />
        <CharacterDetail selectedId={selectedId} />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="flex m-3 justify-between col-span-2">{children}</div>;
}
