import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

function CharacterList({
  characters,
  isLoading,
  onSelectCharacter,
  selectedId,
}) {
  return (
    <div className="flex flex-col p-2 gap-y-3 flex-1 col-span-1 max-w-[50%]">
      {isLoading ? (
        <p className="text-white text-2xl font-bold">
          please wait loading data ...
        </p>
      ) : (
        characters.map((item) => (
          <Character key={item.id} item={item}>
            <button onClick={() => onSelectCharacter(item.id)}>
              {selectedId === item.id ? (
                <EyeSlashIcon className="w-5 text-red-500" />
              ) : (
                <EyeIcon className="w-5 text-red-500" />
              )}
            </button>
          </Character>
        ))
      )}
    </div>
  );
}

export default CharacterList;

export function Character({ item, children }) {
  return (
    <div className="bg-slate-700 p-1 rounded-xl flex text-white items-center gap-x-3 m-2 hover:bg-slate-500 justify-between">
      <div>
        <img className="w-12 rounded-lg" src={item.image} alt={item.name} />
      </div>
      <div className="flex flex-col m-2">
        <CharacterName item={item} />
        <CharacterInfo item={item} />
      </div>
      {children}
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
