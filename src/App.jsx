import { useEffect, useState } from "react";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(({ data }) => setCharacters(data.results))
      .catch((err) => toast.error(err.message))
      .finally(()=>setIsLoading(false));
  }, []);
  return (
    <div className="bg-slate-800 grid grid-cols-2">
      <Toaster />
      <Navbar numResult={characters.length} />
      <Main characters={characters}>
        <CharacterList characters={characters} isLoading={isLoading} />
        <CharacterDetail />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="flex m-3 justify-between col-span-2">{children}</div>;
}
