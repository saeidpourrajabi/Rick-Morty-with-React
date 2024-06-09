import { HeartIcon } from "@heroicons/react/16/solid"
function Navbar({numResult,query,setQuery,numOfFavorites}) {
  return (
    <div className=" bg-slate-600 col-span-2 p-1 m-3 flex justify-between text-white items-center rounded-lg">
        <div className="">logo</div>
        <input onChange={(e)=>setQuery(e.target.value)} value={query} className="bg-slate-300 p-1 rounded-lg text-black" type="text" placeholder="search..." />
        <div>Found {numResult} characters</div> 
        <Favorites numOfFavorites={numOfFavorites}/>     
    </div>
  )
}

export default Navbar;


function Favorites({numOfFavorites}){
  return <button>
  <HeartIcon className="text-red-500" style={{width:"40px"}}/>
  <span className="absolute top-6 right-8">{numOfFavorites}</span>
</button>
}