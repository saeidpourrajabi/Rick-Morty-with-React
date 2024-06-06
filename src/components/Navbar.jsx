import { HeartIcon } from "@heroicons/react/16/solid"
function Navbar({numResult}) {
  return (
    <div className=" bg-slate-600 col-span-2 p-1 m-3 flex justify-between text-white items-center rounded-lg">
        <div className="">logo</div>
        <input className="bg-slate-300 p-1 rounded-lg" type="text" placeholder="search..." />
        <div>Found {numResult} characters</div>
        <button>
            <HeartIcon className="text-red-500" style={{width:"40px"}}/>
            <span className="absolute top-6 right-8">4</span>
        </button>
    </div>
  )
}

export default Navbar;