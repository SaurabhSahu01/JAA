import React from 'react';

function AlumniCard({alumni}) {
    return (
        <div key={alumni.id} className="group">
                <div className="aspect-h-1  aspect-w-1 h-5/6 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                  <img
                    src={alumni.imageSrc}
                    alt="image preview"
                    className=" h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{alumni.name}</h3>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">{alumni.description}</p>
              </div>
    )
}

export default AlumniCard