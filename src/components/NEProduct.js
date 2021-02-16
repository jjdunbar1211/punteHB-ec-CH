import React from 'react';
import { Link } from 'react-router-dom';

const NEProduct = ( {msg} ) => {
    return (
        <>
            <div class=" mt-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6" fill={'#DC2626'} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>  
                </div>
                <div>
                  <div class="text-xl font-medium text-black">ERROR</div>
                  <p class="text-gray-500 font-semibold">{ msg }</p>
                </div>
                <div>
                  <Link to="/">
                        <button className="btn2 rounded-lg">
                            Volver a la tienda
                          </button>
                  </Link> 
                </div>
            </div>
        </>
    )
}

export default NEProduct