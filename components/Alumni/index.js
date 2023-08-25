import AlumniCard from "./AlumniCard"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const artAlumnus = [
    {
        id: 1,
        name: "Sanjay Chauhan",
        description: "Film story, Screenplay, Dialogue writer, Author",
        imageSrc: "/jnu/sanjay.webp",
    },
    {
        id: 2,
        name: "P. Jaya Kumar",
        description: "Filmmaker, Screenwriter, Author",
        imageSrc: "/jnu/jaya.webp",
    },
    {
        id: 3,
        name: "Srijit Mukherji",
        description: "Bengali film director",
        imageSrc: "/jnu/srijit.webp",
    },
    {
        id: 4,
        name: "Swara Bhaskar",
        description: "Bollywood actress",
        imageSrc: "/jnu/swara.webp",
    },
    {
        id: 5,
        name: "Archishman Sarker",
        description: "Indian art historian",
        imageSrc: "/jnu/sarker.webp",
    },
    {
        id: 6,
        name: "Shaunak Sen",
        description: "Indian filmmaker, winner of Golden Eye award",
        imageSrc: "/jnu/shaunak.webp",
    },

]
const politicalAlumus = [
    {
        id: 7,
        name: "Baburam Bhattarai",
        description: "36th Prime Minister of Nepal",
        imageSrc: "/jnu/baburam.webp"
    },
    {
        id: 8,
        name: "Ali Zeiden",
        description: "24th Prime Minister of Libya",
        imageSrc: "/jnu/ali.webp"
    }
]


