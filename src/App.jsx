
import { useState } from "react"
import { allCharacters } from "../data/data"
import CharacterDetail from "./components/CharacterDetail"
import CharacterList from "./components/CharacterList"
import Navbar from "./components/Navbar"


function App() {
  const [characters, setCharacters] = useState(allCharacters)
  return (
    <div className="bg-slate-800 grid grid-cols-2">
      <Navbar numResult={characters.length}/>
      <Main characters={characters}>
      <CharacterList characters={characters}/>
      <CharacterDetail/>
      </Main>
    </div>
  )
}

export default App;

function Main({children}){
return (
  <div className="flex m-3 justify-between col-span-2">{children}</div>
)
}
