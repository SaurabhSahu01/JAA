import React from 'react'

function JNUNews() {
    return (
        <>
            <div className='sm:w-full lg:w-7/12 md:w-8/12 mx-auto flex-col justify-center items-center'>
                {
                    localStorage.getItem('JNUNews') && JSON.parse(localStorage.getItem('JNUNews')).map((item, index) => {
                        return (
                            <div key={index} onClick={() => window.location.href = `${item.url}`} className='w-full h-fit flex-col justify-center items-center mb-3 text-primarycolor cursor-pointer bg-blue-50'>
                                <img src={item.urlToImage} className='w-full aspect-video object-cover mx-auto object-contain'/>
                                <p className='text-2xl font-medium text-center'>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default JNUNews