const humanitiesAlumnus = [
    {
        id: 9,
        name: 'Abhijit Banerjee',
        description: 'Nobel Laureate in Economics (2019)',
        imageSrc: '/jnu/abhijit.webp',
    },
    {
        id: 10,
        name: "Anant Kumar",
        description: "Award-winning German Writer in Kassel and Resident Writer of Royal City Gotha",
        imageSrc: '/jnu/ananth.webp',
    },
    {
        id: 11,
        name: "David Vumlallian Zou",
        description: "historian",
        imageSrc: '/jnu/david.webp',
    },
    {
        id: 12,
        name: "Muzaffar Alam",
        description: "George V. Bobrinsky Professor of History at University of Chicago",
        imageSrc: '/jnu/alam.webp',
    },
    {
        id: 13,
        name: "Sanjoy Bhattacharya",
        description: "historian",
        imageSrc: '/jnu/sanjoy.webp',
    },

]
const militaryAlumnus = [
    {
        id: 14,
        name: "R. Hari Kumar",
        description: "Chief of Personnel of the Indian Navy",
        imageSrc: '/jnu/radhakrishnan.webp',
    },
    {
        id: 15,
        name: "Anjana Sinha",
        description: "Director of National Industrial Security Academy",
        imageSrc: '/jnu/anjana.webp',
    },
    {
        id: 17,
        name: "Soumen Mitra",
        description: "Police Commissioner of Kolkata",
        imageSrc: '/jnu/Soumen.webp',
    },
]
const scienceAlumnus = [
    {
        id: 18,
        name: "Alok Bhattacharya",
        description: "Parasitologist and Shanti Swarup Bhatnagar laureate",
        imageSrc: '/jnu/alok.webp'
    },
    {
        id: 19,
        name: "Apurva Sarin",
        description: "Cell biologist, N-Bios laureate",
        imageSrc: '/jnu/apurva.webp'
    },
    {
        id: 20,
        name: "Arun Kumar Shukla",
        description: "structural biologist, N-Bios laureate, Shanti Swarup Bhatnagar laureate",
        imageSrc: '/jnu/arun.webp'
    },
    {
        id: 21,
        name: "Gaiti Hasan",
        description: "microbiologist",
        imageSrc: ''
    },
    {
        id: 22,
        name: "Srinivasan Ramachandran",
        description: "bioinformatician, N-Bios laureate",
        imageSrc: ''
    },
    {
        id: 23,
        name: "Suman Kumar Dhar",
        description: "Molecular biologist, Shanti Swarup Bhatnagar laureate",
        imageSrc: ''
    },
    
]
const alumnus = [
    {
        id: 27,
        name: "Abdul Sattar Murad",
        description: "Minister of Economy, Afghanistan",
        imageSrc: ""
    },
    {
        id: 28,
        name: "Ajit Seth",
        description: "30th Cabinet Secretary of India",
        imageSrc: ""
    },
    {
        id: 29,
        name: "Amitabh Kant",
        description: "CEO of NITI Aayog",
        imageSrc: ""
    },
    {
        id: 30,
        name: "Amitabh Rajan",
        description: "Home Secretary of Maharashtra",
        imageSrc: ""
    },
    {
        id: 31,
        name: "Arvind Gupta",
        description: "Deputy National Security Advisor of India",
        imageSrc: ""
    },
    {
        id: 32,
        name: "Ashok Tanwar",
        description: "Former President of Indian Youth Congress",
        imageSrc: ""
    },
    {
        id: 33,
        name: "Aishe Ghosh",
        description: "Student Activist",
        imageSrc: ""
    },
    {
        id: 35,
        name: "Muhammed Muhsin",
        description: "Politician Communist Party of India, MLA - Kerala Legislative Assembly",
        imageSrc: ""
    },
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
        imageSrc: '/jnu/jaishankar.webp',
    },

    {
        id: 38,
        name: 'Sita Ram Yechury',
        description: 'General Secretary of CPI(M)',
        imageSrc: '/jnu/sitaram.webp',
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
    {
        id: 42,
        name: "Dipsita Dhar",
        description: "Student Activist",
        imageSrc: ""
    },
    {
        id: 43,
        name: "Chandan Kumar",
        description: "Student Activist",
        imageSrc: ""
    },
    {
        id: 44,
        name: "Lê Lương Minh",
        description: "13th Secretary General of ASEAN",
        imageSrc: ""
    },
    {
        id: 45,
        name: "Jyotindra Dixit",
        description: "2nd National Security Adviser",
        imageSrc: ""
    },
    {
        id: 46,
        name: "Nirmala Sitharaman",
        description: "Former Defense Minister of India",
        imageSrc: ""
    },
    {
        id: 47,
        name: "Palagummi Sainath",
        description: "Renowned journalist, Ramon Magsaysay Laureate",
        imageSrc: ""
    },
    {
        id: 48,
        name: "Ranjit Nayak",
        description: "World Bank's Chief for Kosovo",
        imageSrc: ""
    },
    {
        id: 49,
        name: "Shehla Rashid",
        description: "student activist",
        imageSrc: ""
    },
    {
        id: 50,
        name: "Subrahmanyam Jaishankar",
        description: "IFS Officer, 30th Foreign Secretary of India Minister of External Affairs",
        imageSrc: ""
    },
    {
        id: 51,
        name: "Syed Ibrahim",
        description: "24th Director of Intelligence Bureau",
        imageSrc: ""
    },
    {
        id: 52,
        name: "Venu Rajamony",
        description: "IFS Officer. Former Press Secretary to President of India",
        imageSrc: ""
    }
    // More alumnus...
]

export default function Alumni() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 id="alumnus-heading" className="sr-only">
                    Alumni
                </h2>
                <div>

                    <h2 className=" text-3xl">
                        Art Alumni
                    </h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-4">
                        {artAlumnus.map((alumni) => (
                            <AlumniCard alumni={alumni} />
                        ))}
                    </div>
                </div>
                <div>

                    <h2 className=" text-3xl">
                        Politics and Law Alumni
                    </h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {politicalAlumus.map((alumni) => (
                            <AlumniCard alumni={alumni} />
                        ))}
                    </div>
                </div>
                <div>

                    <h2 className=" text-3xl">
                        Humanities and Social Sciences
                    </h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-4">
                        {humanitiesAlumnus.map((alumni) => (
                            <AlumniCard alumni={alumni} />
                        ))}
                    </div>
                </div>
                <div>

                    <h2 className=" text-3xl">
                        Military and police
                    </h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-4">
                        {militaryAlumnus.map((alumni) => (
                            <AlumniCard alumni={alumni} />
                        ))}
                    </div>
                </div>
                <div>

                    <h2 className=" text-3xl">
                        Science and Technology
                    </h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-4">
                        {scienceAlumnus.map((alumni) => (
                            <AlumniCard alumni={alumni} />
                        ))}
                    </div>
                </div>
                <div>

                    <h2 className=" text-3xl">
                        Others
                    </h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-4">
                        {alumnus.map((alumni) => (
                            <AlumniCard alumni={alumni} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
