import React from "react";
import ImageViewer from 'react-simple-image-viewer';

const alumniList = [
    {
        ListTitle: "Art Alumni",
        List: [
            {
                id: 1,
                name: "Sanjay Chauhan",
                description: "Film story, Screenplay, Dialogue writer, Author",
                imageSrc: "/jnu/sanjay.webp",
            },
            {
                id: 4,
                name: "Swara Bhaskar",
                description: "Bollywood actress",
                imageSrc: "/jnu/swara.webp",
            },
        ]
    },
    {
        ListTitle: "Politics and Law Alumni",
        List: [
            {
                id: 7,
                name: "Baburam Bhattarai",
                description: "36th Prime Minister of Nepal",
                imageSrc: "/jnu/baburam.webp"
            },
        ]
    },
    {
        ListTitle: "Humanities and Social Sciences",
        List: [
            {
                id: 9,
                name: 'Abhijit Banerjee',
                description: 'Nobel Laureate in Economics (2019)',
                imageSrc: '/jnu/abhijit.webp',
            },
        ]
    },
    {
        ListTitle: "Others",
        List: [
            {
                id: 36,
                name: 'Nirmala Sitharaman',
                description: 'Minister of Finance & Corporate Affairs',
                imageSrc: '/jnu/nirmala.webp',
            },
            {
                id: 37,
                name: 'S. Jaishankar',
                description: 'Minister of External Affairs',
                imageSrc: '/jnu/SJai.webp',
            },
            {
                id: 38,
                name: 'Sita Ram Yechury',
                description: 'General Secretary of CPI(M)',
                imageSrc: '/jnu/Sitaram.webp',
            },
            {
                id: 39,
                name: 'Prakash Karat',
                description: 'Former general secretary of CPI (2005 to 2015)',
                imageSrc: '/jnu/PrakashKarat.webp',
            },
            {
                id: 40,
                name: 'Devi Prasad Tripathi',
                description: 'General Secretary of NCP of India.',
                imageSrc: '/jnu/dp.webp',
            },
            {
                id: 41,
                name: 'Santishree Dhulipudi Pandit',
                description: 'Vice-chancellor of JNU',
                imageSrc: '/jnu/santi.webp',
            },

        ]
    }
]

export default function Alumni() {


    const [currentImage, setCurrentImage] = React.useState(0);
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const [photo, setPhoto] = React.useState(null);

    const openImageViewer = React.useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className="">
            <div className="mx-auto w-11/12 p-5 py-10">
                <div className="">
                    {
                        alumniList.map((cat, index) => {
                            return (
                                <div key={index} className="mt-20" >
                                    <h2 className=" text-3xl">
                                        {cat.ListTitle}
                                    </h2>

                                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-8">
                                        {cat.List.map((alumni) => (
                                            <div key={alumni.id} className="group m-4">
                                                <img
                                                    src={alumni.imageSrc}
                                                    alt={alumni.name}
                                                    onClick={() => {
                                                        setPhoto(alumni.imageSrc);
                                                        openImageViewer(0)
                                                        }}
                                                    className="h-[12rem] w-[12rem] rounded-full mx-auto object-cover object-center group-hover:opacity-75"
                                                />

                                                <div>
                                                    {isViewerOpen && (
                                                        <ImageViewer
                                                            src={[photo]}
                                                            currentIndex={currentImage}
                                                            disableScroll={true}
                                                            closeOnClickOutside={true}
                                                            onClose={closeImageViewer}
                                                            backgroundStyle={{ backdropFilter: "blur(10px)", backgroundColor: "transparent", zIndex: "10" }}
                                                        />
                                                    )}
                                                </div>

                                                <div className="mt-1 flex flex-col items-center text-center text-base font-medium text-gray-900">
                                                    <h3>{alumni.name}</h3>
                                                    <p className="mt-1 text-sm italic text-gray-500">{alumni.description}</p>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
