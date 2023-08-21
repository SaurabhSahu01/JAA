import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";


function Spinner(props) {
    return (
        <div className='w-full h-screen bg-white/90 absolute'>
            <div className='w-full h-full flex justify-center items-center'>
                <ClipLoader
                    color={props.color}
                    size={70}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    loading={props.loading}
                />
            </div>
        </div>
    )
}

export default Spinner