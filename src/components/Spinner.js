import React from 'react'
import {BeatLoader} from 'react-spinners'

const Spinner = () => {
    return(
        <div className="mt-32 flex justify-center">
            <BeatLoader size={32} color="black" loading/>
        </div>
    )
}

export default Spinner