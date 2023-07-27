import React from 'react'
import { newsAPI } from '@/firebase.config';

function JNUNews() {
    const [mount, setMount] = React.useState(false);
    const [fetchdata, setFetchData] = React.useState(localStorage.getItem('JNUNews'));

    React.useEffect(() => {
        if (!localStorage.getItem('JNUNews')) {
            console.log("if")
            // fetch from the API and store the data in the localStorage
            fetch(`https://newsapi.org/v2/everything?q=JNU&from=2023-06-27&sortBy=publishedAt&apiKey=${newsAPI}`)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('JNUNews', JSON.stringify(data.articles));
                })
                .catch(err => {
                    console.log("error fetching the newsAPI, ", err);
                })
        }
        setMount(true);
        setFetchData(localStorage.getItem('JNUNews'));
    }, [fetchdata])
    return (
        mount && <>
            <div className='w-full sm:h-[4rem] md:h-[7rem] flex-col justify-center items-center'>
                {
                    localStorage.getItem('JNUNews') && JSON.parse(localStorage.getItem('JNUNews')).map((item, index) => {
                        return (
                            <div key={index} onClick={() => window.location.href = `${item.url}`} className='flex-col justify-start items-center mb-3 bg-primarycolor text-slate-50'>
                                <div className='w-full flex justify-center items-center'>
                                    <img src={item.urlToImage} />
                                </div>
                                <p className='text-2xl font-medium'>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default JNUNews