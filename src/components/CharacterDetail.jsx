import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function CharacterDetail({ selectedId , onAddFavorets , isAddToFavorite }) {
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (selectedId)
      axios
        .get(`https://rickandmortyapi.com/api/character/${selectedId}`)
        .then(({ data }) => {
          setCharacter(data);
          const episodesId = data.episode.map((e) => e.split("/").at(-1));
          axios
            .get(`https://rickandmortyapi.com/api/episode/${episodesId}`)
            .then(({ data: episodesData }) => {
              setEpisodes([episodesData].flat());
            })
            .catch((err) => toast.error(err.message));
        })
        .catch((err) => toast.error(err.message));
  }, [selectedId]);

  if (!character || !selectedId)
    return <p className="text-white">please select a character.</p>;

  return (
    <div className="flex flex-col flex-1 col-span-1 ">
      <div className="flex bg-slate-700 m-3  p-1 rounded-xl gap-x-4">
        <img
          className="w-36 rounded-lg"
          src={character.image}
          alt={character.name}
        />
        <div className="flex flex-col p-2 gap-2">
          <div className="text-white font-extrabold text-lg">
            <span>{character.gender === "Male" ? "👨‍🦱" : "👩"}</span>
            <span>&nbsp;{character.name}</span>
          </div>
          <div
            className={`${
              character.status === "Dead" ? "text-red-500" : "text-green-500"
            }`}>
            <span>{character.status}</span>
            <span> - </span>
            <span>{character.species}</span>
          </div>
          <div className="text-white">
            <p>{character.location.name}</p>
          </div>
          {isAddToFavorite ? (<p className="text-slate-400 text-sm font-thin">Already Added To Favorites ✅</p>) :( <div className="flex p-1 bg-slate-300 rounded-xl justify-center">
            <button onClick={()=>onAddFavorets(character)}>Add To Favorites</button>
          </div>)
          }
        </div>
      </div>
      <div className=" bg-slate-700 m-3  p-1 rounded-xl">
        <div className="flex justify-between p-1 text-white">
          <span className="font-bold">List of Episodes:</span>
          <button>
            <ArrowUpCircleIcon className="w-7" />
          </button>
        </div>
        <ul>
          {episodes.map((e, i) => (
            <li key={e.id} className="flex justify-between p-2">
              <div className="text-white">
                {String(i + 1).padStart(2, "0")} - {e.episode} :{" "}
                <strong>{e.name}</strong>
              </div>
              <div className="text-white bg-slate-400 rounded-lg p-1">
                {e.air_date}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;
