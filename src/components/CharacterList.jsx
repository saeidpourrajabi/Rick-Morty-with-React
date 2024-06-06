import { EyeIcon } from "@heroicons/react/16/solid";

function CharacterList({ characters }) {
  return (
    <div className="flex flex-col p-2 gap-y-3">
      {characters.map((item) => (
        <Character key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CharacterList;

function Character({ item }) {
  return (
    <div className="bg-slate-700 p-1 rounded-xl flex text-white items-center gap-x-3 hover:bg-slate-500">
      <div>
        <img className="w-12 rounded-lg" src={item.image} alt={item.name} />
      </div>
      <div className="flex flex-col m-2">
        <CharacterName item={item} />
        <CharacterInfo item={item} />
      </div>
      <button>
        <EyeIcon className="w-5 text-red-500" />
      </button>
    </div>
  );
}

function CharacterName({ item }) {
  return (
    <div className="flex">
      <span>{item.gender === "Male" ? "👨‍🦱" : "👩"}</span>
      <span>{item.name}</span>
    </div>
  );
}

function CharacterInfo({ item }) {
  return (
    <div
      className={`font-extralight text-sm ${
        item.status === "Dead" ? "text-red-500" : "text-green-500"
      }`}>
      <span>{item.status}</span>
      <span> - </span>
      <span>{item.species}</span>
    </div>
  );
}