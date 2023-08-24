import React from 'react'
import cookieCutter from 'cookie-cutter';
import { db } from '@/src/utils/firebase';
import { doc, onSnapshot } from "firebase/firestore"
import secureLocalStorage from 'react-secure-storage';
import { useRouter } from 'next/router';
import EventCard from './EventCard';

function Home() {
  const router = useRouter();
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    const uid = cookieCutter.get('uid');
    if (uid) {
      const profileRef = doc(db, 'users', uid, 'profile', 'profile');
      const unsubscribe = onSnapshot(profileRef, snapshot => {
        secureLocalStorage.setItem('profile', JSON.stringify(snapshot.data()));
      });
      return () => {
        unsubscribe();
      }
    }
  }, []);
  React.useEffect( () => {
    fetch('api/getuserevents', {
      method: "GET",
      headers: {
        'Content-type' : "application/json; charset=utf-8;"
    },
    }).then(res => res.json()).then(data => {
      console.log(data.data)
      setEvents(data.data);
    }).catch(err => console.error(err));
  }, [])
  return (
    <div>
      <div>
        <div className="container-fluid mx-auto flex flex-wrap bg-white ">
          <section className="w-full md:w-2/3 flex flex-col items-center px-3 pt-5">

            <article className="flex flex-col  rounded-md my-4 w-full bg-white">

              <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer ">
                <img className="object-cover w-full z-0" style={{ height: '600px' }} src={"/jnu/library.jpg"} />

                <div className="absolute top-0 left-0 px-6 py-4 text-primarycolor text-2xl font-semibold">
                  JNU Central Library
                  {/* <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p> */}
                </div>
              </div>


              <center>
                <div className='inline-block pt-56 pb-12   w-full'>
                  <div className="inline-block mr-6 ml-6 cursor-pointer" onClick={() => router.push('/gallery')}>
                    <div className=" h-28 w-28  rounded-full items-center justify-center flex	" style={{ backgroundColor: '#1B2D56' }}>
                      <img className="	 h-16 w-16 ... " src={"/icons/image-gallery.png"} /></div>
                    <div className="      items-center justify-center mt-4 	">
                      <h2 className="font-semibold text-lg text-center text-gray-800 mt-2"> Gallery </h2>
                    </div>
                  </div>


                  <div className="inline-block mr-6 ml-6 cursor-pointer" onClick={() => router.push('/messages')}>

                    <div className=" h-28 w-28  rounded-full items-center justify-center flex	" style={{ backgroundColor: '#1B2D56' }}>
                      <img className="	 h-16 w-16 ... " src={"/icons/image-gallery.png"} /></div>
                    <div className="      items-center justify-center mt-4 	">
                      <h2 className="font-semibold text-lg text-center text-gray-800 mt-2"> Messages </h2>
                    </div>
                  </div>


                  <div className="inline-block mr-6 ml-6 cursor-pointer" onClick={() => router.push('/feeds')}>
                    <div className=" h-28 w-28  rounded-full items-center justify-center flex	" style={{ backgroundColor: '#1B2D56' }}>
                      <img className="	 h-16 w-16 ... " src={"/icons/newspaper.png"} /></div>
                    <div className="      items-center justify-center mt-4 	">
                      <h2 className="font-semibold text-lg text-center text-gray-800 mt-2"> Feeds </h2>
                    </div>
                  </div>

                  <div className="inline-block mr-6 ml-6 cursor-pointer" onClick={() => router.push('/join')}>
                    <div className=" h-28 w-28  rounded-full items-center justify-center flex	" style={{ backgroundColor: '#1B2D56' }}>
                      <img className="	 h-16 w-16 ... " src={"/icons/briefcase.png"} /></div>
                    <div className="      items-center justify-center mt-4 	">
                      <h2 className="font-semibold text-lg text-center text-gray-800 mt-2"> Join </h2>
                    </div>
                  </div>
                </div>
              </center>
            </article>
          </section>






          {/* Sidebar Section */}
          <aside className="w-full md:w-1/3 flex flex-col items-center px-3 mt-5    ">
            <div className="w-full bg-white shadow flex flex-col my-4 p-6 rounded-md pb-5 home-gallary hide-scroll">
              <p className="text-xl font-semibold pb-5">Important Dates</p>
              {
                (events?.length) && events.map((event, index) => {
                  return <EventCard event={event.data.event} date={event.data.date} key={index}/>
                })
              }
            </div>


            <div className="w-full bg-white shadow rounded-lg flex flex-col my-4 p-6 round-md  home-gallary  hide-scroll">
              <p className="text-xl font-semibold pb-5 pt-5">Gallery</p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 home-gallary hide-scroll">

                <div><img className="h-30  max-w-full  rounded-lg object-cover" src={"/gallery/jnu/254788437_618057452882154_1878271647435269536_n.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141590701.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141598497.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141608018.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141618359.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141627078.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141670862.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141678775.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141690536.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141699489.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141786041.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141869117.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141875442.jpg"} alt="" /></div>
                <div><img className="h-30  max-w-full  rounded-lg" src={"/gallery/jnu/1636141885670.jpg"} alt="" /></div>




              </div>



            </div>

          </aside>
          <div className='flex flex-col-reverse md:flex-row w-fit mx-auto sm:px-6 lg:px-8 items-center justify-between shadow-md mt-12 mb-10 p-4'>
            <p className='p-4 text-justify md:w-1/2 bg-[#F5F5F5] rounded-md mt-6 h-5/6'>Meet the dynamic force behind the JNU Alumni Association (Registered) - Mr. Jyoti Kumar Singh! A trailblazing visionary, he ignited the association&apos;s spark, setting it on a remarkable journey of growth and connection. What&apos;s truly captivating is how he initially steered this ship solo, channeling his passion into every aspect. As the association blossomed, it became a magnet for like-minded souls, eager to contribute and share in his dream. Mr. Singh&apos;s journey showcases the incredible allure of one person&apos;s vision, which ignited a fire that now unites and inspires many!</p>
            <img className='w-full mt-6 md:w-5/12 h-5/6  rounded-md' src='/jnu/jyoti.jpg' />
          </div>
        </div>
        <footer className="w-full border-t " style={{ backgroundColor: "#E9EFFF" }}>


          <div className='font-medium place-self-center justify-self-center text-2xl  pt-12 w-full'>  <center>Gallery  of Fame</center>
          </div>

          <div className=" py-24 sm:py-24">


            <ul role="list" className="grid  sm:grid-cols-3  ">


              <div className="    p-5">
                <img className="w-32 h-32 rounded-full mx-auto" src={"/jnu/nirmala.jpg"} alt="Profile picture" />
                <h2 className="text-center text-2xl font-semibold mt-3">Nirmala Sitharaman</h2>
                <p className="text-center text-gray-600 mt-1 pb-8">Minister of Finance & Corporate Affairs</p>

              </div>


              <div className=" p-5">
                <img className="w-32 h-32 object-fill rounded-full mx-auto" src="/jnu/SJai.jpeg" alt="Profile picture" />
                <h2 className="text-center text-2xl font-semibold mt-3">S. Jaishankar</h2>
                <p className="text-center text-gray-600 mt-1">Minister of External Affairs</p>


              </div>


              <div className=" p-5">
                <img className="w-32 h-32 rounded-full mx-auto" src="/jnu/ABan.jpeg" alt="Profile picture" />
                <h2 className="text-center text-2xl font-semibold mt-3">Abhijit Banerjee</h2>
                <p className="text-center text-gray-600 mt-1">Nobel Laureate in Economics (2019)</p>


              </div>



            </ul>
          </div>


        </footer>
      </div>


    </div>
  )
}

export default Home