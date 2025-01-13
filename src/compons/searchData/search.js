
export default function Search({setValue}){
    return(
        <>
        <div className='max-w-lg mx-auto'>
        <div className="flex">
            <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm
                 text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border
                  border-gray-300 focus:ring-orange-700 dark:focus:ring-blue-500 focus:border-orange-500 dark:bg-gray-700
                   dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:border-blue-500" placeholder="Search" required onChange={e=> setValue(e.target.value)}/>
                <button className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white
                 bg-orange-700 rounded-e-lg border border-orange-700 dark:border-blue-700
                  hover:bg-orange-700 
                  focus:ring-4 focus:ring-orange-700
                   focus:outline-none 
                    dark:bg-blue-600 dark:hover:bg-blue-700
                     dark:focus:ring-blue-800">
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </div>
    </div>
     </>
    )
}

