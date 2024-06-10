import { HeartIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Modal from "./Modal";
import { Character } from "./CharacterList";
import { TrashIcon } from "@heroicons/react/24/outline";

function Navbar({ numResult, query, setQuery, favorites, onDeleteFavorites }) {
  return (
    <div className=" bg-slate-600 col-span-2 p-1 m-3 flex justify-between text-white items-center rounded-lg">
      <div className="">logo</div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="bg-slate-300 p-1 rounded-lg text-black"
        type="text"
        placeholder="search..."
      />
      <div>Found {numResult} characters</div>
      <Favorites favorites={favorites} onDeleteFavorites={onDeleteFavorites} />
    </div>
  );
}

export default Navbar;

function Favorites({ favorites, onDeleteFavorites }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal onOpen={setIsOpen} open={isOpen} title="List of Favorites">
        {favorites.map((item) => (
          <Character key={item.id} item={item}>
            <button onClick={() => onDeleteFavorites(item.id)}>
              <TrashIcon className="w-5 text-red-500" />
            </button>
          </Character>
        ))}
      </Modal>
      <button onClick={() => setIsOpen((is) => !is)}>
        <HeartIcon className="text-red-500" style={{ width: "40px" }} />
        <span className="absolute top-6 right-8">{favorites.length}</span>
      </button>
    </>
  );
}
